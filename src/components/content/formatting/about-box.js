import React from 'react';
import { css } from '@emotion/core';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const AboutBox = ( {about} ) => {
   const { title, body} = about;

   return <div css={css`
      background-color: #333;
      color: #ddd;
      
      h1 {
         color: #ddd;
      }
   `}>
      <h1>{title}</h1>
      <MDXRenderer>{body}</MDXRenderer>
   </div>
};

export default AboutBox;