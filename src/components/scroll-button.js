import React, { useState, useEffect } from 'react'
import { css } from "@emotion/core";

const ScrollButton = ({ showBelow }) => {

   const [show, setShow] = useState(showBelow ? false : true);

   const handleScroll = () => {
       if (window.pageYOffset > showBelow) {
           if (!show) setShow(true)
       } 
       else {
           if (show) setShow(false)
       }
   };

   const handleClick = () => {
       window[`scrollTo`]({ top: 0, behavior: `smooth` })
   };

   useEffect(() => {
       if (showBelow) {
           window.addEventListener(`scroll`, handleScroll)
           return () => window.removeEventListener(`scroll`, handleScroll)
       }
   });

   return (
       <div>
           {show &&
               <button onClick={handleClick} aria-label="to top" css={css`
                  z-index: 2;
                  position: fixed;
                  bottom: 2vh;
                  background-color: #21a685;
                  color: #222;
                  right: 2.5%;
                  width: 3rem;
                  height: 1.5rem;
                  border: 0;
                  :hover {
                        color: #ddd;
                        background-color: #21a685;
                  }
               `}>
                  Go up
               </button>
           }
       </div>
   )
};

export default ScrollButton;