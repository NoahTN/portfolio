import React from 'react';
import { css } from '@emotion/core';

const ContentBox = ({ children, title, desc, color, id }) => {
   return <div id={id} css={css`
      background-color: ${color || '#222'};
      text-align: center;
      margin: 0 5rem 1rem 5rem;
      max-width: calc(33%-1rem);
      > div {
         display: flex;
         justify-content: center;
      }
      `}>
         <h1>{title}</h1>
         <h2>{desc}</h2>
         <div>{children}</div>
         
      </div>
};

export default ContentBox;