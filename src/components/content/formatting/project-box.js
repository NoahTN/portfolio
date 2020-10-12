import React from 'react';

const ProjectBox = ( {project} ) => {
   const { title, image, skills, excerpt:desc } = project;

   return <div>
   <h2>{title}</h2>
   {/* for loop <SkillBox></SkillBox> */}
   <p>{desc}</p>
   {/* ReadMore - an Object */}
   </div>;
};

export default ProjectBox;