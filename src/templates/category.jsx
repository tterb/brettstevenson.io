import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
// Components
import BlogLayout from 'components/BlogLayout'


const Category = ({ pageContext, data }) => (
  <BlogLayout
    title={pageContext.category}
    posts={data.posts.edges}
    categories={data.categories.group}
    pageContext={pageContext}
  />
)
Category.propTypes = {
  pageContext: PropTypes.shape({
    currentPage: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired,
    numPages: PropTypes.number.isRequired,
    skip: PropTypes.number.isRequired,
    tag: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    posts: PropTypes.shape({
      nodes: PropTypes.arrayOf(PropTypes.shape({
        fields: PropTypes.shape({
          slug: PropTypes.string.isRequired,
        }).isRequired,
        frontmatter: PropTypes.shape({
          title: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
          category: PropTypes.string.isRequired,
          image: PropTypes.object.isRequired,
        }).isRequired,
      })).isRequired,
      categories: PropTypes.shape({
        group: PropTypes.arrayOf(PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired).isRequired,
      }).isRequired,
    }).isRequired,
    site: PropTypes.object.isRequired,
  }).isRequired,
}

export default Category

export const categoryQuery = graphql`
  query ($skip: Int!, $limit: Int!, $category: String!) {
    posts: allMdx(
      filter: {fields: {sourceInstanceName: {eq: "posts"}}, frontmatter: {category: {eq: $category}}}
      sort: {fields: frontmatter___date, order: DESC}
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
            date(formatString: "DD MMM, YYYY")
            category
            image {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
    categories: allMdx {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`
