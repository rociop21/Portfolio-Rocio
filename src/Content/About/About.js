import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () => {
    return (
        <div>
            <Container fluid className='AboutIntro'>
                <Row>
                    <Col>
                        <h1>Hi, I'm Rocio!</h1>
                        <h2>Front-end web developer from Rosario, Argentina.</h2>
                    </Col>
                    <Col>
                        <img src='https://dummyimage.com/200x400' />
                    </Col>
                </Row>
            </Container>
            <Container className='ContainerBox'>
                <Row>
                    <Col className='AboutText'>
                        <p>I am a 23 years-old self-taught programmer and truth be told, I didn’t take the usual route into a tech carrer. 
                            I am from a small town where IT carrers are not so usual, so when I was yunger I got interested in chemistry; 
                            later on I studied chemical engeneering for 3 years, but every year that passed I was realizing more and more that it wasn't what I really wanted. 
                            A few month ago, I decided to take a leap into the development world to find my real passion so I began doing some web-development tutorials, 
                            reading documentation and programming books.</p>
                        <p>I like coding minimalistic website that are intuitive and user friendly.</p>

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