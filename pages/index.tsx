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
      <div className="flex flex-row">
        <div className="root lg:w-1/2  flex flex-col px-12 py-12 lg:px-24 lg:py-36">
            <div className='hidden lg:block text-center lg:pb-12'>
              <Image src='/pink-dot.svg' width={50} height={50}/>
            </div>
            <div className="font-zen-dots text-primary text-2xl lg:text-6xl">ATHENEADAO</div>
            <div className="font-zen-dots text-secondary text-xl lg:text-4xl pt-12">AUTOMATE YOUR</div>
            <div className="font-zen-dots text-secondary text-xl lg:text-4xl">INVESTMENTS</div>
            <button className="w-fit font-zen-dots mt-12 text-secondary text-m lg:text-m border border-primary rounded-xl background-transparent py-4 px-4" type="button">
              OPEN APP
            </button>
        </div>
        <div className="root lg:w-1/2 hidden md:flex lg:flex flex-col lg:px-12 lg:py-12 font-medium">
          <div className='text-right lg:pt-12'>
            <Image src='/grey-dot.svg' width={50} height={50}/>
          </div>
          <div>
          <Image src='/cyan-dot.svg' width={50} height={50}/>
          </div>
          <div className='text-center'>
          <Image src='/piramid.svg' width={400} height={400}/>
          </div>
          <div className='lg:pl-12'>
          <Image src='/pink-dot.svg' width={50} height={50}/>
          </div>
        </div>
      </div>
      <div className='hidden lg:flex flex-col lg:px-12 lg:py-12'>
        <div className='text-right lg:pt-16'>
        <Image src='/blue-dot.svg' width={50} height={50}/>
        </div>
        <div className='text-right lg:pt-12 lg:pr-64'>
        <Image src='/cyan-dot.svg' width={50} height={50}/>
        </div>
        <div className='lg:pl-64'>
        <Image src='/blue-dot.svg' width={50} height={50}/>
        </div>
      </div>
    </>
  )
}

export default Home
