import React from 'react'
import tw from 'tailwind.macro'
import { colors } from '../../tailwind'
import styled from 'styled-components'
import PageLink from './PageLink'

const InlinePost = ({node}) => (
  <li key={node.slug}>
    <PageLink to={`blog/${node.slug}`}>
      <span className='date'>{node.date}</span>
      <span className='title'>{node.title}</span>
      <span className='desc'>{node.description}</span>
    </PageLink>
  </li>
)

export default InlinePost
