import Link from 'next/link'
import React from 'react'
import { Button } from './styled/components'

interface Props {
  content: 'Home' | 'Vaults' | 'Docs'
  isSelected: boolean
}

const Tab: React.FC<Props> = ({ content, isSelected }) => (
  <Link href={`/${content.toLowerCase()}`}>
    <Button isSelected={isSelected}>{content}</Button>
  </Link>
)

export default Tab
