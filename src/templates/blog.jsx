import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import tw from 'tailwind.macro'
import { colors } from '../../tailwind'
import styled from 'styled-components'
import { Parallax } from 'react-spring/renderprops-addons'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
// Components
import Layout from '../components/Layout'
import Header from '../components/Header'
import BlogCard from '../components/BlogCard'
import PostTags from '../components/PostTags'
import Nav from '../components/Nav'
// Elements
import { BigTitle } from '../elements/Titles'
import Content from '../elements/Content'
// Views
import Footer from '../views/Footer'
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTags, faArchive, faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
// Styles
import '../styles/blog.scss'

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
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()
    return (
      <>
      <Layout />
        <Parallax pages={3.55}>
          <Nav style={navStyle} />
          <Header offset={0} factor={0.4}>
            <BigTitle>Blog<span className='accent'>.</span></BigTitle>
          </Header>
          <Content className='light-bg blog-content' offset={0.4} factor={3} style={`padding: 14rem 5rem !important`}>
            <div className='blog-container'>
              <ul className='blog-list'>
                {posts.map(({ node }) => {
                  return (
                    <li key={node.slug}>
                      <BlogCard post={node} />
                    </li>
                  )
                })}
              </ul>
              <Sidebar className='sidebar'>
                <ul className='sidebar-icons'>
                  <li><AniLink cover bg={colors['blue-black']} duration={1} direction='left' to=''><FontAwesomeIcon icon={faSearch}/></AniLink></li>
                  <li><AniLink cover bg={colors['blue-black']} duration={1} direction='left' to='../tags'><FontAwesomeIcon icon={faTags}/></AniLink></li>
                  <li><AniLink cover bg={colors['blue-black']} duration={1} direction='left' to='../archive'><FontAwesomeIcon icon={faArchive}/></AniLink></li>
                </ul>
                <hr/>
                <PostTags className='sidebar-tags' limit={12} />
              </Sidebar>
              <Pagination className='pagination'>
                {!isFirst && (
                  <AniLink cover bg={colors['blue-black']} duration={1} to={`blog/${prevPage}`} rel='prev'><FontAwesomeIcon icon={faArrowAltCircleLeft}/></AniLink>
                )}
                {!isLast && (
                  <AniLink cover bg={colors['blue-black']} duration={1} to={`blog/${nextPage}`} rel='next'><FontAwesomeIcon icon={faArrowAltCircleRight}/></AniLink>
                )}
              </Pagination>
            </div>
          </Content>
          <Footer offset={3.25} factor={0.5} />
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