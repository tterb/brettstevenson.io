import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import assign from 'lodash/assign'
// Config
import config from 'config/website'
// Components
import PostLayout from 'components/PostLayout'
import PostMeta from 'components/PostMeta'
import MDXRenderer from 'components/Post/MDX'
// Hooks
import { isMobile } from 'hooks/WindowDimensions'
// Styles
import 'styles/post.css'
import 'styles/syntax.css'



const PostTemplate = ({ data, pageContext, location }) => {
  // require('typeface-source-code-pro')
  const mobile = isMobile()
  const post = data.post
  assign(post, post.frontmatter)
  post.author = config.author
  post.author.image = data.avatar.childImageSharp.gatsbyImageData

  return (
    <>
      <PostMeta
        title={`${post.title} | ${config.siteTitle}`}
        description={post.description}
        pathname={location.pathname}
        thumbnail={post.image}
        url={`/blog${post.fields.slug}`}
      />
      <PostLayout
        post={post}
        mobile={mobile}
        location={location}
        context={pageContext}
      >
        <MDXRenderer content={post.body} />
      </PostLayout>
    </>
  )
}
PostTemplate.propTypes = {
  data: PropTypes.shape({
    avatar: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        gatsbyImageData: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired,
    post: PropTypes.shape({
      id: PropTypes.string.isRequired,
      body: PropTypes.node.isRequired,
      fields: PropTypes.shape({
        slug: PropTypes.string.isRequired,
      }).isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        tags: PropTypes.array.isRequired,
        image: PropTypes.shape({
          childImageSharp: PropTypes.shape({
            gatsbyImageData: PropTypes.object.isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  pageContext: PropTypes.shape({
    next: PropTypes.object,
    prev: PropTypes.object,
    slug: PropTypes.string.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default PostTemplate

export const postQuery = graphql`
  query ($slug: String!) {
    post: mdx(fields: {slug: {eq: $slug}}) {
      id
      body
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
        description
        category
        tags
        image {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
            )
          }
        }
      }
    }
    avatar: file(relativePath: {eq: "me.png"}) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED,
          width: 240
        )
      }
    }
  }
`
