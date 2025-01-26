import React from 'react'
import projects from '../../../assets/projects';
import ProjectCard from './ProjectCard';

const ProjectList = () => {

    return (
        <div className='row'>
            {projects.map((project) =>(
               <ProjectCard key={project.id}
                            name={project.name} 
                            thumbnail={project.images[0]}
                            slug={project.slug}
                            tools={project.tools} />
            ))};

        </div>
    )
}

export default ProjectList