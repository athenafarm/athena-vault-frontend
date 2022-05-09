import type { NextPage } from 'next'
import { ThemeProvider } from 'styled-components'
import AthenaHead from '../components/AthenaHead/AthenaHead'
import { Card } from '../components/Card/Card'
import { Deposits } from '../components/Deposits/Deposits'
import Header from '../components/Header/Header'
import { PageContainer } from '../components/PageContainer/PageContainer'
import Title from '../components/Title/Title'
import { Vault, Vaults } from '../components/Vaults/Vaults'
import theme from '../styles/theme'

const vaults: Vault[] = [
  {
    APY: '28,02%',
    balance: '1.502,31',
    deposit_fee: '0%',
    performance_fee: '15%-20%',
    risk: 'Low',
    uses: 'Anchor & Mirror',
    vault: 'Anchor-Mirror R1',
    withdrawal_fee: '0%',
  },
  {
    APY: '28,02%',
    balance: '1.502,31',
    deposit_fee: '0%',
    performance_fee: '15%-20%',
    risk: 'Low',
    uses: 'Anchor & Mirror',
    vault: 'Anchor-Mirror R1',
    withdrawal_fee: '0%',
  },
  {
    APY: '28,02%',
    balance: '1.502,31',
    deposit_fee: '0%',
    performance_fee: '15%-20%',
    risk: 'Low',
    uses: 'Anchor & Mirror',
    vault: 'Anchor-Mirror R1',
    withdrawal_fee: '0%',
  },
]

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <AthenaHead />
      <Header selectedTab={'Vaults'} />
      <PageContainer>
        <Title>Vaults</Title>
        <Vaults vaults={vaults} />
      </PageContainer>
    </ThemeProvider>
  )

  // return (
  //   <div className="root font-inconsolata text-white">
  //     <AthenaHead />
  //     <Header selectedTab={'Vaults'} />
  //     <div className="flex flex-col">
  //       <h1 className="ml-12 mt-2 text-5xl text-white">Vaults</h1>
  //       <div className="mx-12 my-8 flex justify-between">
  //         <Vault
  //           vault={''}
  //           uses={''}
  //           risk={''}
  //           APY={''}
  //           balance={''}
  //           deposit_fee={''}
  //           withdrawal_fee={''}
  //           performance_fee={''}
  //         ></Vault>
  //         <Vault
  //           vault={''}
  //           uses={''}
  //           risk={''}
  //           APY={''}
  //           balance={''}
  //           deposit_fee={''}
  //           withdrawal_fee={''}
  //           performance_fee={''}
  //         ></Vault>
  //         <Vault
  //           vault={''}
  //           uses={''}
  //           risk={''}
  //           APY={''}
  //           balance={''}
  //           deposit_fee={''}
  //           withdrawal_fee={''}
  //           performance_fee={''}
  //         ></Vault>
  //       </div>
  //     </div>
  //   </div>
  // )
}

export default Home
