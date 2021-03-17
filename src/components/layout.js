import React from 'react';
import { Global, css } from '@emotion/core';
import Helmet from 'react-helmet';
import Header from './header';
import useSiteMetadata from '../hooks/use-sitemetadata';

const Layout = ({ children }) => {
   const { title, description } = useSiteMetadata()

   return (
      <>
         <Global styles={css`
            * {
               box-sizing: border-box;
               margin: 0;
            }
            
            html,
            body {
               margin: 0;
               color: #f2f2f2;
               background: #222;
               font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
               font-size: 18px;

               strong {
                  color: #f2f2f2;
               }

               li {
                  margin-top: 0.25rem;
               }

               #skills-about {
                  display: flex;
                  flex-wrap: wrap;
                  justify-content: center;
                  text-align: center;
                  width: 1700px;
                  margin: 2rem auto; 
                  padding: 0.75rem;
               }   
            }
         `} />

         <Helmet>
            <html lang="en"/>
            <title>{title}</title>
            <meta name="description" content={description}/>
            <link
               rel="stylesheet"
               type="text/css"
               charset="UTF-8"
               href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
            />
            <link
               rel="stylesheet"
               type="text/css"
               href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
            />
            <script src="https://unpkg.com/swiper/swiper-bundle.js"></script>
            <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
         </Helmet>

         <Header/>
         <main
            css={css`
               margin: 2rem auto 0;
               
            `}
         >{children}</main>
      </>
   )
;}

export default Layout;