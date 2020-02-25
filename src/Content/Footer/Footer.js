import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
    return (
        <div>
            <Navbar bg="primary" expand="lg">
                <Nav className="mr-auto flex-column Mainfooter">
                    <Navbar.Brand>Let's Work Together</Navbar.Brand>
                    <p>Feel free to reach out if you're looking for a developer, have a question, or just want to connect.</p>
                </Nav>
                <Nav className="mr-auto flex-column SocialLinks">
                    <Nav.Link href="#home">rocio.pantalone@gmail.com</Nav.Link>
                    <Nav.Link href="#link">On Linkedin</Nav.Link>
                    <Nav.Link href="#link">On Github</Nav.Link>
                    <Nav.Link href="#link">On Instagram</Nav.Link>
                </Nav>
            </Navbar>
            <Navbar bg="primary" expand="lg">
                <Nav className="mr-auto flex-column Copyright">
                    <p>&copy; 2020 Rocio Pantalone. All rights reserved.</p>
                </Nav>
            </Navbar>
        </div> 
    );
}

export default Footer;