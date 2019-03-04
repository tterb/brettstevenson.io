import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import colors from '../../tailwind'
import { Parallax } from 'react-spring/addons.cjs'
// import Scrollchor from 'react-scrollchor'
// Components
import Layout from '../components/Layout'
import Nav from '../components/Nav'
// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'
import Footer from '../views/Footer'

// import banner from '../images/banner.jpg'
import '../styles/main.scss'


class Index extends React.Component {
  render() {
    const projects = get(this, 'props.data.allContentfulProject.edges')
    return (
      <>
        <Layout />
        <Parallax pages={5.075}>
          <Nav />
          <Hero offset={0} />
          <About offset={1} id='about' />
          <Projects projects={projects} offset={2.75} id='projects'/>
          <Contact offset={4.25} />
          <Footer offset={4.65} factor={0.5} />
        </Parallax>
      </>
    )
  }
}

export const projectQuery = graphql`
  query ProjectsQuery {
    allContentfulProject(sort: { fields: [key], order: ASC }) {
      edges {
        node {
          title
          link
          lang
          image {
            fixed(resizingBehavior: SCALE) {
              ...GatsbyContentfulFixed
            }
          }
          description {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 175)
            }
          }
        }
      }
    }
  }
`

export default Index