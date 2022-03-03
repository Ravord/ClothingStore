import { remove } from '../redux/cartActions.js'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { ButtonPrimary } from '../MinorComponents.jsx'

const ProductsDiv = styled.div`
  box-shadow: var(--main-shadow);
  display: flex;
  flex-direction: column;
  margin: 1.5rem;
  padding: 1.5rem;
  width: 85%;
  @media (max-width: 1024px) {
    margin: 1.5rem 0% 0% 0%;
    padding: 0%;
    width: 100%;
  }
`
const ShoppingCartText = styled.b`
  color: var(--2nd-font-color);
  font-size: 1.25rem;
  margin: 1.25rem;
  @media (max-width: 1024px) {
    text-align: center;
  }
`
const ShoppingCartTextSmall = styled(ShoppingCartText)`
  font-size: 1rem;
`
const ProductDiv = styled.div`
  align-items: center;
  border-radius: 0.75rem;
  color: var(--font-color);
  display: flex;
  justify-content: space-between;
  margin: 1.25rem;
  padding: 1.25rem;
  :nth-child(2n) {
    background-color: var(--accent-color);
    color: white;
  }
  @media (max-width: 1024px) {
    margin: 0.5rem;
    padding: 0.5rem;
  }
`
const ImgWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 5rem;
  justify-content: center;
  width: 10rem;
  @media (max-width: 1024px) {
    height: 2.5rem;
    width: 5rem;
  }
`
const ProductImg = styled.img`
  border-radius: 0.5rem;
  max-height: 100%;
  max-width: 100%;
  @media (max-width: 1024px) {
    border-radius: 0.25rem;
  }
`
const ProductInfo = styled.a`
  font-size: 1.25rem;
  text-align: center;
  width: 8rem;
  word-break: break-word;
  @media (max-width: 1024px) {
    font-size: 1rem;
    width: 4rem;
  }
`
const Remove = styled(ButtonPrimary)`
  border: solid white;
  :active, :hover {
    border: solid var(--font-color);
  }
  @media (max-width: 1024px) {
    font-size: 0.75rem;
    padding: 0.25rem;
    width: 4rem;
  }
`

export default function ProductsSection() {
  let dispatch = useDispatch()
  let cart = useSelector((state) => state.cart)
  function removeFromCart(name, nanoid) {
    let isUserSure = confirm(`Remove "${name}"?`)
    if (isUserSure) {
      dispatch(remove(nanoid))
    }
    return
  }
  return (
    <ProductsDiv>
      <ShoppingCartText>Shopping Cart</ShoppingCartText>
      {
        cart.length ?
          cart.map(({ imageURL, name, nanoid, price }) => {
            return <ProductDiv key={nanoid}>
              <ImgWrapper>
                <ProductImg alt={`${name} image`} loading='lazy' src={imageURL} />
              </ImgWrapper>
              <ProductInfo>{name}</ProductInfo>
              <ProductInfo>{'$' + price.toFixed(2)}</ProductInfo>
              <Remove onClick={() => removeFromCart(name, nanoid)}>Remove from Cart</Remove>
            </ProductDiv>
          }) :
          <ShoppingCartTextSmall>Nothing here...</ShoppingCartTextSmall>
      }
    </ProductsDiv>
  )
}
