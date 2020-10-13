import React from 'react'
import PropTypes from 'prop-types'
import tw from 'tailwind.macro'
import styled from 'styled-components'

const Wrapper = styled.div`
  ${tw`font-default leading-normal tracking-tight max-w-md md:max-w-lg mx-auto my-0 px-0 pt-14 pb-8 md:px-9`}
  @media (max-width: 500px) {
    ${tw`pb-8`}
    &::after {
      ${tw`pin-l`}
    }
  }
  &::after {
    ${tw`block relative w-1/4 pin-l`}
    content: '';
    background: linear-gradient(to top left, SlateBlue 30%, DeepSkyBlue 75%);
    height: 6px;
    top: -0.75rem;
    @media (min-width: 900px) {
      height: 7px;
    }
    @media (min-width: 1100px) {
      height: 8px;
    }
  }
`

const PostTitle = styled.h1`
  ${tw`relative font-bold tracking-tight leading-tighter m-0 mr-auto text-4xl sm:text-5xl md:text-4xl lg:text-5xl`}
  color: rgba(0,0,0,0.75);
  width: 85%;
  @media (max-width: 600px) {
    font-size: 3.25rem;
  }
`

const PostDate = styled.p`
  ${tw`block relative text-right leading-normal pin-t my-1 mx-0 text-lg mt-4 md:text-xl`}
  color: rgba(0,0,0,0.75);
  right: 4px;
  strong {
    ${tw`py-0 px-1`}
  }
`

const PostHeader = ({ post }) => (
  <Wrapper>
    <PostTitle>{post.title}</PostTitle>
    <PostDate>
      {post.date.split(' ').map((item, i) => (
        (i !== 1) ? <strong key={i}>{item}</strong> : item
      ))}
    </PostDate>
  </Wrapper>
)

PostHeader.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
}

export default PostHeader
