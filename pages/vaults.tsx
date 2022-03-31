import type { NextPage } from 'next'
import AthenaHead from '../components/AthenaHead'
import Header from '../components/Header'
import { Vault } from '../components/Vault'

const Home: NextPage = () => {
  return (
    <div className="root font-inconsolata text-white">
      <AthenaHead />
      <Header selectedTab={'Vaults'} />
      <div className="flex flex-col">
        <h1 className="ml-12 mt-2 text-5xl text-white">Vaults</h1>
        <div className="mx-12 my-8 flex justify-between">
          <Vault></Vault>
          <Vault></Vault>
          <Vault></Vault>
        </div>
      </div>
    </div>
  )
}

export default Home
