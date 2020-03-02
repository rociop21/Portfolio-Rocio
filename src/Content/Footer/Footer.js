import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import github from './../../Assets/SocialImages/github.svg'
import instagram from './../../Assets/SocialImages/instagram.svg'
import linkedin from './../../Assets/SocialImages/linkedin.svg'
import mail from './../../Assets/SocialImages/mail.svg'

const Footer = () => {
    return (
        <div className='AllFooter'>
            <Navbar expand="lg" className='AllFooter SocialFooter'>
                <Nav className="flex-column Mainfooter AllFooter SocialFooter">
                    <h3>Let's Work Together</h3>
                    <p>Feel free to reach out if you're looking for a developer, have a question, or just want to connect.</p>
                </Nav>
            </Navbar>
            <Navbar className='AllFooter' expand="lg">
                <Nav className="flex-row SocialFooter">
                        <Nav.Link href="mailto:rocio.pantalone@gmail.com"><img src={mail} alt='email representation' /></Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/roc%C3%ADo-yasm%C3%ADn-pantalone-39ba45180/" target="_blank"><img src={linkedin} alt='Linkedin logo' /></Nav.Link>
                        <Nav.Link href="https://github.com/rociop21" target="_blank"><img src={github} alt='GitHub logo' /></Nav.Link>
                        <Nav.Link href="https://www.instagram.com/rociopantalone/" target="_blank"><img src={instagram} alt='Instagram logo' /></Nav.Link>
                </Nav>
            </Navbar>
            <Navbar className='AllFooter' expand="lg">
                <Nav className="flex-column Copyright">
                    <p>&copy; 2020 Rocio Pantalone. All rights reserved.</p>
                </Nav>
            </Navbar>
        </div> 
    );
}

export default Footer;