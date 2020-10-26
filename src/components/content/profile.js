import React from 'react';
import { css } from '@emotion/core';

const Profile = () => (
      <div id ="profile" css={css`
         margin: 1rem auto;
         background: #333;
         color: white;
         width: 400px;
         text-align: center;
         padding: 1rem 1rem;
         h1 {
            background: #21a685;
            padding: 1rem;
         }

         a {
            color: #ddd;
            display:inline-block;
            text-decoration: none;
         }

         #resume-button {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.1rem;
            margin: 1rem auto 0 auto;
            width: 150px;
            height: 50px;
            border-radius: 1rem;
            color: #21a685;
            border: 2px solid #21a685;
         }
      `}>
         <div id="profile-left">
            <h1>Noah Tolentino Nguyen</h1>
            <h2>Software Developer</h2>
            <a href="mailto:ntolentino.nguyen@gmail.com">ntolentino.nguyen@gmail.com</a>
            <div id="resume-button">View Resume</div>
         </div>

      </div>
);

export default Profile;