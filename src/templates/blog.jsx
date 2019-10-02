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
      algolia={data.site.siteMetadata.algolia}
    />
  )
}

export default Blog

export const blogQuery = graphql`
  query BlogQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        algolia {
          appId
          searchOnlyApiKey
          indexName
        }
      }
    }
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
                fluid(maxWidth: 480, quality: 72) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
