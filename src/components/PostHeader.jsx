import React from 'react'
import Image from 'gatsby-image'
import tw from 'tailwind.macro'
import styled from 'styled-components'

const Wrapper = styled.div`
  ${tw`font-default leading-normal xs:w-9/10 md:w-4/5 lg:w-3/4 my-10 mb-14 mx-auto py-0 px-9`}
  max-width: 900px;
  &::after {
    ${tw`block relative w-1/4`}
    background: linear-gradient(to top left, SlateBlue 30%, DeepSkyBlue 75%);
    content: "";
    height: 6px;
    top: -10px;
    left: -0.5rem;
  }
`

const PostTitle = styled.h1`
  ${tw`relative font-bold leading-tight m-0 mx-auto xs:w-9/10 xs:text-4xl sm:text-5xl md:text-5xl lg:text-5xl`}
  color: rgba(0,0,0,0.75);
  /* font-size: 6.75vw; */
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

const HeroImage = styled(Image)`
  width: 100.5%;
  height: 60vw;
  max-height: 45vh;
  top: -1px;
  left: -1px;
`

export default ({ post }) => (
  <>
    <HeroImage alt={post.title} fluid={post.heroImage.fluid} />
    <Wrapper className='post-header'>
      <PostTitle>{post.title}</PostTitle>
      <PostDate>
        { post.publishDate.split(' ').map((item, i) => {
            return (i != 1) ? <strong key={i}>{item}</strong>:item
        })}
      </PostDate>
    </Wrapper>
  </>
)
