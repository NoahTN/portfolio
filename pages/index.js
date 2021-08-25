import Head from 'next/head'
import Header from '/components/header.js'
import Profile from '/components/profile.js'
import Skills from '/components/skills.js'
// import About from '/components/about.js'
import Projects from '../components/projects.js'
import Contact from '/components/contact.js'
import { getSortedAboutsData } from '/lib/abouts'
import { getSortedProjectsData } from '/lib/projects'


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

      <Header/>
      <Profile/>
      {/* <About aboutData={data.aboutData}/> */}
      <Skills/>
      <Projects projectData={data.projectData}/>
      <Contact/>
    </>
  )
}
