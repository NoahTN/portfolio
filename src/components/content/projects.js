import React from 'react';
import ProjectBox from './formatting/project-box';
import useProjects from '../../hooks/use-projects';
import { css } from '@emotion/core';

const Projects = () => {
   const projects = useProjects();
   
   return <div id="projects" class="main-section" css={css`
      text-align: center;
      
      #project-list {
         display: flex;
         flex-wrap: wrap;
         justify-content: center;
      }
   `}>
      <h1>My Projects</h1>
      <div id="project-list">
         {projects.map(project => {
            return <ProjectBox key={project.title} project={project} />
         })}
      </div>
   </div>
};

export default Projects;