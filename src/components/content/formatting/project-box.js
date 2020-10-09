import React from 'react';

const ProjectBox = ( {project} ) => {
   const title = project.title;
   const image = project.image;
   const skills = project.skills;
   const description = project.excerpt;

   return <div>
   <h2>{title}</h2>
   {/* for loop <SkillBox></SkillBox> */}
   <p>{description}</p>
   {/* ReadMore - an Object */}
   </div>;
};

export default ProjectBox;