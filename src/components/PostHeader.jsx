import React from 'react'
import Image from 'gatsby-image'
import tw from 'tailwind.macro'
import styled from 'styled-components'

const Wrapper = styled.div`
  ${tw`font-default leading-normal xs:w-4/5 md:w-3/4 mb-14 mx-auto p-0 pt-10 md:px-9`}
  max-width: 900px;
  &::after {
    ${tw`block relative w-1/4`}
    background: linear-gradient(to top left, SlateBlue 30%, DeepSkyBlue 75%);
    content: "";
    height: 6px;
    top: -10px;
    left: -0.5rem;
    @media (max-width: 450px) {
      left: 0;
    }
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
  ${tw`block relative text-right leading-normal my-1 mx-0 xs:text-lg xs:mt-3 md:text-xl`}
  color: rgba(0,0,0,0.75);
  top: 5px;
  right: 5px;
  strong {
    ${tw`py-0 px-1`}
  }
`

export default ({ post }) => (
  <>
    <Wrapper className='post-header'>
      <PostTitle>{post.title}</PostTitle>
      <PostDate>
        { post.date.split(' ').map((item, i) => {
            return (i != 1) ? <strong key={i}>{item}</strong>:item
        })}
      </PostDate>
    </Wrapper>
  </>
)
