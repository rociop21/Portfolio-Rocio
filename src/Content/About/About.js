import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'

const About = () => {
    return (
        <div>
            <Container fluid className='AboutIntro'>
                <Row>
                    <Col>
                        <h1>Hi, I'm Rocio!</h1>
                        <h2>Front-end web developer from Rosario, Argentina.</h2>
                    </Col>
                </Row>
            </Container>
            <Container className='ContainerBox'>
                <Row>
                    <Col className='AboutText'>
                        <p>I'm a chemical engeneering ex-student who decided to take a leap into the development world to find my real 
                            passion. I like coding minimalistic website that are intuitive and user friendly.</p>
                    </Col>
                </Row>
                <Row>
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
                            <li>Redux</li>
                            <li>Axios</li>
                            <li>React-Router</li>
                        </ul>
                    </Col> 
                </Row>
            </Container>
        </div>
    );
}

export default About;