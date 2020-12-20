import React from 'react'
// import Logo from '../../assets/logo.png'
import { Bars, Nav, NavLink, NavLogo, NavMenu } from '../Navbar/NavbarElements'
import Logo from '../../assets/LogoAP.png'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLogo to="/">
                    <img src={Logo} />
                </NavLogo>
                <Bars />
            </Nav>
        </>
    )
}

export default Navbar
