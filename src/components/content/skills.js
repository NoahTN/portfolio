import React from 'react';
import ContentBox from './formatting/content-box';
import SkillList from './formatting/skill-list';

const Skills = () => {
   const skills = ['HTML', 'CSS', 'JavaScript', 'C++', 'C', 'Java', 'Python'];

   return <ContentBox title=" My Skills" id="skills">
      <SkillList skills={skills}/>
   </ContentBox>
};

export default Skills;