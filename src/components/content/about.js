import React from 'react';
import { css } from '@emotion/core';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import AboutBox from './formatting/about-box';
import useAbouts from '../../hooks/use-abouts'

const About = () => {
   const abouts = useAbouts();
   SwiperCore.use([Autoplay]);

   return <div id="about" css={css`
      div {
         margin-top: 0;
         text-align: center;
         height: 8rem;
         align-self: stretch;
      }
   `}>
      <Swiper 
         slidesPerView={1}
         loop={true}
         autoplay={{ delay: 5000 }}

      >
         {abouts.map(about => (
            <SwiperSlide key={about.title}>
            <AboutBox about={about}/>
            </SwiperSlide>
         ))}
      </Swiper>
   </div>
};

export default About;