import React from 'react';
import { css } from '@emotion/core';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import SkillList from './skill-list';

const ProjectBox = ( {project} ) => {
   const { title, image, skills, body } = project;
   
   return <div css={css`
      flex-direction: column;
      background-color: #333;
      color: #ddd;
      width: 600px;
      height: 275px;
      margin: 2rem 2rem;

      h2 {
         flex: 1;
         color: #21a685;
         background: #383838;
         padding: 0.5rem;
         border-bottom: 1px solid #222;
      }

      p {
         height: 95px;
         margin: 1rem 1rem;
         text-align: left;
      }

   `}>
      <h2>{title}</h2>
      <MDXRenderer>{body}</MDXRenderer>
      <SkillList skills={skills}/>
   </div>;
};

export default ProjectBox;