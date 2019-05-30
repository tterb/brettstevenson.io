import React from 'react'
import { graphql } from 'gatsby'
import _ from 'lodash'
import tw from 'tailwind.macro'
import { colors } from '../../tailwind'
import styled from 'styled-components'
import Bounce from 'react-reveal/Bounce';
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
  margin-top: 0;
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

const Pagination = styled.div`
  ${tw`block w-full text-center m-auto pt-8`}
`

const navStyle = {
  position: 'absolute',
  top: '-0.5rem',
  right: '8vw',
}


class Tags extends React.Component {
  render() {
    const siteTitle = _.get(this, 'props.data.site.siteMetadata.title')
    const posts = _.get(this, 'props.data.allContentfulBlogPost.edges')
    const { tag, currentPage, numPages, count } = this.props.pageContext
    const postCount = (currentPage <= Math.floor(count/4) ? 4 : count)
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
          <Header offset={0} factor={0.45} speed={0.4}>
            <PageTitle>{ _.upperFirst(tag) }<span className='accent'>.</span></PageTitle>
          </Header>
          <Content className='light-bg blog-content' offset={0.45} factor={3} speed={0.6} style={{padding: `14rem 5rem !important`}}>
            <div className='blog-container'>
              <CardList className='blog-list'>
                {posts.map(({ node, i }) => {
                  return (
                    <Bounce bottom delay={100*(i+1)} duration={1000}>
                      <BlogCard key={node.slug} post={node} />
                    </Bounce>
                  )
                })}
              </CardList>
              <Sidebar className='sidebar'>
                <ul className='sidebar-icons'>
                  <li><PageLink to='../search'><FontAwesomeIcon icon={faSearch} /></PageLink></li>
                  <li><PageLink to='../tags'><FontAwesomeIcon icon={faTags} /></PageLink></li>
                  <li><PageLink to='../archive'><FontAwesomeIcon icon={faArchive} /></PageLink></li>
                </ul>
                <hr />
                <PostTags className='sidebar-tags' limit={8} />
              </Sidebar>
              <Pagination className='pagination'>
                {!isFirst && (
                  <PageLink to={`blog/tags/${tag}/${prevPage}`} rel='prev'><FontAwesomeIcon icon={faArrowAltCircleLeft}/></PageLink>
                )}
                {!isLast && (
                  <PageLink to={`blog/tags/${tag}/${nextPage}`} rel='next'><FontAwesomeIcon icon={faArrowAltCircleRight}/></PageLink>
                )}
              </Pagination>
            </div>
          </Content>
          <Footer offset={pageHeight-0.325} speed={0.15} />
        </Parallax>
      </>
    )
  }
}

export default Tags

export const tagQuery = graphql`
  query TagQuery($skip: Int!, $limit: Int!, $tag: String!) {
    allContentfulBlogPost(
      sort: { fields: [publishDate], order: DESC }
      filter: { tags: { in: [$tag] } }
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