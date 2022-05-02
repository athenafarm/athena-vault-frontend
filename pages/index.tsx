import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import AthenaHead from '../components/AthenaHead'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <>
      <AthenaHead />
      <Navbar />
      <div className="flex flex-row">
        <div className="root flex  flex-col px-12 py-12 lg:w-1/2 lg:px-24 lg:py-36">
          <div className="hidden text-center lg:block lg:pb-12">
            <Image src="/pink-dot.svg" width={50} height={50} />
          </div>
          <div className="font-zen-dots text-2xl text-primary lg:text-6xl">
            ATHENADAO
          </div>
          <div className="pt-12 font-zen-dots text-xl text-secondary lg:text-4xl">
            AUTOMATE YOUR
          </div>
          <div className="font-zen-dots text-xl text-secondary lg:text-4xl">
            INVESTMENTS
          </div>
          <button
            className="text-m lg:text-m background-transparent mt-12 w-fit rounded-xl border border-primary py-4 px-4 font-zen-dots text-secondary"
            type="button"
          >
            <Link href="/home">
              <a>OPEN APP</a>
            </Link>
          </button>
        </div>
        <div className="root hidden flex-col font-medium md:flex lg:flex lg:w-1/2 lg:px-12 lg:py-12">
          <div className="text-right lg:pt-12">
            <Image src="/grey-dot.svg" width={50} height={50} />
          </div>
          <div>
            <Image src="/cyan-dot.svg" width={50} height={50} />
          </div>
          <div className="text-center">
            <Image src="/piramid.svg" width={400} height={400} />
          </div>
          <div className="lg:pl-12">
            <Image src="/pink-dot.svg" width={50} height={50} />
          </div>
        </div>
      </div>
      <div className="hidden flex-col lg:flex lg:px-12 lg:py-12">
        <div className="text-right lg:pt-16">
          <Image src="/blue-dot.svg" width={50} height={50} />
        </div>
        <div className="text-right lg:pt-12 lg:pr-64">
          <Image src="/cyan-dot.svg" width={50} height={50} />
        </div>
        <div className="lg:pl-64">
          <Image src="/blue-dot.svg" width={50} height={50} />
        </div>
      </div>
    </>
  )
}

export default Home
