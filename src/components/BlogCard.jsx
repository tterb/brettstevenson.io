import React from 'react'
import Image from 'gatsby-image'
import _ from 'lodash'
import tw from 'tailwind.macro'
import styled from 'styled-components'
import PageLink from './PageLink'
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'

const Wrapper = styled.div`
  ${tw`relative inline-block h-full pin-t pin-l py-3 px-0 xs:pl-7 md:pl-10 cursor-pointer overflow-hidden z-5`}
  background: rgba(255,255,255,0.8);
  width: 65%;
  border-top-left-radius: 9px;
  border-bottom-left-radius: 9px;
  @media (max-width: 420px) {
    width: 70%;
  }
`

const Card = styled.div`
  ${tw`block relative bg-center bg-no-repeat w-full float-left cursor-pointer`}
  background-size: cover;
  height: 53vh;
  border-radius: 9px;
  box-shadow: 2px 5px 30px 15px rgba(0,0,0,0.05);
  transition: all 300ms ease-in-out;
  margin: 7vh auto;
  &:first-child {
    margin-top: 2vh;
  }
  &:hover {
    box-shadow: 2px 10px 20px -5px rgba(0,0,0,0.2);
    transform: translate3D(0,-0.35rem,0);
  }
`

const Angle = styled.div`
  ${tw`relative inline-block w-1/5 h-full pin-t pin-r overflow-hidden`}
  background: linear-gradient(to top right, rgba(255,255,255,0.8) 50%, transparent 0);
`

const BgImage = styled(Image)`
  ${tw`absolute min-w-full pin-t pin-l`}
  position: absolute !important;
  height: 53vh;
  z-index: -1;
  & > img {
    object-fit: cover !important; 
    object-position: 0% 0% !important;
  }
`

const CardContent = styled.div`
  ${tw`overflow-visible`}
  margin-top: 0.35rem;
`

const Category = styled.span`
  ${tw`inline-block text-center tracking-wide mt-4 mx-0 xs:mb-3 md:mb-6 cursor-pointer z-10`}
  color: rgba(255,255,255,0.9);
  text-shadow: 0 1px 0.25px rgba(0,0,0,0.5);
  min-width: 45px;
  border-radius: 5px;
  transition: all 400ms ease-in-out;
  padding: 6px 8px;
  a:hover {
    color: white;
  }
`

const CardTitle = styled.h2`
  ${tw`font-title font-bold mt-0 pb-2`}
  font-size: 2.9rem;
  line-height: 1.15;
  /* border-bottom: 2px solid rgba(0,0,0,0.125); */
  border-bottom: 2px solid rgba(255,255,255,0.5);
  margin-bottom: 0.35em;
  @media (max-width: 420px) {
    font-size: 2.4rem;
  }
  a {
    ${tw`no-underline`}
    color: rgba(0,0,0,0.8);
  }
`

const Text = styled.p`
  ${tw`tracking-wide leading-normal w-full mb-4 pb-1 cursor-pointer z-10`}
  color: rgba(0,0,0,0.65);
  font-size: 1.05rem;
  margin-top: 0.3em;
  padding-left: 2px; 
  @media (max-width: 500px) {
    p {
      margin-block-start: 0.25rem;
    }
  }
`

const Date = styled.span`
  ${tw`absolute text-base`}
  color: rgba(0,0,0,0.55);
  bottom: 3rem;
  @media (max-width: 500px) {
    bottom: 1.5rem;
  }
  svg {
    margin: 0 10px 0 6px;
  }
`

class BlogCard extends React.Component {
  
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick() {
    location.href='/blog/'+this.props.post.slug
  }
  
  // handleCategoryClick(e) {
  //   e.stopPropagation()
  //   location.href='/blog/tag/'+_.kebabCase(this.props.post.category.toLowerCase())
  // }
  
  render() {
    const post = this.props.post
    let preview = this.props.post.heroImage
    return (
      <Card className='blog-card' onClick={this.handleClick}>
          <BgImage alt={post.title} fluid={preview.fluid} />
        <Wrapper className='content-mask'>
          <Category className={`card-category ${_.kebabCase(post.category.toString().toLowerCase())}`}>
            {post.category}
          </Category>
          <CardContent>
            <CardTitle>
              <PageLink to={`/blog/${post.slug}`}>{post.title}</PageLink>
            </CardTitle>
            <Text dangerouslySetInnerHTML={{ __html: post.description.childMarkdownRemark.html }}
            />
            <Date>
              <FontAwesomeIcon icon={faCalendarAlt} />
              {post.publishDate}
            </Date>
          </CardContent>
        </Wrapper>
        <Angle />
      </Card>
    )
  }
}

export default BlogCard
