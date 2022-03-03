import styled from 'styled-components'

export const ButtonPrimary = styled.button`
  background-color: var(--accent-color);
  border: none;
  border-radius: 0.5rem;
  color: white;
  cursor: pointer;
  font-family: inherit;
  padding: 0.5rem;
  :active, :hover {
    background-color: var(--font-color);
  }
`
