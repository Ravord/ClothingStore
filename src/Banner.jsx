import { useSelector } from 'react-redux'
import { Link as RouteLink } from 'react-router-dom'
import styled from 'styled-components'

const LogoDiv = styled.div`
  align-items: center;
  background-color: var(--accent-color);
  display: flex;
  justify-content: center;
  min-height: 6rem;
`
const LogoText = styled(RouteLink)`
  color: white;
  font-family: 'Quintessential', cursive;
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  user-select: none;
`
const NavbarDiv = styled.div`
  align-items: center;
  border-bottom: 1px solid lightgray;
  display: flex;
  justify-content: space-between;
  min-height: 5rem;
  padding: 0.5rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const NavbarBold = styled.b`
  align-items: center;
  color: var(--font-color);
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`
const Link = styled.a`
  color: var(--font-color);
`
const Wrapper = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const NavbarLink = styled(RouteLink)`
  color: var(--2nd-font-color);
  font-weight: bold;
  margin-left: 0.5rem;
  text-decoration: none;
  @media (max-width: 768px) {
    margin-left: 0%;
    padding: 0.5rem;
  }
`
const CartCountColor = styled.b`
  color: var(--font-color);
`

export default function Banner() {
  let cart = useSelector((state) => state.cart)
  return (
    <>
      <LogoDiv>
        <LogoText to='/'>Clothing Store ♡</LogoText>
      </LogoDiv>
      <NavbarDiv>
        <NavbarBold>made by<Link href='https://github.com/Ravord/'>m_skotarek</Link></NavbarBold>
        <Wrapper>
          <NavbarLink to='/cart'>SHOPPING CART [<CartCountColor>{cart.length}</CartCountColor>]</NavbarLink>
        </Wrapper>
      </NavbarDiv>
    </>
  )
}
