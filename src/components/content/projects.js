import React from 'react';
import ContentBox from './formatting/content-box';
import ProjectBox from './formatting/project-box';
import useProjects from '../../hooks/use-projects';

const Projects = () => {
   const projects = useProjects();
   return <ContentBox title="Projects" id="projects">
      {projects.map(project => (
         <ProjectBox key={project.index} project={project} />
      ))}
   </ContentBox>
};

export default Projects;