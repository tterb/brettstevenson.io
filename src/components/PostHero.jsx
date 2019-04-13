import React from 'react'
import Image from 'gatsby-image'

export default ({ post }) => (
  <div>
    <Image className='post-heroImage' alt={post.title} fluid={post.heroImage.fluid} />
  </div>
)
