import React from 'react'
import { graphql } from 'gatsby'
import assignIn from 'lodash/assignIn'
import MDXRenderer from '../components/Post/MDX'
// Config
import config from '../../config/website'
// Components
import PostLayout from '../components/PostLayout'
import PostMeta from '../components/PostMeta'
// Hooks
import useWindowDimensions from '../hooks/WindowDimensions'


const PostTemplate = ({ data, pageContext, location }) => {
  require('typeface-source-code-pro')
  require('../styles/post.scss')
  let post = data.post
  assignIn(post, post.frontmatter)
  post.author = config.author
  post.author.image = data.avatar.childImageSharp
  const thumbnail = (post.thumbnail ? post.thumbnail.fluid : post.image.fluid)
  
  let mobile = false
  if(typeof window !== 'undefined') {
    const { height, width } = useWindowDimensions()
    if (width <= 500) {
      mobile = true
    } else {
      mobile = false
    }
    require('smooth-scroll')('a[href*="#"]', {
      speed: 100,
      easing: 'easeInOutCubic',
      updateURL: false,
    })
  }
  return (
    <>
      <PostMeta
        title={`${post.title} | ${config.siteTitle}`}
        description={post.description}
        thumbnail={thumbnail}
        url={`/blog${post.fields.slug}`}
      />
      <PostLayout
        post={post}
        mobile={mobile}
        location={location}
        context={pageContext}>
          <div className='post-body'>
            <MDXRenderer content={post.body}></MDXRenderer>
          </div>
      </PostLayout>
    </>
  )
}

export default PostTemplate

export const postQuery = graphql`
  query($slug: String!) {
    post: mdx(fields: { slug: { eq: $slug } }) {
      body
      excerpt
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
    avatar: file(relativePath: { eq: "avatar.png" }) {
      childImageSharp {
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`
