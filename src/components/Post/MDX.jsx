import React from 'react'
import PropTypes from 'prop-types'
import tw from 'tailwind.macro'
import styled from 'styled-components'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
// Components
import Headers from './Headers'
import { OrderedList, UnorderedList } from './List'
import CodePre from './Pre'
import CodeBlock from './Code'

const PrismCSS = `
  .prism-code {
    background: hsl(275, 5%, 19%);
    width: 95%;
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
      position: relative;
      color: hsl(275, 5%, 80%);
      text-align: right;
      width: 25px;
      left: -15px;
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

const MDXBody = styled.div`
  ${tw`relative flex flex-col justify-center max-w-md md:max-w-lg mx-auto z-10`}
  ${PrismCSS}
`

const components = {
  ...Headers,
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
MDX.propTypes = {
  content: PropTypes.node.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default MDX
