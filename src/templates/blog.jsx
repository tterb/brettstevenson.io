import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import BlogLayout from '../components/BlogLayout'

class Blog extends React.Component {
  render() {
    const siteTitle = _.get(this, 'props.data.site.siteMetadata.title')
    const posts = _.get(this, 'props.data.allContentfulBlogPost.edges')
    const { currentPage, numPages, count } = this.props.pageContext
    return (
      <>
        <BlogLayout
          title='Blog'
          currentPage={currentPage} 
          numPages={numPages}
          count={count} 
          posts={posts}
        />
      </>
    )
  }
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
            fixed(resizingBehavior: SCALE) {
              ...GatsbyContentfulFixed_withWebp
            }
          }
          previewImage {
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