import React from 'react';
import { css } from '@emotion/core';

const Profile = () => (
   <div css={css`
      display: flex;
      outline: 1px solid black;
   `}>
      <h1>Noah Tolentino Nguyen</h1>
      <h2>Full-Stack Developer</h2>
   </div>
);

export default Profile;