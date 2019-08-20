import React from 'react'
import { graphql } from 'gatsby'
// Componentes
import BlogLayout from '../components/BlogLayout'

const Blog = ({ pageContext, data }) => {
  const posts = data.posts.edges
  return (
    <BlogLayout
      title='Blog'
      posts={posts}
      pageContext={pageContext}
    />
  )
}

export default Blog

export const blogQuery = graphql`
  query BlogQuery($skip: Int!, $limit: Int!) {
    posts: allMdx(
      filter: { fields: { sourceInstanceName: { eq: "posts" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            date(formatString: "DD MMMM, YYYY")
            category
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 1920, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
                fixed(width: 600) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
