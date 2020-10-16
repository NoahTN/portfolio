import React from 'react';
import { css } from '@emotion/core';
import SkillBox from './skill-box';

const SkillList = ( {skills} ) => {
   return <div css={css`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      
   `}>
      {skills.map(name => (
         <SkillBox key={name}>{name}</SkillBox>
      ))}
   </div>
};

export default SkillList;