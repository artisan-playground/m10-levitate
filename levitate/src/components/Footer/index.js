import React from 'react'
import { MainFooter } from './FooterElements'
import Logo from '../../assets/LogoAP.png'

export const Footer = () => {
  return (
    <MainFooter>
      <img src={Logo} />
      <p>© 2020 Artisan Digital Asia</p>
    </MainFooter>
  )
}

export default Footer
