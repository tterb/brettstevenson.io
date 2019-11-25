import React from 'react'
import PropTypes from 'prop-types'
import tw from 'tailwind.macro'
import styled from 'styled-components'

const Wrapper = styled.div`
  ${tw`font-default leading-normal tracking-tight xs:w-4/5 md:w-3/4 mb-11 mx-auto p-0 pt-10 md:px-9`}
  max-width: 900px;
  @media (max-width: 500px) {
    ${tw`mb-8`}
    &::after {
      ${tw`pin-l`}
    }
  }
  &::after {
    ${tw`block relative w-1/4 pin-l`}
    content: '';
    background: linear-gradient(to top left, SlateBlue 30%, DeepSkyBlue 75%);
    height: 6px;
    top: -8px;
    @media (min-width: 900px) {
      height: 7px;
    }
    @media (min-width: 1100px) {
      height: 8px;
    }
  }
`

const PostTitle = styled.h1`
  ${tw`relative font-bold tracking-tight leading-tight m-0 mx-auto xs:w-9/10 xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl`}
  color: rgba(0,0,0,0.75);
  margin-left: -1vw;
  @media (max-width: 600px) {
    font-size: 3.25rem;
  }
`

const PostDate = styled.p`
  ${tw`block relative text-right leading-normal pin-t my-1 mx-0 xs:text-lg xs:mt-3 md:text-xl`}
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
