import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import _ from 'lodash'
import tw from 'tailwind.macro'
import styled from 'styled-components'
// Components
import PostLayout from '../components/PostLayout'
import PageLink from '../components/PageLink'
// Fonts
import 'typeface-source-code-pro'
// Styles
import postStyles from '../styles/post.scss'
import syntaxStyles from '../styles/syntax.scss'


const PostTitle = styled.h1`
  ${tw`relative w-4/5 font-extrabold leading-tight m-0 mx-auto`}
  color: rgba(0,0,0,0.75);
  font-size: 6.35vw;
  margin-left: -3vw;
`

const PostDate = styled.p`
  ${tw`block relative text-base text-right leading-normal my-1 mx-0`}
  color: rgba(0,0,0,0.75);
  right: 8px;
`

const Separator = styled.hr`
  ${tw`w-4/5 border-none my-4 mt-8`}
  border-bottom: 2px solid rgba(0,0,0,0.095);
`

const TagList = styled.ul`
  ${tw`w-4/5 list-reset my-4 mx-auto`}
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

class PostTemplate extends React.Component {
  render() {
    const post = _.get(this.props, 'data.contentfulBlogPost')
    return (
      <>
      <PostLayout 
        post={post}
        location={this.props.location} 
        context={this.props.pageContext}>
        <div className='wrapper' style={postStyles}>
          <div className='post-header'>
            <PostTitle>{post.title}</PostTitle>
            <PostDate>{post.publishDate}</PostDate>
          </div>
          <div className='post-body' dangerouslySetInnerHTML={{ __html: post.body.childMarkdownRemark.html }} />
        </div>
      </PostLayout>
      </>
    )
  }
}

// <TagList className='tags-list'>
//   {post.tags.map(tag => (
//     <li><PageLink to={`../tags/${_.kebabCase(tag.fieldValue)}/`}>{ tag }</PageLink></li>
//   ))}
// </TagList>

export default PostTemplate

export const postQuery = graphql`
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
