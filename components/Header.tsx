import Tab from '../components/Tab'
import Image from 'next/image'
import React from 'react'

interface Props {
  selectedTab: string
  setSelectedTab: Function
}

const Header: React.FC<Props> = ({ selectedTab, setSelectedTab }) => (
  <>
    <nav className="root flex flex-row items-center border-gray-200 bg-header px-2 py-5 md:px-12 lg:px-12">
      <Image height="50px" width="50px" src="/logo.svg" />
      <div className="md:text-m px-8 align-middle text-xs text-white lg:px-24 lg:text-xl">
        <Tab
          content="Home"
          setSelectedTab={setSelectedTab}
          isSelected={selectedTab === 'Home'}
        />
        <Tab
          content="Vaults"
          setSelectedTab={setSelectedTab}
          isSelected={selectedTab === 'Vaults'}
        />
        <Tab
          content="Docs"
          setSelectedTab={setSelectedTab}
          isSelected={selectedTab === 'Docs'}
        />
      </div>
      <button
        className="lg:text-m background-transparent ml-auto w-fit rounded-xl border border-primary py-4 px-4 text-xs text-primary"
        type="button"
      >
        Connect
      </button>
    </nav>
    <div className="root flex flex-row items-center border-gray-200 bg-banner px-2 py-2 font-mono text-sm text-white md:mb-5 md:px-12 lg:mb-5 lg:px-12">
      this is a beta product, use at your own risk
    </div>
  </>
)

export default Header
