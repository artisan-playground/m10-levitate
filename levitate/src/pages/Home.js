import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Banner from '../assets/600.jpg'
import Store from '../components/Store'

const Title = styled.div`
  padding-top: 5vh;
  img {
    width: 100%;
  }
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
                <h1>
                    APARK
                </h1>
                <img src={Banner} />
            </Title>
            <Wrapper>
                <Store />
            </Wrapper>
        </>
    )
}

export default Home
