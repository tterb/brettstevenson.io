import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
// Components
import PostLayout from '../components/PostLayout'
import PostBody from '../components/PostBody'
import PostAuthor from '../components/PostAuthor'
// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faEnvelope, faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter, faDribbble, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
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
            <AniLink cover bg='#23262b' duration={1} direction='right' to={`blog/${prev.node.slug}`} rel='prev'>
              <FontAwesomeIcon icon={faArrowAltCircleLeft} />
              <span className='prev-title'>{prev.node.title}</span>
            </AniLink></span>
          }
          {
            next && <span className='next'>
            <AniLink cover bg='#23262b' duration={1} direction='left' to={`blog/${next.node.slug}`} rel='next'>
              <span className='next-title'>{next.node.title}</span>
              <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </AniLink></span>
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
          ...GatsbyContentfulFluid
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
            ...GatsbyContentfulFixed
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
