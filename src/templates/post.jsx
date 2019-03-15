import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Image from 'gatsby-image'
import PostLayout from '../components/PostLayout'
import PostBody from '../components/PostBody'
import heroStyles from '../styles/hero.scss'
import postStyles from '../styles/post.scss'
import syntaxStyles from '../styles/syntax.scss'

class BlogPostTemplate extends React.Component {
  render() {

    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <PostLayout location={this.props.location} >
      </PostLayout>
    )
  }
}

export default BlogPostTemplate

