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
                  background-color: #DCDCDC;
                  color: black;
                  right: 3%;
                  :hover {
                        color: #397BA6;
                        background-color: #DCDCDC;
                  }
               `}>
                  Go up
               </button>
           }
       </div>
   )
};

export default ScrollButton;