import React from 'react'
import PropTypes from 'prop-types'
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

Blog.propTypes = {
  pageContext: PropTypes.shape({
    currentPage: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired,
    numPages: PropTypes.number.isRequired,
    skip: PropTypes.number.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    posts: PropTypes.array.isRequired,
    site: PropTypes.shape.isRequired,
  }).isRequired,
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
            date(formatString: "DD MMMM YYYY")
            category
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 420, quality: 72) {
                  ...GatsbyImageSharpFluid_withWebp
                  presentationWidth
                }
              }
            }
          }
        }
      }
    }
  }
`
