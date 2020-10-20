import React from 'react';
import { css } from '@emotion/core';
import { FaGithub, FaLinkedinIn} from 'react-icons/fa'
import ContentBox from './formatting/content-box';

const Contact = () => (
   <ContentBox title="Contact Me" id="contact">
      <div css={css`
         p {
            margin: 1rem;
         }

         a {
            color: #ddd;
            margin: 2rem 0.5rem;
         }

         #contact-email {
            margin-top: 5rem;
            text-decoration: none;
            font-weight: bold;
         }

         #contact-links {
            margin-top: 1.5rem;
         }
      `}>
         
         <p>If you want to talk, reach out to me at:</p>
         <a id="contact-email" href="malito:ntolentino-nguyen@gmail.com">ntolentino-nguyen@gmail.com</a>
         <div id="contact-links">
            <a href="https://github.com/NoahTN"><FaGithub size={'1.75em'}></FaGithub></a>
            <a href="https://www.linkedin.com/in/ntolentino-nguyen/"><FaLinkedinIn size={'1.75em'}></FaLinkedinIn></a>
         </div>
      </div>
   </ContentBox>
);

export default Contact;