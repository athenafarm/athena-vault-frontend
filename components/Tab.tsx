import styled from 'styled-components'
import Link from 'next/link'
import React from 'react'

interface Props {
  content: 'Home' | 'Vaults' | 'Docs'
  isSelected: boolean
}

interface ButtonProps {
  readonly isSelected: boolean
}
const Button = styled.button<ButtonProps>`
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
const Tab: React.FC<Props> = ({ content, isSelected }) => (
  <Link href={`/${content.toLowerCase()}`}>
    <Button isSelected={isSelected}>{content}</Button>
  </Link>
)

export default Tab
