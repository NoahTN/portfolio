import React from 'react';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import SkillList from './skill-list';

const ProjectBox = ( {project} ) => {
   const { title, image, skills, body } = project;
   
   return <div css={css`
      display: flex;
      flex-direction: column;
      background-color: #333;
      color: #ddd;
      max-width: 600px;
      margin: 2rem 2rem;

      h2 {
         color: #21a685;
         background: #383838;
         padding: 0.5rem;
         border-bottom: 1px solid #222;
         margin-bottom: 0.5rem;
      }

      .project-body {
         display: flex; 
         align-items: center;
         
         div {
            flex: 1;
            margin: auto 1rem;
         }

         p {
            flex: 2;
            margin: auto 1rem;
            text-align: left;
         }
      }

     
   `}>
      <h2>{title}</h2>
      <div className="project-body">
         {image && <Image
            fluid={image.sharp.fluid}
            style={{margin: 'auto 0rem auto 1rem'}}
            alt={title}
         />}
         <MDXRenderer>{body}</MDXRenderer> 
      </div>
      <SkillList skills={skills}/>
   </div>;
};

export default ProjectBox;