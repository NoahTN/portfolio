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

            * + * {
               margin-top: 1rem;
            }
            
            html,
            body {
               margin: 0;
               color: #555;
               font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
               font-size: 18px;
               line-height: 1.4;
               /* remove margin for main div that gatsby mounts into */
               > div {
                  margin-top: 0;
               }

               h1,
               h2,
               h3,
               h4,
               h5,
               h6 {
                  color: #222;
                  line-height: 1.1;

                  + * {
                     margin-top: 0.5rem;
                  }
               }

               strong {
                  color: #222;
               }

               li {
                  margin-top: 0.25rem;
               }
            }
         `} />

         <Helmet>
            <html lang="en"/>
            <title>{title}</title>
            <meta name="description" content={description}/>
            <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.css"/>
            <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css"/>
            <script src="https://unpkg.com/swiper/swiper-bundle.js"></script>
            <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
         </Helmet>

         <Header/>
         <main
            css={css`
               margin: 2rem auto 4rem;
            `}
         >{children}</main>
      </>
   )
;}

export default Layout;