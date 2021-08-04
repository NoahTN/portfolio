import React from 'react';
import { css } from '@emotion/core';
import { FaGithub, FaLinkedin} from 'react-icons/fa'

const Contact = () => (
   <div id="contact">
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