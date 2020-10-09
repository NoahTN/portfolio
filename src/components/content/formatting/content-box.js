import React from 'react';
import { css } from '@emotion/core';

const ContentBox = ({ children, title, desc, color, id }) => {
   return <div css={css`
      background-color: ${color || 'white'};
      text-align: center;
   `}>
      <div id={id} css={css`
         display: inline-block;
         margin: 0 5rem 0 5rem;
         max-width: calc(33%-1rem);
      `}>
         {title && <h1>{title}</h1>}
         {desc && <h2>{desc}</h2>}
         {children}
      </div>
   </div>
};

export default ContentBox;