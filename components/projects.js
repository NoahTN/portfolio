import styles from '/styles/project.module.scss'
import SkillList from './skill-list.js'

function ProjectBox({ project }) {
   return <div className={styles.box}>
      <a className={styles.header} href={project.link}>
         <h2>{project.title}</h2>
      </a>

      {project.image ? <a className={styles.image} href={project.link}>
         {/* <Image
            priority
            src={"/images/"+project.image}
            alt={project.title}
            layout='fill'
            objectFit='contain'
         /> */}
         <img src={require('/public/images/'+project.image)} />
      </a>: <div></div>}
      <p>{project.content}</p>
      
      <SkillList skills={project.skills} type="web" context="p-list"/>
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
