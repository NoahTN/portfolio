import React from 'react';
import { css } from '@emotion/core';

const SkillBox = ( {children} ) => {
   return <div css={css`
      color: #fff;
      background: blue;
      font-size: 0.9rem;
      padding: 0.5rem 1rem 0.5rem 1rem;
      margin: 0.5rem 0.25rem 0.5rem 0.25rem;
   `}>
      {children}
   </div>
};

export default SkillBox;