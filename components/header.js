import styles from '/styles/header.module.scss'
import { FaGithub, FaLinkedin} from 'react-icons/fa'

export default function Header() {
   return <header className={styles.wrap}>
      <a href="#top">NoahTN</a>
      <nav>
         <a href="#skills">About</a>
         <a href="#projects">Projects</a>
         <a href="#contact">Contact</a>
         <a href="https://github.com/NoahTN"><FaGithub size={'1.4rem'} aria-label="Github Link"/></a>
         <a href="https://www.linkedin.com/in/ntolentino-nguyen/"><FaLinkedin size={'1.4rem'} aria-label="LinkedIn Linked"/></a>
      </nav>
   </header>
}