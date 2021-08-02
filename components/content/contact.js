import React from 'react';
import { css } from '@emotion/core';
import { FaGithub, FaLinkedin} from 'react-icons/fa'

const Contact = () => (
   <div id="contact" css={css`
      margin-top: 1rem;
      text-align: center;
      background: #21a685;
      color: #000;

      h1 {
         color: #f2f2f2;
      }

      p {
         margin: 0.5rem;
      }

      a {
         color: #222;
         display:inline-block;
      }

      #contact-email {
         color: #f2f2f2;
         margin: 0;
         text-decoration: none;
         font-weight: bold;
      }

      #contact-links a {
         margin: 1rem 0.5rem;
      }
   `}>
      <h1>Contact Me</h1>
      <p>If you want to talk, reach out to me at:</p>
      <a id="contact-email" href="mailto:ntolentino.nguyen@gmail.com">ntolentino.nguyen@gmail.com</a>
      <div id="contact-links">
         <a href="https://github.com/NoahTN"><FaGithub size={'1.75em'} aria-label="Github Link"/></a>
         <a href="https://www.linkedin.com/in/ntolentino-nguyen/"><FaLinkedin size={'1.75em'} aria-label="LinkedIn Link"/></a>
      </div>
   </div>
);

export default Contact;