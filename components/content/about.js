import React from 'react';
import { css } from '@emotion/core';
import Slider from "react-slick";
import { MDXRenderer } from 'gatsby-plugin-mdx';
import useAbouts from '../../hooks/use-abouts'

const About = () => {
   const abouts = useAbouts();
   const settings = {
      slidesToShow:1,
      infinite:true,
      slidesToScroll:1,
      autoplay:true,
      autoplaySpeed: 8000,
      arrows: false,
   }

   return <div css={css`
      text-align: center;
      max-width: 650px;
      min-width: calc((100vw - 650px) / 2);

      h1 {
         border-bottom: 3px solid #4062bb;
         line-height: 3.5rem;
      }
      
      .slick-track {
         display: flex !important;

         .slick-slide {
            height: inherit !important;

            .slide {
            outline: none;
            

            :active {
               cursor: move;
            }

            p {
               text-align: left;
               margin: 1rem auto;
               padding: 1rem;
               background: #333;
               min-height: 168px;
            }
         }
      }
         
   }

   `}>
      <Slider {...settings}>
         {abouts.map(about => (
            <div className="slide" key={about.title}>
               <h1>{about.title}</h1>
               <MDXRenderer>{about.body}</MDXRenderer>
            </div>
         ))}
      </Slider>
   </div> 
};

export default About;