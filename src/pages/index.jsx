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
    </Layout>
  )
}

export const indexQuery = graphql`{
  avatar: file(name: {eq: "me"}) {
    childImageSharp {
      gatsbyImageData(width: 800, layout: CONSTRAINED)
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
