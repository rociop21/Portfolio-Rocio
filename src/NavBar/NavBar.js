import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Logo from './../Assets/Logo/RP logo.png'

const NavBar = () => {
    return (
        <Navbar className='NavBar' expand="lg" sticky="top">
            <Navbar.Brand href="#home"><img src={Logo} height="50px"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                    <Nav.Link href="#home">About</Nav.Link>
                    <Nav.Link href="#link">Projects</Nav.Link>
                    <Nav.Link href="#link">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;