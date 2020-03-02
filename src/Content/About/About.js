import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Rocio from './../../Assets/PersonalImg/Rocio.png'

const About = () => {
    return (
        <div id='about'>
            <Container fluid className='AboutIntro'>
                <Row>
                    <Col md={{ span: 6, offset: 1 }}> 
                        <h1>Hi, I'm Rocio!</h1>
                        <h2>Front-end web developer from Rosario, Argentina.</h2>
                    </Col>
                    <Col md={{ span: 2, offset: 1 }} className='ImgCol'>
                        <img className='RocioImg' src={Rocio} alt='Rocio Pantalone' />
                    </Col>
                </Row>
            </Container>
            <Container className='ContainerBox'>
                <Row>
                    <Col className='AboutText'>
                        <p>I am a 23 years-old self-taught programmer and truth be told, I didn’t take the usual route into a tech carrer. 
                            I am from a small town where IT carrers are not so usual, so when I was young I got interested in chemistry.<br /><br />
                            Later on I studied chemical engineering for 3 years, but every year that passed by I was realizing more and more that it wasn't what I really wanted. 
                            A year ago, I decided to take a leap into the development world to learn my real passion so I began doing some web-development tutorials, 
                            reading documentation and programming books.<br /><br /> Eventually, I was making my way in the programming community and participating more, 
                            getting advice and being able to better shape my learning path. I like coding minimalistic website that are intuitive and user friendly.</p>

                    </Col>
                </Row>
                <Row className='AboutTechRow'>
                    <Col className='AboutTechCol'>
                        <h3>Languages</h3>
                        <ul className='TechTags'>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React.js</li>
                        </ul>
                    </Col>
                    <Col className='AboutTechCol MiddleCol'>
                        <h3>Dev Tools</h3>
                        <ul className='TechTags'>
                            <li>Bootstrap</li>
                            <li>Github</li>
                        </ul>
                    </Col>
                    <Col className='AboutTechCol'>
                        <h3>Libraries</h3>
                        <ul className='TechTags'>
                            <li>Axios</li>
                            <li>React-Router</li>
                            <li>Redux</li>
                        </ul>
                    </Col> 
                </Row>
            </Container>
        </div>
    );
}

export default About;