import React from 'react'
import PropTypes from 'prop-types'
import { animated, useTrail } from 'react-spring'
import kebabCase from 'lodash/kebabCase'
import upperFirst from 'lodash/upperFirst'
// Components
import Layout from 'components/Layout'
import Header from 'components/Header'
import BlogCard from 'components/BlogCard'
import Pagination from 'components/Pagination'
import Search from 'components/Search'
import CategoryMenu from 'components/CategoryMenu'


const BackgroundTitleStyle = {
  fontSize: '40vw',
  letterSpacing: '-0.35rem',
}

const BlogLayout = ({ title, posts, categories, pageContext }) => {
  // config({ ssrFadeout: true })
  const { currentPage, numPages, count } = pageContext
  const categoryPage = (title !== 'Blog')
  const path = categoryPage ? `blog/category/${kebabCase(title)}` : `blog`

  const trail = useTrail(posts.length, {
    from: { top: '100rem' },
    to: { top: '0' },
  });
  return (
    <Layout className='bg-gray-900 h-auto'>
      <Header className='bg-base-200' full={true}>
        <div className='absolute h-full -top-20 -left-8 pt-0 px-0'>
          <h2 className='font-title font-semibold text-white text-opacity-5 leading-none w-full mt-0 mb-6 ml-0 cursor-default z-min' style={BackgroundTitleStyle}>Blog</h2>
        </div>
        <div className='w-full max-w-200 mx-auto'>
          <h1 className='relative inline-block text-7xl font-title font-bold text-white text-opacity-90 leading-none tracking-normal m-0 mt-12 pb-3 transition-all duration-200 ease-in-out md:text-8xl md:mt-6'>
            {upperFirst(title)}<span className='text-accent accent-dot'>.</span>
          </h1>
          <h4 className='font-sans text-gray-600 text-lg text-left font-medium leading-tight w-full mt-1 mb-3 ml-0 mr-auto md:text-xl md:w-9/10 lg:w-4/5'>Read my latest articles and posts on software development, design, technology and more.</h4>
        </div>
      </Header>
      <div className='w-full h-full -mt-9 mb-0 mx-auto p-0 z-10'>
        <div className='w-4/5 sm:w-9/10 md:w-4/5 max-w-240 m-auto mt-8 pt-8 pb-20 z-9999 sm:mt-9 sm:mb-1 md:pt-12'>
          <div className='hidden md:flex relative justify-between items-end w-32 h-12 ml-0 z-9999 md:ml-auto mr-auto md:mr-1'>
            <Search />
            <CategoryMenu categories={categories} />
          </div>
          <div className='inline w-full mt-0 mx-auto pt-8 z-9999'>
            {trail.map((style, index) => (
                <animated.div
                  key={index}
                  className='relative'
                  style={style}
                >
                  <BlogCard
                    key={index}
                    post={posts[index]}
                  />
                </animated.div>
            ))}
          </div>
          {numPages > 1 ? (
            <Pagination
              path={path}
              current={currentPage}
              numPages={numPages}
            />
          ) : null}
        </div>
      </div>
    </Layout>
  )
}

BlogLayout.propTypes = {
  title: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  pageContext: PropTypes.shape({
    currentPage: PropTypes.number.isRequired,
    numPages: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
  }).isRequired,
}

export default BlogLayout
