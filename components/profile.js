import styles from '/styles/profile.module.scss'
// import useResume from '../../hooks/use-resume'

export default function Profile() {
   // const resume = useResume().node;
   
   return <div className={styles.profile}>
      <h1>Noah Tolentino Nguyen</h1>
      <h2>Software Developer</h2>
      <div className={styles.resume}>
         <a href="mailto:ntolentino.nguyen@gmail.com">ntolentino.nguyen@gmail.com</a>
         <div className={styles.button}>
            <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1WNJecSqRFashnhBeDV6yoRbIDVZ4Pzy1b2SFEELXsEk/edit?usp=sharing">
               Resume
            </a>
         </div>
      </div>
   </div>
};