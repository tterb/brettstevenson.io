import React from 'react'
import tw from 'tailwind.macro'
import { colors } from '../../tailwind'
import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const InlinePost = ({node}) => (
  <li key={node.slug}>
    <AniLink cover bg={colors['blue-black']} duration={1} to={`blog/${node.slug}`}>
      <span className='date'>{node.publishDate}</span>
      <span className='title'>{node.title}</span>
      <span className='desc'>{node.description.childMarkdownRemark.excerpt}</span>
    </AniLink>
  </li>
)

export default InlinePost