import React from 'react';
import SkillList from './formatting/skill-list';
import{ css } from '@emotion/core';

const Skills = () => {
   const webList = ['HTML', 'CSS', 'JavaScript', 'React', 'Gatsby', 'SQL']
   const generalList = ['C', 'C++', 'Java', 'Python']
   const toolList = ['AWS', 'Spring Boot', 'Unity', 'Flutter']

   return <div id="skills" css={css`
      text-align: center;
      margin-right: 4rem;

      h1 {
         background: #f45b69;
         max-width: calc(780px + 2rem);
         margin: auto;
      }

      #skills-body {
         display: flex;
         flex-wrap: wrap;
         align-items: flex-start;
         justify-content: center;

         .column {
            display: flex;
            flex-wrap: wrap;
            margin: 1rem 0.5rem;
            max-width: 260px;
            background: #333;
            
            h2 {
               background: #383838;
               height: 50px;
               padding: 0.25rem 1rem;
            }

            #web-head {
               border-bottom: 1px solid #21a685;
            }

            #gen-head {
               border-bottom: 1px solid #f45b69;
            }

            #tool-head {
               border-bottom: 1px solid #4062bb;
            }

            > div :last-child{
               display: flex;
               align-content: flex-start;
               justify-content: flex-start;
               margin: 0.5rem 0 0.5rem 0.75rem; 
              
            }
         }
      }
   `}>
      <h1>My Skills</h1>
      <div id="skills-body">
         <div className="column">
            <h2 id="web-head">Web</h2>
            <div className="break"></div>
            <SkillList skills={webList} color=""/>
         </div>
         <div className="column">
            <h2 id="gen-head">General</h2>
            <div className="break"></div>
            <SkillList skills={generalList} color="#f45b69"/>
         </div>
         <div className="column">
            <h2 id="tool-head">Tools</h2>
            <div className="break"></div>
            <SkillList skills={toolList} color="#4062bb"/>
         </div>
      </div>
   </div>
};

export default Skills;