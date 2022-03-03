import { useSelector } from 'react-redux'
import styled from 'styled-components'
import axios from 'axios'

import { ButtonPrimary } from '../MinorComponents.jsx'

const SubtotalDiv = styled.div`
  box-shadow: var(--main-shadow);
  display: flex;
  flex-direction: column;
  height: fit-content;
  margin: 1.5rem;
  padding: 1.5rem;
  width: 15%;
  @media (max-width: 1024px) {
    margin: 1.5rem 0% 0% 0%;
    padding: 0%;
    width: 100%;
  }
`
const SubtotalText = styled.a`
  color: var(--2nd-font-color);
  margin: 0.75rem 0.25rem;
  text-align: center;
`
const SubtotalTextBold = styled.b`
  color: var(--font-color);
`
const Proceed = styled(ButtonPrimary)`
  margin: 0.75rem 0.25rem;
`

export default function SubtotalSection() {
  let cart = useSelector((state) => state.cart)
  function sum(cart) {
    let reduced = cart.reduce((acc, product) => {
      return acc + product.price
    }, 0)
    return reduced.toFixed(2)
  }
  async function checkout(cart) {
    if (!cart.length) return
    let ids = cart.map((product) => {
      return {
        _id: product._id
      }
    })
    try {
      let { data: { url } } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/stripe`, {
        products: ids
      })
      window.location = url
    }
    catch (err) {
      console.log(err)
    }
  }
  return (
    <SubtotalDiv>
      <SubtotalText>Subtotal (<SubtotalTextBold>{cart.length}</SubtotalTextBold> item/s): <SubtotalTextBold>{'$' + sum(cart)}</SubtotalTextBold></SubtotalText>
      <Proceed onClick={() => checkout(cart)}>Proceed to checkout</Proceed>
    </SubtotalDiv>
  )
}
