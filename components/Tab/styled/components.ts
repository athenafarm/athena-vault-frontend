import styled from 'styled-components'

interface ButtonProps {
  readonly isSelected: boolean
}
export const Button = styled.button<ButtonProps>`
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
  border-color: transparent;
  color: ${(props) =>
    props.isSelected ? props.theme.colors.white : props.theme.colors.darkgrey};
  background-color: transparent;
  padding-right: 6rem;
  @media (max-width: 1024px) {
    padding-right: 1rem;
  }
`
