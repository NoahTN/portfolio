import React from 'react';
import { css } from '@emotion/core';

const SkillBox = ( {children, color} ) => {
   return <div css={css`
      background: ${color ? color : "#21a685"};
      font-size: 0.9em;
      padding: 0.25rem 0.5rem;
      margin: 0.5rem 0.2rem;
   `}>
      {children}
   </div>
};

export default SkillBox;