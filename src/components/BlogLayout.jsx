import React from 'react'
import _ from 'lodash'
import tw from 'tailwind.macro'
import styled from 'styled-components'
import Bounce from 'react-reveal/Bounce';
import { Parallax } from 'react-spring/renderprops-addons'
// Components
import Header from '../components/Header'
import Nav from '../components/Nav'
import BlogCard from '../components/BlogCard'
import Pagination from '../components/Pagination'
import Sidebar from '../components/Sidebar'
// Elements
import { BigTitle } from '../elements/Titles'
import Content from '../elements/Content'
// Views
import Footer from '../views/Footer'
// Hooks
import { isMobile } from '../hooks/WindowDimensions'
// Styles
import '../styles/blog.scss'


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

const CardList = styled.div`
  ${tw`inline-block w-7/10 xs:inline xs:w-9/10 xs:mx-auto lg:inline-block lg:w-7/10`}
  margin-top: -1vh;
  margin-right: 3%;
`

const navStyle = {
  position: 'absolute',
  top: '-0.5rem',
  right: '8vw',
}


const BlogLayout = ({ title, context, posts }) => {
  const mobile = isMobile()
  const { currentPage, numPages, count } = context
  const path = (title === 'Blog') ? `blog` : `blog/tags/${_.kebabCase(title)}`
  
  let postCount = count%4
  if(count < 4)
    postCount = count
  else if(currentPage <= Math.floor(count/4))
    postCount = 4
  const pageHeight = 1.05+(postCount*0.39)
  return (
    <Parallax pages={pageHeight}>
      <Nav mobile={mobile}/>
      <Header offset={0} factor={0.45}>
        <PageTitle>{ _.upperFirst(title) }<span className='accent'>.</span></PageTitle>
      </Header>
      <Content className='light-bg blog-content' offset={0.45} factor={3} speed={0.6} style={{padding: `14rem 5rem !important`}}>
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
      </Content>
      <Footer offset={pageHeight-0.325} speed={0.15} />
    </Parallax>
  )
}

export default BlogLayout
