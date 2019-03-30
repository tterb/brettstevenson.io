import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import _ from 'lodash'
import tw from 'tailwind.macro'
import { colors } from '../../tailwind'
import styled from 'styled-components'
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


const Separator = styled.hr`
  ${tw`w-4/5 border-none my-4 mt-8`};
  border-bottom: 2px solid rgba(0,0,0,0.095);
`

const TagList = styled.ul`
  ${tw`w-4/5 list-reset my-4 mx-auto`};
  li {
    display: inline-block;
    background: #f0f0f0;
    border: 2px solid #eee;
    border-radius: 6px;
    box-shadow: 0 1px 2px rgba(0,0,0,0.25);
    transition: all 300ms ease-in-out;
    margin: 0 0.5rem 0.5rem 0;
    padding: 4px 8px;
    a {
      color: rgba(0,0,0,0.5);
      text-decoration: none;
    }
    &:hover {
      background: #eaeaea;
      box-shadow: 0 1px 1.5px rgba(0,0,0,0.45);
    }
  }
`


class BlogPostTemplate extends React.Component {
  render() {
    const post = _.get(this.props, 'data.contentfulBlogPost')
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
        <Separator />
        <PostAuthor author={post.author} />
        <div className='prev-next'>
          { prev && <span className='prev'>
            <PageLink direction='right' to={`blog/${prev.node.slug}`} rel='prev'>
              <FontAwesomeIcon icon={faArrowAltCircleLeft} />
              <span className='prev-title'>{prev.node.title}</span>
            </PageLink></span> }
          { next && <span className='next'>
            <PageLink to={`blog/${next.node.slug}`} rel='next'>
              <span className='next-title'>{next.node.title}</span>
              <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </PageLink></span> }
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
      slug
      id
      publishDate(formatString: "DD MMM YYYY")
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
