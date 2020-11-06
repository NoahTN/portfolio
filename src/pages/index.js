import React from "react"
import Layout from "../components/layout"
import ScrollButton from "../components/scroll-button"
import SEO from "../components/seo"
import About from "../components/content/about"
import Contact from "../components/content/contact"
import Profile from "../components/content/profile"
import Projects from "../components/content/projects"
import Skills from "../components/content/skills"
import { css } from '@emotion/core';

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Home"/>
      <Profile/>
      <div css={css`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 2rem 10rem; 
      `}>
        <Skills/>
        <About/>
      </div>
      <Projects/>
      <Contact/>
    </Layout>
    <ScrollButton showBelow={250} />
  </>
);

export default IndexPage
