import React from 'react'
import { graphql } from 'gatsby'
// Components
import Layout from 'components/Layout'
// Views
import Hero from 'views/Hero'
import Projects from 'views/Projects'
import About from 'views/About'
import Contact from 'views/Contact'
// Hooks
import useWindowSize from 'hooks/useWindowSize'


const Index = ({ data, ...props }) => {
  const windowSize = useWindowSize()
  const avatar = data.avatar.childImageSharp.gatsbyImageData
  const projects = data.projects.nodes || []
  return (
    <Layout
      navLogo={false}
      windowSize={windowSize}
    >
      <span role='main'>
        <Hero {...props} />
        <About
          id='about'
          avatar={avatar}
          isMobile={windowSize.isMobile}
        />
        <Projects
          id='projects'
          projects={projects}
          windowSize={windowSize}
        />
        <Contact
          id='contact'
          isMobile={windowSize.isMobile}
        />
      </span>
    </Layout>
  )
}

export const indexQuery = graphql`{
  avatar: file(relativePath: {eq: "me.jpg"}) {
    childImageSharp {
      gatsbyImageData(
        layout: CONSTRAINED,
        width: 800
      )
    }
  }
  projects: allMdx(
    filter: {fields: {sourceInstanceName: {eq: "projects"}}}
    sort: {fields: [frontmatter___key], order: ASC}
  ) {
    nodes {
      id
      frontmatter {
        description
        title
        link
        github
        languages
      }
    }
  }
}
`

export default Index
