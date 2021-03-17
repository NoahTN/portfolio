import React from 'react';
import { css } from '@emotion/core';
import SkillBox from './skill-box';

const SkillList = ( {skills, color} ) => {
   return <div css={css`
      display: flex;
      min-height: 100px;
      flex-wrap: wrap;
      justify-content: center;
      align-content: center;
      
   `}>
      { skills && skills.map(name => (
         <SkillBox key={name} color={color}>{name}</SkillBox>
      ))}
   </div>
};

export default SkillList;