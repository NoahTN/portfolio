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
      width: 600px;
      height: 300px;
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
         margin-bottom: rem;
         
         div {
            flex: 1;
            margin: auto 0.5rem;
         }

         p {
            flex: 2;
            height: 95px;
            margin: auto 1rem;
            text-align: left;
         }
      }

      > div {
         height: 125px;
      }
   `}>
      <h2>{title}</h2>
      <div class="project-body">
         <Image
               fluid={image ? image.sharp.fluid : null}
               css={css`
                  * {
                     margin-top: 0;
                     
                  }
               `}
               alt={title}
         />
         <MDXRenderer>{body}</MDXRenderer> 
      </div>
      <SkillList skills={skills}/>
   </div>;
};

export default ProjectBox;