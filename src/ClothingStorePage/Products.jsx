import { useEffect, useState } from 'react'
import { add } from '../redux/cartActions.js'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import axios from 'axios'
import { nanoid } from 'nanoid'

import { ButtonPrimary } from '../MinorComponents.jsx'

const LoadingText = styled.h2`
  background-color: var(--accent-color);
  box-shadow: 0rem 0rem 0.75rem 0.25rem lightgray;
  color: white;
  font-size: 1.25rem;
  padding: 0.75rem;
  text-align: center;
`
const ProductsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 2rem;
`
const ProductDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 2rem;
`
const ImgWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 15rem;
  justify-content: center;
  width: 25rem;
  @media (max-width: 768px) {
    height: 6rem;
    width: 10rem;
  }
`
const ProductImg = styled.img`
  color: var(--font-color);
  max-height: 100%;
  max-width: 100%;
`
const Wrapper = styled.div`
  align-items: center;
  display: flex;
  font-size: 1.5rem;
  justify-content: space-evenly;
  padding: 1rem 0%;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`
const Price = styled.b`
  color: var(--font-color);
`

export default function Products() {
  let [isLoadingProducts, setIsLoadingProducts] = useState(() => null)
  let [products, setProducts] = useState(() => [])
  let dispatch = useDispatch()
  useEffect(async () => {
    setIsLoadingProducts(true)
    let { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/products`)
    setProducts(data)
    setIsLoadingProducts(false)
  }, [])
  function addToCart(_id, imageURL, name, nanoid, price) {
    dispatch(add({
      _id,
      imageURL,
      name,
      nanoid,
      price
    }))
    alert(`Added "${name}"`)
  }
  return (
    isLoadingProducts === false ?
      <ProductsDiv>
        {
          products.map(({ _id, imageURL, name, price }) => {
            return <ProductDiv key={_id}>
              <ImgWrapper>
                <ProductImg alt={name} loading='lazy' src={imageURL} />
              </ImgWrapper>
              <Wrapper>
                <Price>{'$' + price.toFixed(2)}</Price>
                <ButtonPrimary onClick={() => addToCart(_id, imageURL, name, nanoid(), price)}>Add to Cart</ButtonPrimary>
              </Wrapper>
            </ProductDiv>
          })
        }
      </ProductsDiv> :
      <LoadingText>Loading products...</LoadingText>
  )
}
