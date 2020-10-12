import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import AboutBox from './about-box';

const SimpleSwiper = () => {
  return (
    <Swiper
      slidesPerView={1}
    >
      {/* loop through mdx and create SwiperSlides */}
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};

export default SimpleSwiper;