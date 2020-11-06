import React from 'react';
import { css } from '@emotion/core';
import useResume from '../../hooks/use-resume'

const Profile = () => {
   const resume = useResume().node;
   return <div id="profile" css={css`
      margin: 1rem auto;
      background: #333;
      width: 400px;
      text-align: center;
      padding: 0.25rem 0 0 0;
      
      h1 {
         background: #21a685;
         margin: 0.75rem;
         padding: 0.75rem;
      }

      h2 {
         margin: 0.5rem;
      }
      
      #resume-block {
         border-top: 1px solid #222;
         border-bottom: 1px solid #222;
         background: #383838;
         padding: 0.5rem 0;
         display: flex;
         
         a {
            color: #f2f2f2;
            display:inline-block;
            text-decoration: none;
            font-weight: bold;
            margin: auto 0.4rem auto 0.75rem;
         }

         #resume-button {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: auto 0.75rem auto 0.4rem;
            width: 150px;
            height: 50px;
            border-radius: 10px;
            color: #f2f2f2;
            background: #21a685;
         }
      }
      
   `}>
      <h1>Noah Tolentino Nguyen</h1>
      <h2>Software Developer</h2>
      <div id="resume-block">
         <a href="mailto:ntolentino.nguyen@gmail.com">ntolentino.nguyen@gmail.com</a>
         <div id="resume-button">
            <a href={resume.publicURL}>
               Resume
            </a>
         </div>
      </div>
   </div>
};

export default Profile;