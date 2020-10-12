import React from 'react';

const AboutBox = ( {about} ) => {
   const { title, excerpt: desc} = about;

   return <div>
      <h2>{title}</h2>
      <p>{desc}</p>
   </div>
};

export default AboutBox;