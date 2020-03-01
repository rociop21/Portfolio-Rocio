import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ProjectCard = (props) => {
    return (
        <Card className='ProjectCard'>
            <Card.Img className='CardImg' src={props.img} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <p>{props.description}</p>
                <ul className='DisplayTags'>
                    {props.tecnologies.map( el =>
                    <li key={el} >{el}</li>
                    )}
                </ul>
                <div className='ProjectsButtonGroup'>
                    <Button className='ProjectsButton' variant="info" href={props.demoLink}>Live demo</Button>{' '}
                    <Button className='ProjectsButton' variant="info" href={props.sourceLink}>View source</Button>
                </div>
                
            </Card.Body>
        </Card>
    );
}

export default ProjectCard;