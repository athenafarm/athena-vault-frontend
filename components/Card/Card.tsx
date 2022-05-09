import styled from 'styled-components'

export const Card = styled.div`
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};
  padding: 2rem 3rem;
`
