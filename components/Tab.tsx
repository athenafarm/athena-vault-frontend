import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'

interface Props {
  content: 'Home' | 'Vaults' | 'Docs'
  isSelected: boolean
}

const Tab: React.FC<Props> = ({ content, isSelected }) => (
  <Link href={`/${content.toLowerCase()}`}>
    <button
      className={classNames('pr-4 lg:pr-24', { 'text-darkgrey': !isSelected })}
    >
      {content}
    </button>
  </Link>
)

export default Tab
