import React from 'react'
import { graphql } from 'gatsby'
// Components
import BlogLayout from '../components/BlogLayout'


const Tags = ({ pageContext, data }) => {
  const posts = data.posts.edges
  return (
    <BlogLayout
      title={pageContext.tag}
      posts={posts}
      pageContext={pageContext}
    />
  )
}

export default Tags

export const tagQuery = graphql`
  query($skip: Int!, $limit: Int!, $tag: String!) {
    posts: allMdx(
      filter: {fields: {sourceInstanceName: {eq: "posts"}},
      frontmatter: {tags: {in: [$tag]}}},
      sort: {fields: frontmatter___date, order: DESC}
      limit: $limit,
      skip: $skip) {
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
