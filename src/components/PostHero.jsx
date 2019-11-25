import React from 'react'
import PropTypes from 'prop-types'
import Image from 'gatsby-image'
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
const PostHero = ({ post }) => (
  <HeroImage alt={post.title} fluid={post.image.fluid} />
)

PostHero.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.shape.isRequired,
  }).isRequired,
}

export default PostHero
