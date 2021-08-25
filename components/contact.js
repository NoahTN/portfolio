import styles from '/styles/contact.module.scss'
import { FaGithub, FaLinkedin} from 'react-icons/fa'

export default function Contact() {
   return <div className={styles.wrap}>
      <h1>Contact Me</h1>
      <p>If you want to talk, reach out to me at:</p>
      <a className={styles.email} href="mailto:ntolentino.nguyen@gmail.com">ntolentino.nguyen@gmail.com</a>
      <div className={styles.links}>
         <a href="https://github.com/NoahTN"><FaGithub size={'1.75em'} aria-label="Github Link"/></a>
         <a href="https://www.linkedin.com/in/ntolentino-nguyen/"><FaLinkedin size={'1.75em'} aria-label="LinkedIn Link"/></a>
      </div>
   </div>
}