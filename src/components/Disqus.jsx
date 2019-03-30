import React from 'react'
import tw from 'tailwind.macro'
import styled from 'styled-components'
import { DiscussionEmbed } from "disqus-react";

const Wrapper = styled.div`
  ${tw`w-4/5 mx-auto`}
`

const Disqus = ({siteTitle, postUrl, postId, postTitle, disqusShortname}) => {
  const disqusConfig = {
    url: {postUrl},
    identifier: {postId},
    title: {postTitle},
  };
  return (
    <Wrapper>
    <span>{postUrl}</span>
      <DiscussionEmbed 
        shortname={disqusShortname}
        config={disqusConfig} 
      />
    </Wrapper>
  )
}

export default Disqus
