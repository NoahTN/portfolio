import React from 'react';
import { css } from '@emotion/core';

const Profile = () => (
      <div id ="profile" css={css`
         margin: 0 0 1rem 0;
         text-align: center;

         h1 {
            color: white;
            background-color: darkgreen;
         }
      `}>
         <h1>Noah Tolentino Nguyen</h1>
         <h2>Full-Stack Developer</h2>
      </div>
);

export default Profile;