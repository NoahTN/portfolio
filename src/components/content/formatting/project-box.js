import React from 'react';
import { css } from '@emotion/core';

const ProjectBox = ( {project} ) => {
   const { title, image, skills, excerpt:desc } = project;

   return <div css={css`
      background-color: #aaa;
      color: #eee;
      width: 800px;
      h2 {
         color: #eee;
      }
   `}>
   <h2>{title}</h2>
   {/* for loop <SkillBox></SkillBox> */}
   <p>{desc}</p>
   {/* ReadMore - an Object */}
   </div>;
};

export default ProjectBox;