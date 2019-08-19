import React from 'react'
import { graphql } from 'gatsby'
// Components
import BlogLayout from '../components/BlogLayout'


const Tags = ({ pageContext, data }) => {
  const posts = data.allContentfulBlogPost.edges
  return (
    <BlogLayout
      title={pageContext.tag}
      posts={posts}
      pageContext={pageContext}
    />
  )
}

export default Tags

export const tagQuery2 = graphql`
  query TagQuery2($skip: Int!, $limit: Int!, $tag: String!) {
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
            fluid(maxWidth: 900) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          previewImage {
            fluid(maxWidth: 900) {
              ...GatsbyContentfulFluid_withWebp
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
