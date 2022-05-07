import type { NextPage } from 'next'
import AthenaHead from '../components/AthenaHead/AthenaHead'
import Header from '../components/Header/Header'

const Home: NextPage = () => {
  return (
    <div className="root font-inconsolata text-white">
      <AthenaHead />
      <Header selectedTab={'Docs'} />
      <div className="flex flex-col">
        <h1 className="ml-12 mt-2 text-5xl text-white">Docs</h1>
        <div className="mx-12 mt-4 flex">Work in Progress...</div>
      </div>
    </div>
  )
}

export default Home
