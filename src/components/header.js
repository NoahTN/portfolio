import React from 'react';
import { css }from '@emotion/core';
import { FaGithub, FaLinkedin} from 'react-icons/fa'

const Header = () => (
   <header id="top"
      css={css`
         background: #222;
         display: flex;
         justify-content: space-between;
         padding: 0.5rem calc((100vw - 1200px - 0.5rem) / 2);

         a {
            display: inline-block;
            color: #ddd;
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
         <a href="#skills">About</a>
         <a href="#projects">Projects</a>
         <a href="#contact">Contact</a>
         <a href="https://github.com/NoahTN"><FaGithub size={'1.4rem'}/></a>
         <a href="https://www.linkedin.com/in/ntolentino-nguyen/"><FaLinkedin size={'1.4rem'}/></a>
      </nav>
   </header>
);

export default Header;