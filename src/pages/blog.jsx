import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { colors } from '../../tailwind'
import { Parallax } from 'react-spring/addons.cjs'

// Components
import Layout from '../components/Layout'
import BlogCard from '../components/BlogCard'
import Header from '../components/Header'
import Nav from '../components/Nav'
import SVG from '../components/SVG'
import Cube from '../components/Cube'

// Elements
import { Title, BigTitle, Subtitle } from '../elements/Titles'
import { Divider } from '../elements/Dividers'
import Content from '../elements/Content'
import Inner from '../elements/Inner'
import { UpDown, UpDownWide, waveAnimation } from '../styles/animations'

// Views
import Footer from '../views/Footer'

import avatar from '../images/me.png'
import '../styles/main.scss'


class Blog extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    
    return (
      <>
      <Layout />
        <Parallax pages={4.5}>
          <Nav />
          <Header offset={0} factor={0.4}>
            <BigTitle>Blog</BigTitle>
          </Header>
          <Content className="light-bg" offset={0.4} factor={4}>
            <ul className="blog-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <BlogCard post={node} />
                  </li>
                )
              })}
            </ul>
          </Content>
          <Footer offset={4} factor={0.5} />
        </Parallax>
      </>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query BlogQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "DD MMMM, YYYY")
          category
          tags
          heroImage {
            fixed(resizingBehavior: SCALE) {
              ...GatsbyContentfulFixed
            }
          }
          description {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 120)
            }
          }
        }
      }
    }
  }
`