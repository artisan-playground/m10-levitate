import React from 'react'
// import Logo from '../../assets/logo.png'
import { Bars, Nav, NavLink, NavLogo, NavMenu } from '../Navbar/NavbarElements'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLogo to="/">
                    <a>LOGO</a>
                </NavLogo>
                <Bars />
            </Nav>
        </>
    )
}

export default Navbar
