import React from 'react';

import Container from 'react-bootstrap/Container';

import ProjectCard from './ProjectCard';
import ProjectsData from './ProjectsData';

const Projects = () => {
    
    const projectsElements = [];

    for (let key in ProjectsData) {
        projectsElements.push({
            key: key,
            name: ProjectsData[key].Name,
            img: ProjectsData[key].Img,
            description: ProjectsData[key].Description,
            tecnologies: ProjectsData[key].Tecnologies,
            demoLink: ProjectsData[key].DemoLink,
            sourceLink: ProjectsData[key].SourceLink
        });
    };

    let projectList = (
        projectsElements.map(el=>
            <ProjectCard
                key={el.key}
                name={el.name}
                img={el.img}
                description={el.description}
                tecnologies={el.tecnologies}
                demoLink={el.demoLink}
                sourceLink={el.sourceLink} />
        )
    )

    return (
        <Container id='projects'>
            <h3 className='ProjectsTitle'>My Projects</h3>
            {projectList}
        </Container>
    );
}

export default Projects;
