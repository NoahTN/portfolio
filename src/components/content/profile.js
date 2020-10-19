import React from 'react';
import { css } from '@emotion/core';

const Profile = () => (
      <div id ="profile" css={css`
         margin: 0 0 1rem 0;
         text-align: center;

         h1 {
            color: white;
            background-color: #21a685;
         }
      `}>
         <h1>Noah Tolentino Nguyen</h1>
         <h2>Full-Stack Developer</h2>
         <div>
            {/* icons */}
            {/* resume link */}
            {/* picture? */}
         </div>
      </div>
);

export default Profile;