import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ProjectCard = (props) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image" />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                    <p>{props.description}</p>
                    <ul className='DisplayTags'>
                        {props.tecnologies.map( el =>
                        <li key={el} >{el}</li>
                        )}
                    </ul>
                <Button variant="info" href={props.demoLink}>Live demo</Button>{' '}
                <Button variant="info" href={props.sourceLink}>View source</Button>
            </Card.Body>
        </Card>
    );
}

export default ProjectCard;