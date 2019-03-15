import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import tw from 'tailwind.macro'
import { colors } from '../../tailwind'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { Parallax } from 'react-spring/addons.cjs'
import AniLink from 'gatsby-plugin-transition-link/AniLink';
// Components
import Layout from '../components/Layout'
import Header from '../components/Header'
import BlogCard from '../components/BlogCard'
import Nav from '../components/Nav'
import SVG from '../components/SVG'
// Elements
import { Title, BigTitle, Subtitle } from '../elements/Titles'
import { Divider } from '../elements/Dividers'
import Content from '../elements/Content'
import Inner from '../elements/Inner'
import { UpDown, UpDownWide, waveAnimation } from '../styles/animations'
// Views
import Footer from '../views/Footer'
// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTags, faArchive, faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
// Images
import avatar from '../images/me.png'
// Styles
import '../styles/main.scss'

const Sidebar = styled.div`
  ${tw`relative inline-block w-1/4 float-right pt-2`}
`

const Pagination = styled.div`
  ${tw`block w-full m-auto`}
`

const navStyle = {
  position: 'absolute',
  top: '-0.5rem',
  right: '8vw',
}


class Blog extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const { currentPage, numPages } = this.props.pageContext
    console.log(currentPage)
    console.log(numPages)
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()
    return (
      <>
      <Layout />
        <Parallax pages={3.5}>
          <Nav style={navStyle} />
          <Header offset={0} factor={0.4}>
            <BigTitle>Blog<span className='accent'>.</span></BigTitle>
          </Header>
          <Content className="light-bg blog-content" offset={0.4} factor={3} style={`padding: 14rem 5rem !important`}>
            <div className="blog-container">
              <ul className="blog-list">
                {posts.map(({ node }) => {
                  return (
                    <li key={node.slug}>
                      <BlogCard post={node} />
                    </li>
                  )
                })}
              </ul>
              <Sidebar className="sidebar">
                <ul className="sidebar-icons">
                  <li><a href=''><FontAwesomeIcon icon={faSearch}/></a></li>
                  <li><a href=''><FontAwesomeIcon icon={faTags}/></a></li>
                  <li><a href=''><FontAwesomeIcon icon={faArchive}/></a></li>
                </ul>
                <hr/>
              </Sidebar>
              <Pagination className="pagination">
                {!isFirst && (
                  <AniLink cover bg="#23262b" duration={1} to={`blog/${prevPage}`} rel="prev"><FontAwesomeIcon icon={faArrowAltCircleLeft}/></AniLink>
                )}
                {!isLast && (
                  <AniLink cover bg="#23262b" duration={1} to={`blog/${nextPage}`} rel="next"><FontAwesomeIcon icon={faArrowAltCircleRight}/></AniLink>
                )}
              </Pagination>
            </div>
          </Content>
          <Footer offset={3.2} factor={0.5} />
        </Parallax>
      </>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query BlogQuery($skip: Int!, $limit: Int!) {
    allContentfulBlogPost(
      sort: { fields: [publishDate], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "DD MMMM, YYYY")
          category
          tags
          heroImage {
            fixed(resizingBehavior: SCALE) {
              ...GatsbyContentfulFixed_withWebp
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