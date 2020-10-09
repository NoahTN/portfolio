import React from 'react';
import { css } from '@emotion/core';
import ContentBox from './formatting/content-box';

const Profile = () => (
   <ContentBox id="profile">
      <div css={css`
         outline: 1px solid black;
      `}>
         <h1 css={css`
            color: white;
            background-color: darkgreen;
         `}
         >Noah Tolentino Nguyen</h1>
         <h2>Full-Stack Developer</h2>
      </div>
   </ContentBox>
);

export default Profile;