import React from 'react';
import SkillList from './formatting/skill-list';
import{ css } from '@emotion/core';

const Skills = () => {
   const frontendList = ['HTML', 'CSS', 'JavaScript', 'React', 'Gatsby', 'Dart']
   const backendList = ['C', 'C++', 'Java', 'Python']
   const toolList = ['AWS', 'Spring Boot', 'Unity', 'Flutter']

   return <div id="skills" class="main-section" css={css`
      text-align: center;
      flex: 1;
     
      .column {
         display: inline-block;
         margin: 1rem 1rem;
         width: 220px;
         height: 160px;
         background: #383838;

         h2 {
            background: #333;
            height: 50px;
            padding: 0.25rem;
            border-bottom: 1px solid #222;
         }

         > div {
            height: 110px;
         }
      }
      
   `}>
      <h1>My Skills</h1>
      <div class="column">
         <h2>Frontend</h2>
         <SkillList skills={frontendList}/>
      </div>
      <div class="column">
         <h2>Backend</h2>
         <SkillList skills={backendList}/>
      </div>
      <div class="column">
         <h2>Tools</h2>
         <SkillList skills={toolList}/>
      </div>
   </div>
};

export default Skills;