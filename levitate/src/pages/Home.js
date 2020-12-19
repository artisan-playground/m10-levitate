import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'

const Title = styled.div`
  height: 80vh;
  /* padding-top: 5vh; */
  /* img {
    width: 100%;
  } */
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
            <Title />
            <Wrapper />
        </>
    )
}

export default Home
