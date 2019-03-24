import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import get from 'lodash/get'
import { colors } from '../../tailwind'
// Components
import PostLayout from '../components/PostLayout'
import PostBody from '../components/PostBody'
import PostAuthor from '../components/PostAuthor'
import PageLink from '../components/PageLink'
// Fonts
import 'typeface-source-code-pro'
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
// Styles
import heroStyles from '../styles/hero.scss'
import postStyles from '../styles/post.scss'
import syntaxStyles from '../styles/syntax.scss'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const { prev, next } = this.props.pageContext;
    return (
      <PostLayout location={this.props.location} post={post}>
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
        <PostAuthor author={post.author} />
        <div className='prev-next'>
          {
            prev && <span className='prev'>
            <PageLink direction='right' to={`blog/${prev.node.slug}`} rel='prev'>
              <FontAwesomeIcon icon={faArrowAltCircleLeft} />
              <span className='prev-title'>{prev.node.title}</span>
            </PageLink></span>
          }
          {
            next && <span className='next'>
            <PageLink to={`blog/${next.node.slug}`} rel='next'>
              <span className='next-title'>{next.node.title}</span>
              <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </PageLink></span>
          }
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
          ...GatsbyContentfulFluid_withWebp
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
      author {
        name
        shortBio {
          childMarkdownRemark {
            html
          }
        }
        image {
          fixed(width: 250, height: 250) {
            ...GatsbyContentfulFixed_withWebp
          }
        }
        email
        github
        dribbble
        twitter
        linkedIn
      }
      tags
    }
  }
`
