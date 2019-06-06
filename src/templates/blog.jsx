import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import tw from 'tailwind.macro'
import { accent } from '../../tailwind'
import styled from 'styled-components'
import { Parallax } from 'react-spring/renderprops-addons'
// Components
import Layout from '../components/Layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import BlogCard from '../components/BlogCard'
import PostTags from '../components/PostTags'
import PageLink from '../components/PageLink'
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

const PageTitle = styled(BigTitle)`
  ${tw`mt-0`}
`

const BlogContent = styled(Content)`
  top: -1.5rem;
`

const CardList = styled.ul`
  ${tw`inline-block list-reset`}
  width: 72%;
  margin-top: -1vh;
  margin-right: 3%;
`

const Sidebar = styled.div`
  ${tw`relative inline-block w-1/4 float-right pt-0`}
`

const SidebarIcons = styled.ul`
  ${tw`text-left list-reset w-4/5 mx-auto my-6 p-0 pl-2`}
  font-size: 2rem;
  li {
    ${tw`inline-block mr-5`}
    margin-right: 1.05rem;
    a svg {
      color: rgba(0,0,0,0.7);
      transition: all 350ms ease-in-out;
      &:hover {
        color: ${accent};
      }
    }
    &:last-child {
      margin-right: 0;
    }
  }
`

const Pagination = styled.div`
  ${tw`block w-full text-center m-auto pt-8`}
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
    
    const postCount = (currentPage <= Math.floor(posts.length/4) ? 4 : posts.length)
    const pageHeight = 1.025+(postCount*0.39)
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()
    return (
      <>
      <Layout />
        <Parallax pages={pageHeight}>
          <Nav style={navStyle} />
          <Header offset={0} factor={0.5} speed={0.4}>
            <PageTitle>Blog<span className='accent'>.</span></PageTitle>
          </Header>
          <BlogContent className='light-bg blog-content' offset={0.45} factor={3} speed={0.6} style={{padding: `14rem 5rem !important`}}>
            <div className='blog-container'>
              <CardList className='blog-list'>
                {posts.map(({ node }) => {
                  return (
                    <li key={node.slug}>
                      <BlogCard post={node} />
                    </li>
                  )
                })}
              </CardList>
              <Sidebar className='sidebar'>
                <SidebarIcons>
                  <li><PageLink to='../search'><FontAwesomeIcon icon={faSearch} /></PageLink></li>
                  <li><PageLink to='../tags'><FontAwesomeIcon icon={faTags} /></PageLink></li>
                  <li><PageLink to='../archive'><FontAwesomeIcon icon={faArchive} /></PageLink></li>
                </SidebarIcons>
                <hr />
                <PostTags className='sidebar-tags' limit={8} />
              </Sidebar>
              <Pagination className='pagination'>
                {!isFirst && (
                  <PageLink to={`blog/${prevPage}`} rel='prev'><FontAwesomeIcon icon={faArrowAltCircleLeft}/></PageLink>
                )}
                {!isLast && (
                  <PageLink to={`blog/${nextPage}`} rel='next'><FontAwesomeIcon icon={faArrowAltCircleRight}/></PageLink>
                )}
              </Pagination>
            </div>
          </BlogContent>
          <Footer offset={pageHeight-0.325} />
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