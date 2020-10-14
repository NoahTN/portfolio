import React from 'react';
import { css } from '@emotion/core';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const AboutBox = ( {about} ) => {
   const { title, body} = about;

   return <div css={css`
      background-color: #fff;
      color: #222;
      
      h2 {
         color: #222;
      }
   `}>
      <h2>{title}</h2>
      <MDXRenderer>{body}</MDXRenderer>
   </div>
};

export default AboutBox;