import React from 'react';
import { css } from '@emotion/core';
import About from './about';

const Profile = () => (
      <div id ="profile" css={css`
         margin: 1rem auto;
         background: #333;
         display: flex;
         flex-wrap: wrap;
         width: 1000px;
         height: 200px;
         text-align: center;
        
         #profile-left {
            color: white;
            background: #21a685;
            width: 400px;
            height: 100%;
         }
         #profile-right {
            width: 600px;
         }
      `}>
         <div id="profile-left">
            <h1>Noah Tolentino Nguyen</h1>
            <h2>Software Developer</h2>
         </div>
         <div id="profile-right">
            <About/>
         </div>
      </div>
);

export default Profile;