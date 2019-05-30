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
  ${tw`relative inline-block h-full pin-t pin-l py-3 px-0 pl-10 cursor-pointer overflow-hidden z-5`}
  background: rgba(255,255,255,0.8);
  width: 65%;
  border-top-left-radius: 9px;
  border-bottom-left-radius: 9px;
`

const Card = styled.div`
  ${tw`block relative bg-center bg-no-repeat w-full float-left cursor-pointer`}
  background-size: cover;
  border-radius: 9px;
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
  margin-top: 0.35rem;
`

const Category = styled.span`
  ${tw`inline-block text-center tracking-wide mt-4 mb-6 mx-0 cursor-pointer z-10`}
  color: rgba(255,255,255,0.9);
  text-shadow: 0 1px 0.25px rgba(0,0,0,0.5);
  min-width: 45px;
  border-radius: 5px;
  transition: all 400ms ease-in-out;
  padding: 6px 8px;
`

const CardTitle = styled.h2`
  ${tw`font-title font-bold leading-tight mt-0 pb-1`}
  color: rgba(0,0,0,0.8);
  font-size: 2.7rem;
  /* border-bottom: 2px solid rgba(0,0,0,0.125); */
  border-bottom: 2px solid rgba(255,255,255,0.5);
  margin-bottom: 0.35em;
  a {
    ${tw`no-underline`}
    color: rgba(0,0,0,0.85);
  }
`

const Text = styled.p`
  ${tw`tracking-wide leading-normal w-full mb-4 pb-1 cursor-pointer z-10`}
  color: rgba(0,0,0,0.65);
  font-size: 1.05rem;
  margin-top: 0.3em;
  padding-left: 2px; 
`

const Date = styled.span`
  ${tw`absolute text-base`}
  color: rgba(0,0,0,0.55);
  bottom: 3rem;
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
  
  render() {
    return (
      <Card className='blog-card' onClick={this.handleClick}>
        <BgImage alt={this.props.post.title} fixed={this.props.post.heroImage.fixed} />
        <Wrapper className='content-mask'>
          <Category className={`card-category ${_.kebabCase(this.props.post.category.toString().toLowerCase())}`}>{this.props.post.category}</Category>
          <CardContent>
            <CardTitle>
              <PageLink to={`/blog/${this.props.post.slug}`}>{this.props.post.title}</PageLink>
            </CardTitle>
            <Text dangerouslySetInnerHTML={{ __html: this.props.post.description.childMarkdownRemark.html }}
            />
            <Date>
              <FontAwesomeIcon icon={faCalendarAlt} />
              {this.props.post.publishDate}
            </Date>
          </CardContent>
        </Wrapper>
        <Angle />
      </Card>
    )
  }
}

export default BlogCard