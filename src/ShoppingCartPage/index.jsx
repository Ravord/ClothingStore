import styled from 'styled-components'

import Banner from '../Banner.jsx'
import ProductsSection from './ProductsSection.jsx'
import SubtotalSection from './SubtotalSection.jsx'

const CartContent = styled.div`
  display: flex;
  margin: 1.5rem;
  @media (max-width: 1024px) {
    flex-direction: column;
    margin: 0%;
  }
`

export default function ShoppingCart() {
  return (
    <>
      <Banner></Banner>
      <CartContent>
        <ProductsSection />
        <SubtotalSection />
      </CartContent>
    </>
  )
}
