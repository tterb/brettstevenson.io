import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import tw from 'tailwind.macro'
import styled from 'styled-components'
import { DiscussionEmbed } from "disqus-react";

const Wrapper = styled.div`
  ${tw`w-4/5 mx-auto mb-2`}
`

const Disqus = ({ postUrl, postId, postTitle }) => {
  const disqusConfig = {
    url: {postUrl},
    identifier: {postId},
    title: {postTitle},
  }
  return (
    <StaticQuery query={disqusQuery} render={data => (
      <Wrapper>
        <DiscussionEmbed
          shortname={data.site.siteMetadata.disqusShortname}
          config={disqusConfig}
        />
      </Wrapper>
    )} />
  )
}

export default Disqus

const disqusQuery = graphql`
  query DisqusQuery {
    site {
      siteMetadata {
        siteUrl
        disqusShortname
      }
    }
  }
`