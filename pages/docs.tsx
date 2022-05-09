import type { NextPage } from 'next'
import { ThemeProvider } from 'styled-components'
import AthenaHead from '../components/AthenaHead/AthenaHead'
import Header from '../components/Header/Header'
import { PageContainer } from '../components/PageContainer/PageContainer'
import Title from '../components/Title/Title'
import theme from '../styles/theme'

const Home: NextPage = () => {
  return (
    // <div className="root font-inconsolata text-white">
    //   <AthenaHead />
    //   <Header selectedTab={'Docs'} />
    //   <div className="flex flex-col">
    //     <h1 className="ml-12 mt-2 text-5xl text-white">Docs</h1>
    //     <div className="mx-12 mt-4 flex">Work in Progress...</div>
    //   </div>
    // </div>

    <ThemeProvider theme={theme}>
      <AthenaHead />
      <Header selectedTab={'Docs'} />
      <PageContainer>
        <Title>Docs</Title>
        <div style={{ color: 'white' }}>Work In Progress...</div>
      </PageContainer>
    </ThemeProvider>
  )
}

export default Home
