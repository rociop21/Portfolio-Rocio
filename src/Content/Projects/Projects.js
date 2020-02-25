import React from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

import ProjectCard from './ProjectCard';
import ProjectsData from './ProjectsData';

const Projects = () => {
    
    const projectsElements = [];

    for (let key in ProjectsData) {
        projectsElements.push({
            id: key,
            name: ProjectsData[key].Name,
            description: ProjectsData[key].Description,
            tecnologies: ProjectsData[key].Tecnologies,
            demoLink: ProjectsData[key].DemoLink,
            sourceLink: ProjectsData[key].SourceLink
        });
    };

    let projectList = (
        projectsElements.map(el=>
            <ProjectCard
                name={el.name}
                description={el.description}
                tecnologies={el.tecnologies}
                demoLink={el.demoLink}
                sourceLink={el.sourceLink} />
        )
    )

    return (
        <Container>
            {projectList}
        </Container>
    );
}

export default Projects;
