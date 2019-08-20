import React from 'react'
import Image from 'gatsby-image'
import tw from 'tailwind.macro'
import styled from 'styled-components'

const HeroImage = styled(Image)`
  width: 100.5%;
  height: 60vw;
  max-height: 45vh;
  top: -1px;
  left: -1px;
  > div {
    padding-bottom: 28% !important;
  }
`
export default ({ post }) => (
  <HeroImage alt={post.title} fluid={post.image.fluid} />
)
