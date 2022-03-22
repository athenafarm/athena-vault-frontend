import classNames from 'classnames'
import React from 'react'

interface Props {
  content: string
  isSelected: boolean
  setSelectedTab: Function
}

const Tab: React.FC<Props> = ({ content, isSelected, setSelectedTab }) => (
  <button
    onClick={() => setSelectedTab(content)}
    className={classNames('pr-4 lg:pr-24', { 'text-darkgrey': !isSelected })}
  >
    {content}
  </button>
)

export default Tab
