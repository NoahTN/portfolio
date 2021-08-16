import styles from '/styles/project.module.scss'
import SkillList from './skill-list.js'
import Image from 'next/image'

function ProjectBox({ project }) {
   const { title, image, skills, link, content } = project;

   return <div className={styles.box}>
      <a href={link}>
         <h2>{title}</h2>
      </a>
      <div className={styles.body}>
         {image && <a chref={link}>
            <Image
               priority
               src={"/images/"+image}
               alt={title}
               layout='fill'
               objectFit='contain'
            />
         </a>}
         <p>{content}</p>
      </div>
      <SkillList skills={skills} type="web" context="p-list"/>
   </div>
}

export default function Projects({ projectData }) {
   return <div className={styles.wrap}>
      <h1>My Projects</h1>
      <div className={styles.list}>
         {projectData.map(project => {
            return <ProjectBox key={project.id} project={project} />
         })}
      </div>
   </div>
}
