import React from 'react';
import { css } from '@emotion/core';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import useAbouts from '../../hooks/use-abouts'

const About = () => {
   const abouts = useAbouts();
   SwiperCore.use([Autoplay]);

   return <Swiper 
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 5000 }}
   >
      {abouts.map(about => (
         <SwiperSlide key={about.title}>
            <h1>{about.title}</h1>
            <MDXRenderer>{about.body}</MDXRenderer>
         </SwiperSlide>
      ))}
   </Swiper>
};

export default About;