import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import _ from 'lodash'
import tw from 'tailwind.macro'
import styled from 'styled-components'
// Components
import PostLayout from '../components/PostLayout'
import PageLink from '../components/PageLink'
// Styles
import postStyles from '../styles/post.scss'
import syntaxStyles from '../styles/syntax.scss'
// Fonts
import 'typeface-source-code-pro'


const PostTitle = styled.h1`
  ${tw`relative w-4/5 font-bold leading-tight m-0 mx-auto xs:w-9/10`}
  color: rgba(0,0,0,0.75);
  font-size: 6.75vw;
  margin-left: -1vw;
  @media (max-width: 500px) {
    font-size: 2.35rem;
  }
`

const PostDate = styled.p`
  ${tw`block relative text-right leading-normal my-1 mx-0 xs:text-lg md:text-xl`}
  color: rgba(0,0,0,0.75);
  top: 5px;
  right: 5px;
  strong {
    ${tw`py-0 px-1`}
  }
`

const Separator = styled.hr`
  ${tw`w-4/5 border-none my-4 mt-8`}
  border-bottom: 2px solid rgba(0,0,0,0.095);
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
            <PostDate>
              { post.publishDate.split(' ').map((item, i) => {
                  return (i != 1) ? <strong>{item}</strong>:item
              })}
            </PostDate>
          </div>
          <div className='post-body' dangerouslySetInnerHTML={{ __html: post.body.childMarkdownRemark.html }} />
        </div>
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
