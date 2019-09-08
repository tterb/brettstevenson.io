import React from 'react'
import tw from 'tailwind.macro'
import styled from 'styled-components'
import kebabCase from 'lodash/kebabCase'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
// Components
import { OrderedList, UnorderedList } from './List'
import CodePre from './Pre'
import CodeBlock from './Code'

const components = {
  ol: OrderedList,
  ul: UnorderedList,
  pre: CodePre,
  code: CodeBlock,
}

function MDX({ content, children, ...props }) {
  require('../../styles/post.scss')
  return (
    <MDXProvider components={components}>
      <MDXBody>
        <MDXRenderer {...props}>
          {content}
        </MDXRenderer>
        {children}
      </MDXBody>
    </MDXProvider>
  )
}

export default MDX

    // max-width: 744px;

const PrismCSS = `
  .prism-code {
    background: hsl(275, 5%, 19%);
    border-radius: 5px;
    margin: 0.5rem auto;
    border-radius: 5px;
    overflow: scroll;
    .token-line {
      border-left: 3px solid transparent;
      & > span {
      }
    }
    .number-line {
      display: inline-block;
      color: hsl(275, 5%, 70%);
      width: 32px;
      user-select: none;
      opacity: 0.3;
    }
    .token-line.highlight-line {
      background: hsl(275, 5%, 25%);
      border-left: 3px solid hsl(275, 5%, 50%);
      margin: 0 -2rem;
      padding: 0 2rem;
    }
    .operator + .maybe-class-name {
      color: #ffcf74 !important;
    }
  }
`

/**
 * MDXBody
 * Here we're applying "global" selectors to make sure we maintain an article
 * body type feel. We're also applying all the Prism selecotors and styles within
 * the MDXBody.
 */
const MDXBody = styled.div`
  ${tw`relative flex flex-col justify-center z-10`}
  ${PrismCSS}
`
