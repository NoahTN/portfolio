import React from 'react';
import ProjectBox from './formatting/project-box';
import useProjects from '../../hooks/use-projects';
import { css } from '@emotion/core';

const Projects = () => {
   const projects = useProjects();
   
   return <div id="projects" css={css`
      margin: 1rem auto;
      text-align: center;

      h1 {
         background: #21a685;
         width: calc(1200px + 4rem);
         margin: auto;
      }
   
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