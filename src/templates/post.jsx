import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Image from 'gatsby-image'
import PostLayout from '../components/PostLayout'
import PostBody from '../components/PostBody'
import heroStyles from '../styles/hero.scss'
import postStyles from '../styles/post.scss'
import syntaxStyles from '../styles/syntax.scss'

class BlogPostTemplate extends React.Component {
  render() {

    const post = get(this.props, 'data.contentfulBlogPost')
    return (
      <PostLayout location={this.props.location} post={post}>
        <div style={{ background: '#fff' }}>
          <div className={heroStyles.hero}>
            <Image className={heroStyles.heroImage} alt={post.title} fluid={post.heroImage.fluid} />
          </div>
          <div className='wrapper' style={postStyles}>
            <div className='post-header'>
              <h1 className='post-title'>{post.title}</h1>
              <p className='post-date' style={{ display: 'block' }}>
                {post.publishDate}
              </p>
            </div>
            <PostBody body={post.body} style={syntaxStyles} />
          </div>
        </div>
      </PostLayout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "DD MMM YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
