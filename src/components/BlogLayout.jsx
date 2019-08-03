import React from 'react'
import kebabCase from 'lodash/kebabCase'
import upperFirst from 'lodash/upperFirst'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Bounce from 'react-reveal/Bounce';
import { Parallax } from 'react-spring/renderprops-addons'
// Components
import Header from '../components/Header'
import Layout from '../components/Layout'
import Nav from '../components/Nav'
import BlogCard from '../components/BlogCard'
import Pagination from '../components/Pagination'
import Sidebar from '../components/Sidebar'
// Elements
import { BigTitle } from '../elements/Titles'
import Content from '../elements/Content'


const PageTitle = styled(BigTitle)`
  ${tw`mt-0`}
  z-index: -99;
`

const Wrapper = styled.div`
  ${tw`m-auto xs:pt-8 md:pt-16`}
  width: 95%;
  max-width: 1200px;
  padding-left: 4vw;
  padding-right: 4vw;
  padding-bottom: 18rem;
`

const BlogContent = styled(Content)`
  ${tw`h-auto p-0 pt-16 z-10`}
  background: rgba(255,255,255,0.985);
  top: -1.5rem;
  padding: 0 !important;
  div {
    z-index: 9999999;
  }
`

const CardList = styled.div`
  ${tw`inline-block w-7/10 xs:inline xs:w-9/10 xs:mx-auto lg:inline-block lg:w-7/10`}
  margin-top: -1vh;
  margin-right: 3%;
`

const BlogLayout = ({ title, posts, pageContext }) => {
  require('../styles/blog.scss')
  const { currentPage, numPages, count } = pageContext
  const path = (title === 'Blog') ? `blog` : `blog/tags/${kebabCase(title)}`
  
  let postCount = count%4
  if(count < 4)
    postCount = count
  else if(currentPage <= Math.floor(count/4))
    postCount = 4
  const pageHeight = 1.05+(postCount*0.39)
  return (
    <Layout pages={pageHeight}>
      <Header offset={0} factor={0.45}>
        <PageTitle>{ upperFirst(title) }<span className='accent'>.</span></PageTitle>
      </Header>
      <BlogContent className='light-bg' offset={0.45} factor={3} speed={0.6}>
        <Wrapper>
          <CardList>
            {posts.map(({ node, i }) => (
              <Bounce bottom delay={100*(i+1)} duration={1000}>
                <BlogCard key={node.slug} post={node} />
              </Bounce>
            ))}
          </CardList>
          <Sidebar />
          <Pagination 
            path={path}
            current={currentPage} 
            numPages={numPages} />
        </Wrapper>
      </BlogContent>
    </Layout>
  )
}

export default BlogLayout
