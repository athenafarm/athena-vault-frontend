import Tab from '../Tab'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import {
  Navbar,
  TabContainer,
  WarnToast,
  ConnectButton,
} from './styled/components'
import { ThemeProvider } from 'styled-components'
import theme from '../../styles/theme'

interface Props {
  selectedTab: 'Home' | 'Vaults' | 'Docs'
}

const Header: React.FC<Props> = ({ selectedTab }) => (
  <ThemeProvider theme={theme}>
    <Navbar>
      <Link href="/">
        <a>
          <Image height="50px" width="50px" src="/logo.svg" />
        </a>
      </Link>
      <TabContainer>
        <Tab content="Home" isSelected={selectedTab === 'Home'} />
        <Tab content="Vaults" isSelected={selectedTab === 'Vaults'} />
        <Tab content="Docs" isSelected={selectedTab === 'Docs'} />
      </TabContainer>
      <ConnectButton type="button">Connect</ConnectButton>
    </Navbar>
    <WarnToast>this is a beta product, use at your own risk</WarnToast>
  </ThemeProvider>
)

export default Header
