import React from 'react';
import { css } from '@emotion/core';

const AboutBox = ( {about} ) => {
   const { title, excerpt: desc} = about;

   return <div css={css`
      background-color: #fff;
      color: #222;
      
      h2 {
         color: #222;
      }
   `}>
      <h2>{title}</h2>
      <p>{desc}</p>
   </div>
};

export default AboutBox;