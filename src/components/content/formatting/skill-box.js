import React from 'react';
import { css } from '@emotion/core';

const SkillBox = ( {children} ) => {
   return <div css={css`
      color: #fff;
      background: blue;
      font-size: 0.9em;
      padding: 0.25rem 0.5rem;
      margin: 0.5rem 0.2rem;
   `}>
      {children}
   </div>
};

export default SkillBox;