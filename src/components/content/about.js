import React from 'react';
import { css } from '@emotion/core';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import useAbouts from '../../hooks/use-abouts'

const About = () => {
   const abouts = useAbouts();
   SwiperCore.use([Autoplay]);

   return <div css={css`
      width: 609px;
      margin: auto 4rem;
      text-align: center;
      
      p {
         text-align: left;
         margin: 1rem auto;
         padding: 1rem;
         background: #333;
         height: 168px;
         width: 609px;
      }

   `}>
      <Swiper 
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
   </div> 
};

export default About;