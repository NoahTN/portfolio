import styles from '/styles/skills.module.scss';
import SkillList from './skill-list';

export default function Skills() {
   const webList = ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'SQL']
   const generalList = ['C', 'C++', 'Java', 'Python']
   const toolList = ['AWS', 'Spring Boot', 'Unity', 'Flutter']

   return <div className={styles.wrap}>
      <h1>My Skills</h1>
      <div className={styles.body}>
         <div className={styles.column}>
            <h2 className={styles['web-head']}>Web</h2>
            {/* <div className="break"></div> */}
            <SkillList skills={webList} type="web" context="s-list"/>
         </div>
         <div className={styles.column}>
            <h2 className={styles['gen-head']}>General</h2>
            {/* <div className="break"></div> */}
            <SkillList skills={generalList} type="gen" context="s-list"/>
         </div>
         <div className={styles.column}>
            <h2 className={styles['tool-head']}>Tools</h2>
            {/* <div className="break"></div> */}
            <SkillList skills={toolList} type="tool" context="s-list"/>
         </div>
      </div>
   </div>
}