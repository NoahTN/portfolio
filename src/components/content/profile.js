import React from 'react';
import { css } from '@emotion/core';
import useResume from '../../hooks/use-resume'

const Profile = () => {
   const resume = useResume().node;
   return <div id="profile" css={css`
      margin: 1rem auto;
      background: #333;
      max-width: 550px;
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
         flex-wrap: wrap;
         justify-content: center;
         
         a {
            color: #f2f2f2;
            display:inline-block;
            text-decoration: none;
            font-weight: bold;
            margin: auto 1.2rem auto 0.75rem;
         }

         #resume-button {
            line-height: 50px;
            margin: auto 1.2rem;
            max-width: 100px;
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