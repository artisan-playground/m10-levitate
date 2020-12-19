import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Banner from '../assets/600.jpg'
import Store from '../components/Store'
import Recommended from '../components/Recommended'

const Title = styled.div`
  img {
    width: 100%;
  }
`

const GhostNavbar = styled.div`
  height: 64px;
  padding: 0.5rem;
`

const Wrapper = styled.div`
  padding: 2% 10%;
  /* z-index: 1000; */
  /* img {
    position: absolute;
    z-index: -1;
  } */
`

const Home = () => {
  return (
    <>
      <Navbar />
      <Title>
        <GhostNavbar />
        <img src={Banner} />
      </Title>
      <Wrapper>
        <Store />
      </Wrapper>
    </>
  )
}

export default Home
