import React from 'react';
import { css } from '@emotion/core';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import SkillList from './skill-list';

const ProjectBox = ( {project} ) => {
   const { title, image, skills, body } = project;
   
   return <div css={css`
      background-color: #aaa;
      color: #eee;
      width: 600px;
      height: 250px;
      margin: 2rem auto;
      h2 {
         color: #eee;
      }
   `}>
   <h2>{title}</h2>
   {/* for loop <SkillBox></SkillBox> */}
   <MDXRenderer>{body}</MDXRenderer>
   <SkillList skills={skills}/>
   {/* ReadMore - an Object */}
   </div>;
};

export default ProjectBox;