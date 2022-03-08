import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>AthenaDAO</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Navbar/>
      <div className="root bg-background flex flex-col px-12 py-12 lg:px-24 lg:py-36">

        <div className="font-zen-dots text-primary text-2xl lg:text-6xl">ATHENEADAO</div>
        <div className="font-zen-dots text-secondary text-xl lg:text-4xl pt-12">AUTOMATE YOUR</div>
        <div className="font-zen-dots text-secondary text-xl lg:text-4xl">INVESTMENTS</div>
        <button className="w-1/3 lg:w-1/6 font-zen-dots mt-12 text-secondary text-m lg:text-2xl border border-primary rounded-xl background-transparent py-4 px-4" type="button">
          OPEN APP
        </button>


      </div>
    </>
  )
}

export default Home
