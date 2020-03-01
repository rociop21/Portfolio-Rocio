import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Logo from './../Assets/Logo/RP logo.png'

const NavBar = () => {
    return (
        <Navbar className='NavBar' expand="lg" sticky="top" variant="dark">
            <Navbar.Brand href="#about"><img src={Logo} height="50px" alt='Rocio Pantalone logo' /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;