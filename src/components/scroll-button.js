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
                    bottom: 2.5vh;
                    background-color: #21a685;
                    border: 1px solid #222;
                    border-radius: 3px;
                    font-weight: bold;
                    right: 2.5vw;
                    width: 3rem;
                    height: 1.5rem;
                    :hover {
                            color: #222;
                            cursor: pointer;
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