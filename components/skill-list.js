import styles from '/styles/skill-list.module.css';

export default function SkillList({ skills, type, context }) {
   return <div className={styles[context]}>
      {skills.map(name => (
         <div key={name} className={`${styles[type]}`}>{name}</div>
      ))}
   </div>
}