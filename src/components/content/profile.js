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
      `}>
         <div id="profile-left">
            <h1>Noah Tolentino Nguyen</h1>
            <h2>Software Developer</h2>
         </div>

      </div>
);

export default Profile;