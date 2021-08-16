import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Profile from '/components/profile.js'
import Skills from '/components/skills.js'
import About from '/components/about.js'
import Projects from '../components/projects.js'
import { getSortedAboutsData } from '/lib/abouts'
import { getSortedProjectsData } from '/lib/projects'
// import Contact from '../components/contact.js'

export async function getStaticProps() {
  const aboutData = getSortedAboutsData()
  const projectData = getSortedProjectsData()
  return {
    props: {
      data: {
        aboutData,
        projectData
      }
    }
  }
}

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>NoahTN Portfolio</title>
        <meta name="description" content="Noah Tolentino Nguyen's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Profile/>
       <div id="skills-about">
        <Skills/>
        <About aboutData={data.aboutData}/>
      </div>
      <Projects projectData={data.projectData}/>

   
        {/* <ScrollButton showBelow={250} /> */}
    
     
      {/* <footer className={styles.footer}>
        <Contact/>
      </footer> */}
    </>
  )
}
