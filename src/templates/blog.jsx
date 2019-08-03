import React from 'react'
import { graphql } from 'gatsby'
// Componentes
import BlogLayout from '../components/BlogLayout'

const Blog = ({ pageContext, data }) => {
  const posts = data.allContentfulBlogPost.edges
  return (
    <>
      <BlogLayout
        title='Blog'
        posts={posts}
        pageContext={pageContext}
      />
    </>
  )
}

export default Blog

export const pageQuery = graphql`
  query BlogQuery($skip: Int!, $limit: Int!) {
    allContentfulBlogPost(
      sort: { fields: [publishDate], order: DESC }
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
