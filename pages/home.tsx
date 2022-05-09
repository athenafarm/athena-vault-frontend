import type { NextPage } from 'next'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import AthenaHead from '../components/AthenaHead/AthenaHead'
import { Card } from '../components/Card/Card'
import { Deposits, Deposit } from '../components/Deposits/Deposits'
import Header from '../components/Header/Header'
import { PageContainer } from '../components/PageContainer/PageContainer'
import Title from '../components/Title/Title'
import theme from '../styles/theme'

// TODO: Get deposits from API
const deposits: Deposit[] = [
  {
    vault: 'Anchor-Mirror R1',
    balance: '1.500,32',
    earned: '500,12',
    APY: '22%',
    APD: '1%',
  },
  {
    vault: 'Anchor-Mirror R2',
    balance: '300,12',
    earned: '10,12',
    APY: '18%',
    APD: '1,5%',
  },
]

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <AthenaHead />
      <Header selectedTab={'Home'} />
      <PageContainer>
        <Title>My Deposits</Title>
        <Card>
          <Deposits deposits={deposits} />
        </Card>
      </PageContainer>
    </ThemeProvider>
  )
}

export default Home
