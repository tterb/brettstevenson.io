import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const Wrapper = styled.header`
  @media (max-width: 500px) {
    &::after {
      left: 0;
    }
  }
  &::after {
    content: '';
    display: block;
    position:relative;
    background: linear-gradient(to top left, SlateBlue 30%, DeepSkyBlue 75%);
    width: 25%;
    height: 6px;
    top: -1.25rem;
    left: 0;
    @media (min-width: 900px) {
      height: 7px;
    }
    @media (min-width: 1100px) {
      height: 8px;
    }
  }
`

const PostTitle = styled.h1`
  width: 85%;
  @media (max-width: 600px) {
    font-size: 3.5rem;
  }
`

const PostHeader = ({ post }) => (
  <Wrapper className='font-default leading-normal tracking-tight w-9/10 max-w-300 mx-auto my-0 px-0 pt-6 sm:pt-14 pb-6 md:w-4/5 md:px-9 lg:w-3/4' role='banner'>
    <PostTitle className='relative font-bold text-black text-opacity-75 tracking-tight leading-tighter m-0 mr-auto text-4xl sm:text-5xl'>
      {post.title}
    </PostTitle>
    <span className='block relative text-base md:text-lg text-black text-opacity-75 text-right leading-normal top-0 right-1 my-1 mx-0 mt-4'>
      {post.date.split(' ').map((item, i) => (
        (i !== 1) ? <strong key={i} className='py-0 px-1'>{item}</strong> : item
      ))}
    </span>
  </Wrapper>
)
PostHeader.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
}

export default PostHeader
