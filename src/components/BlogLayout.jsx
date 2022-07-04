import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { animated, useTransition } from '@react-spring/web'
import kebabCase from 'lodash/kebabCase'
import upperFirst from 'lodash/upperFirst'
// Components
import Layout from 'components/Layout'
import Header from 'components/Header'
import BlogCard from 'components/BlogCard'
import Search from 'components/Search'
import CategoryMenu from 'components/CategoryMenu'
import useInfiniteScroll from 'hooks/useInfiniteScroll'

const POST_PAGINATION_COUNT = 6;

const BlogLayout = ({ title, posts, categories, windowSize }) => {
  // config({ ssrFadeout: true })
  const loadRef = useRef();
  const currentPosts = useInfiniteScroll(posts, POST_PAGINATION_COUNT, loadRef);

  // Build a transition and catch its ref
  const transitions = useTransition(currentPosts, {
    from: { position: 'relative', top: '20rem', opacity: 0 },
    enter: { top: '0', opacity: 1 },
    trail: 400 / currentPosts.length,
    unique: true,
    reset: false,
  });

  return (
    <Layout className='bg-gray-900 h-auto' windowSize={windowSize}>
      <Header className='bg-base-200' full={true}>
        <div className='absolute h-full -left-14 sm:-left-8 md:-top-20 pt-0 px-0'>
          <h2 className='font-title font-semibold text-white text-opacity-5 text-60vw sm:text-50vw md:text-40vw leading-none w-full mt-0 mb-6 ml-0 cursor-default z-min' style={{ letterSpacing: '-0.35rem' }}>Blog</h2>
        </div>
        <div className='w-full max-w-200 mx-auto'>
          <h1 className='relative inline-block text-6xl font-title font-bold text-white text-opacity-90 leading-none tracking-normal m-0 mt-12 pb-3 transition-all duration-200 ease-in-out md:text-7xl md:mt-6'>
            {upperFirst(title)}<span className='bg-gradient-to-br from-blue-500 to-indigo-600 bg-clip-text '>.</span>
          </h1>
          <h2 className='font-sans text-gray-600 text-base text-left font-medium leading-tight w-full mt-1 mb-3 ml-0 mr-auto md:text-lg md:w-9/10 xl:w-4/5'>Read my latest articles and posts on software development, design, technology and more.</h2>
        </div>
      </Header>
      <div className='w-full h-full -mt-9 mb-0 mx-auto p-0 z-10' role='main'>
        <div className='w-5/6 sm:w-9/10 md:w-4/5 max-w-240 m-auto mt-8 pt-8 pb-20 z-9999 sm:mt-9 sm:mb-1 md:pt-12'>
          <div className='hidden md:flex relative justify-between items-end w-32 h-12 ml-0 z-9999 md:ml-auto mr-auto md:mr-1'>
            <Search />
            <CategoryMenu categories={categories} />
          </div>
          <div className='inline w-full mt-0 mx-auto pt-8 z-9999'>
            {transitions((styles, item) => (
              <animated.div
                key={item.id}
                style={styles}
              >
                <BlogCard
                  post={item}
                />
              </animated.div>
            ))}
          </div>
        </div>
      </div>
      <span ref={loadRef} />
    </Layout>
  )
}
BlogLayout.propTypes = {
  title: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  windowSize: PropTypes.object.isRequired,
}

export default BlogLayout
