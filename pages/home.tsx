import type { NextPage } from 'next'
import React, { useState } from 'react'
import AthenaHead from '../components/AthenaHead'
import Header from '../components/Header';

const Home: NextPage = () => {
  const [selectedTab, setSelectedTab] = useState('Home')
  return (
    <>
      <AthenaHead/>
      <Header selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
    </>
  )
}

export default Home
