import styled from 'styled-components'

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 2rem;
`
const Text = styled.h1`
  box-shadow: var(--main-shadow);
  color: var(--font-color);
  font-size: 2.5rem;
  padding: 0.75rem;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`

export default function HugeText({ firstLine, secondLine }) {
  return (
    <Wrapper>
      {firstLine ? <Text>{firstLine}</Text> : null}
      {secondLine ? <Text>{secondLine}</Text> : null}
    </Wrapper>
  )
}
