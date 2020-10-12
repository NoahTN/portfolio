import React from 'react';
import { css } from '@emotion/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import AboutBox from './formatting/about-box';
import useAbouts from '../../hooks/use-abouts'

const About = () => {
   const abouts = useAbouts();

   return <div id="about" css={css`
      margin-top: 0; 
   `}>
      <Swiper slidesPerView={1}>
         {abouts.map(about => (
            <SwiperSlide key={about.title}>
            <AboutBox about={about}/>
            </SwiperSlide>
         ))}
      </Swiper>
   </div>
};

export default About;