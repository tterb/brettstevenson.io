import React from 'react'
import { graphql } from 'gatsby'
import _ from 'lodash'
import tw from 'tailwind.macro'
import styled from 'styled-components'
import BlogLayout from '../components/BlogLayout'


class Tags extends React.Component {
  render() {
    const siteTitle = _.get(this, 'props.data.site.siteMetadata.title')
    const posts = _.get(this, 'props.data.allContentfulBlogPost.edges')
    const { tag, currentPage, numPages, count } = this.props.pageContext
    return (
      <>
        <BlogLayout 
          title={tag}
          currentPage={currentPage} 
          numPages={numPages}
          count={count} 
          posts={posts}
        />
      </>
    )
  }
}

export default Tags

export const tagQuery = graphql`
  query TagQuery($skip: Int!, $limit: Int!, $tag: String!) {
    allContentfulBlogPost(
      sort: { fields: [publishDate], order: DESC }
      filter: { tags: { in: [$tag] } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "DD MMMM, YYYY")
          category
          tags
          heroImage {
            fixed(resizingBehavior: SCALE) {
              ...GatsbyContentfulFixed_withWebp
            }
          }
          description {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 120)
            }
          }
        }
      }
    }
  }
`