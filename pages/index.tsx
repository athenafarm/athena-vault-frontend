import type { NextPage } from 'next'
import styled, { ThemeProvider } from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import AthenaHead from '../components/AthenaHead'
import Navbar from '../components/navbar/Navbar'
import theme from '../styles/theme'
import {
  Container,
  DotsContainer,
  GreyPiramidDot,
  OpenApp,
  PinkPiramidDot,
  PinkUpperDot,
  Piramid,
  Primary,
  Secondary,
  TextContainer,
} from '../components/pages/index/styled/components'

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <AthenaHead />
      <Navbar />
      <Container>
        <TextContainer>
          <PinkUpperDot>
            <Image src="/pink-dot.svg" width={50} height={50} />
          </PinkUpperDot>
          <Primary>ATHENADAO</Primary>
          <Secondary pt="3rem">AUTOMATE YOUR</Secondary>
          <Secondary pt="0rem">INVESTMENTS</Secondary>
          <OpenApp type="button">
            <Link href="/home">
              <a>OPEN APP</a>
            </Link>
          </OpenApp>
        </TextContainer>
        <DotsContainer>
          <GreyPiramidDot>
            <Image src="/grey-dot.svg" width={50} height={50} />
          </GreyPiramidDot>
          <div>
            <Image src="/cyan-dot.svg" width={50} height={50} />
          </div>
          <Piramid>
            <Image src="/piramid.svg" width={400} height={400} />
          </Piramid>
          <PinkPiramidDot>
            <Image src="/pink-dot.svg" width={50} height={50} />
          </PinkPiramidDot>
        </DotsContainer>
      </Container>
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
    </ThemeProvider>
  )
}

export default Home
