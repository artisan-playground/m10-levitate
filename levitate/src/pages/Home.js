import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Banner from '../assets/Group 98.png'
import Store from '../components/Store'
import Recommended from '../components/Recommended'
import Application from '../components/Application'
import ScrollspyNav from 'react-scrollspy-nav'
import dot from '../assets/Group 6.png'


const Title = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  img {
    width: 100%;
    position: absolute;
  }
  .dots{
    position: absolute;
    top: 97%;
    left: 49.4%;
    width: 33px;
    z-index: 99;
  }
`

const GhostNavbar = styled.div`
  height: 64px;
  padding: 0.5rem;
`

const Wrapper = styled.div`
  padding: 3% 10%;
`

const Button = styled.a`
    padding: 50px 50px 0 50px;
    border-radius: 100px 100px 0 0;
    position: relative;
    outline: none;
    background-color: #fff;
`

const Home = () => {
  return (
    <>
      <Navbar />
      <ScrollspyNav
        scrollTargetIds={['section_1']}
        offset={250}
        activeNavClass="is-active"
        scrollDuration="500"
        headerBackground="true"
      >
        <Title>
          <GhostNavbar />
          <img src={Banner} />
          <img className='dots' src={dot} />
          <Button href="#section_1" />
        </Title>
      </ScrollspyNav>
      <Wrapper>
        <Store />
        <div id="section_1" >
          <Recommended />
          <Application />
        </div>
      </Wrapper>
    </>
  )
}

export default Home
