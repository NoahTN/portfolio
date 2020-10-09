import React from 'react';
import { css }from '@emotion/core';

const Header = () => (
   <header id="top"
      css={css`
         background: #eee;
         border-bottom: 1px solid #ddd;
         display: flex;
         justify-content: space-between;
         padding: 0.5rem calc((100vw - 725px - 0.5rem) / 2);

         a {
            color: #222;
            font-size: 1rem;
            font-weight: bold;
            line-height: 1;
            margin: 0 0.5rem 0 0;
            padding: 0.25rem;
            text-decoration: none;

            &:last-of-type {
               margin-right: 0;
            }
         }
      `}>
      <a href="#top">NoahTN</a>
      <nav 
         css={css`
            margin-top: 0;
         `}>
         <a href="#about">About</a>
         <a href="#skills">Skills</a>
         <a href="#projects">Projects</a>
         <a href="#contact">Contact</a>
      </nav>
   </header>
);

export default Header;