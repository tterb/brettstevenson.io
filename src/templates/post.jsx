import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import _ from 'lodash'
import tw from 'tailwind.macro'
import styled from 'styled-components'
// Components
import PageLink from '../components/PageLink'
import PostLayout from '../components/PostLayout'
import PostMeta from '../components/PostMeta'
// Styles
import postStyles from '../styles/post.scss'
// Fonts
import 'typeface-source-code-pro'


class PostTemplate extends React.Component {
  render() {
    const config = require(`../../config/website`)
    const post = _.get(this.props, 'data.contentfulBlogPost')
    return (
      <>
        <PostMeta
          title={`${post.title} | ${config.siteTitle}`}
          description={post.description}
          thumbnail={post.heroImage.fluid}
          url={`/blog/${post.slug}`}
        />
        <PostLayout
          post={post}
          style={postStyles}
          location={this.props.location} 
          context={this.props.pageContext}>
            <div className='post-body' dangerouslySetInnerHTML={{ __html: post.body.childMarkdownRemark.html }} />
        </PostLayout>
      </>
    )
  }
}

export default PostTemplate

export const postQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      id
      publishDate(formatString: "DD MMMM YYYY")
      tags
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
    }
  }
`
