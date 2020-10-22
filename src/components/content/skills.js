import React from 'react';
import SkillList from './formatting/skill-list';

const Skills = () => {
   const skills = ['HTML', 'CSS', 'JavaScript', 'C++', 'C', 'Java', 'Python'];

   return <div id="skills" class="main-section">
      <h1>My Skills</h1>
      <h2>Frontend</h2>
      <h2>Backend</h2>
      <h2>Tools</h2>
      <SkillList skills={skills}/>
   </div>
};

export default Skills;