import type { NextPage } from 'next'
import { ThemeProvider } from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import AthenaHead from '../components/AthenaHead/AthenaHead'
import Navbar from '../components/Navbar/Navbar'
import theme from '../styles/theme'
import {
  Container,
  DotsLower,
  DotsUpper,
  GreyPiramidDot,
  LowerDot,
  OpenApp,
  PinkPiramidDot,
  PinkUpperDot,
  Piramid,
  Primary,
  Secondary,
  TextContainer,
} from '../components/IndexLanding/components'

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <AthenaHead />
      <Navbar id="navbar" />
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
        <DotsUpper w="50%" p="3rem">
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
        </DotsUpper>
      </Container>
      <DotsLower w="auto" p="3rem">
        <LowerDot mt="4rem" pl="0rem" pr="0rem" ta="right">
          <Image src="/blue-dot.svg" width={50} height={50} />
        </LowerDot>
        <LowerDot mt="4rem" pl="0rem" pr="16rem" ta="right">
          <Image src="/cyan-dot.svg" width={50} height={50} />
        </LowerDot>
        <LowerDot mt="4rem" pl="16rem" pr="0rem" ta="start">
          <Image src="/blue-dot.svg" width={50} height={50} />
        </LowerDot>
      </DotsLower>
    </ThemeProvider>
  )
}

export default Home
