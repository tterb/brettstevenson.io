import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
// Components
import Headers from 'components/Post/Headers'
import Paragraph from 'components/Post/Paragraph'
import Link from 'components/Post/Link'
import { OrderedList, UnorderedList } from 'components/Post/List'
import HorizontalRule from 'components/Post/HorizontalRule'
import Blockquote from 'components/Post/Blockquote'
import CodePre from 'components/Post/Pre'
import CodeBlock from 'components/Post/Code'


const MDXBody = styled.div`
  .gatsby-resp-image-wrapper {
    margin: 1rem auto;
  }
`

const components = {
  ...Headers,
  p: Paragraph,
  a: Link,
  ol: OrderedList,
  ul: UnorderedList,
  hr: HorizontalRule,
  blockquote: Blockquote,
  pre: CodePre,
  code: CodeBlock,
}

function MDX({ content, children, ...props }) {
  return (
    <MDXProvider components={components}>
      <MDXBody className='relative flex flex-col justify-center max-w-160 md:max-w-200 mx-auto z-10'>
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
  ]),
}

export default MDX
