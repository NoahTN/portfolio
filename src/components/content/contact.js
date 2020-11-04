import React from 'react';
import { css } from '@emotion/core';
import { FaGithub, FaLinkedin} from 'react-icons/fa'

const Contact = () => (
   <div id="contact" className="main-section" css={css`
      text-align: center;
      p {
         margin: 1rem;
      }

      a {
         color: #ddd;
         display:inline-block;
      }

      #contact-email {
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
         <a href="https://github.com/NoahTN"><FaGithub size={'1.75em'}/></a>
         <a href="https://www.linkedin.com/in/ntolentino-nguyen/"><FaLinkedin size={'1.75em'}/></a>
      </div>
   </div>
);

export default Contact;