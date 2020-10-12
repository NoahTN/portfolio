import React from 'react';
import { css } from '@emotion/core';
import SimpleSwiper from './formatting/swiper';

const About = () => (
   <div id="about" css={css`
      margin-top: 0; 
   `}>
      <SimpleSwiper />
   </div>
);

export default About;