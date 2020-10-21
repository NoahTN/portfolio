import React from 'react';
import { css } from '@emotion/core';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import SkillList from './skill-list';

const ProjectBox = ( {project} ) => {
   const { title, image, skills, body } = project;
   
   return <div css={css`
      background-color: #333;
      color: #ddd;
      width: 600px;
      height: 250px;
      margin: 2rem auto;
      h2 {
         color: #21a685;
      }

      p {
         margin: 1rem 1rem;
         text-align: left;
      }
   `}>
   <h2>{title}</h2>
   <MDXRenderer>{body}</MDXRenderer>
   <SkillList skills={skills}/>
   {/* ReadMore - an Object */}
   </div>;
};

export default ProjectBox;