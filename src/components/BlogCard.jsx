import React from 'react'
import { navigate } from "gatsby"
import Image from 'gatsby-image'
import assignIn from 'lodash/assignIn'
import kebabCase from 'lodash/kebabCase'
import styled from 'styled-components'
import { accent } from '../../tailwind'
import tw from 'tailwind.macro'
// Components
import PageLink from './PageLink'
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'

const Card = styled.div`
  ${tw`block relative bg-center bg-no-repeat w-full cursor-pointer`}
  background-size: cover;
  max-width: 950px;
  height: 68vh;
  border-radius: 5px;
  box-shadow: 0 31px 44px -30px rgba(0,0,0,0.3);
  transition: all 300ms ease-in-out;
  margin: 7vh auto;
  @media (min-width: 501px) {
    height: 53vh;
  }
  &:first-child {
    margin-top: 2vh;
  }
  &:hover {
    box-shadow: 0 25px 32px -20px rgba(0,0,0,0.35);
    transform: translate3D(0,-0.35rem,0);
  }
  
`

const BgImage = styled(Image)`
  ${tw`relative block w-full sm:inline-block sm:h-full pin-t pin-l`}
  position: relative !important;
  height: 35%;
  border-radius: 5px;
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
  z-index: -1;
  & > img {
    object-fit: cover !important; 
    object-position: 0% 0% !important;
  }
  @media (min-width: 501px) {
    width: 35%;
    border-radius: 5px;
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important
  }
`

const Wrapper = styled.div`
  ${tw`absolute block w-full sm:inline-block sm:h-full py-6 px-6 sm:px-10 sm:pr-12 sm:py-10 cursor-pointer overflow-hidden z-5`}
  background: rgba(255,255,255,0.8);
  height: 65%;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  @media (min-width: 501px) {
    width: 65%;
  }
`

const CardContent = styled.div`
  ${tw`overflow-visible`}
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
  ${tw`font-title font-bold tracking-tight mt-0 pb-3`}
  font-size: 2.9rem;
  line-height: 1.15;
  border-bottom: 2px solid rgba(0,0,0,0.05);
  margin-bottom: 0.35em;
  @media (max-width: 420px) {
    font-size: 2.25rem;
  }
  a, a:hover {
    ${tw`no-underline`}
    color: rgba(0,0,0,0.8);
  }
`

const Text = styled.p`
  ${tw`tracking-wide leading-normal w-full mb-4 pb-1 cursor-pointer z-10`}
  color: rgba(0,0,0,0.8);
  font-size: 1.15rem;
  line-height: 1.6;
  margin-top: 0.3em;
  padding-left: 2px; 
  @media (max-width: 500px) {
    p {
      margin-block-start: 0.25rem;
    }
  }
`

const ReadBtn = styled(PageLink)`
  ${tw`inline-flex relative font-lg font-medium tracking-wide leading-normal w-full mt-4 px-6 py-2 cursor-pointer overflow-hidden z-1`}
  background: 0 0;
  color: ${ accent };
  width: max-content;
  align-items: center;
  border: 3px solid ${ accent };
  border-radius: 20px;
  transition: all 300ms ease-in-out;
  &:before {
    ${tw`absolute h-full pin-t pin-l`}
    content: '';
    background: ${ accent };
    width: 200%;
    transform: rotate(-30deg) translate(-30%,-100%);
    transform-origin: left;
    transition: all 200ms;
    z-index: -1;
  }
  &:hover {
    background: ${ accent };
    color: rgba(255,255,255,0.95);
    &:before {
      transform: rotate(0) translate(0,0);
    }
  }
`

const Date = styled.span`
  ${tw`absolute text-base`}
  color: rgba(0,0,0,0.7);
  left: 2.5rem;
  bottom: 2.25rem;
  vertical-align: middle;
  @media (max-width: 500px) {
    left: 1.5rem;
    bottom: 1.5rem;
  }
  a {
    color: rgba(0,0,0,0.7);
  }
  svg {
    margin: 0 10px 0 6px;
  }
  .separator {
    color: rgba(0,0,0,0.4);
    height: 0.3rem;
    vertical-align: middle;
    margin-top: -1px;
    margin-left: 6px;
    margin-right: 1px;
  }
`

class BlogCard extends React.Component {
  
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick() {
    navigate('/blog'+this.props.post.fields.slug+'/')
  }
  
  render() {
    let post = this.props.post
    assignIn(post, post.frontmatter, post.fields)

    return (
      <Card onClick={this.handleClick}>
        <BgImage alt={post.title} fluid={post.image.childImageSharp.fluid} />
        <Wrapper className='content-mask'>
          <CardContent>
            <CardTitle>
              <PageLink to={`/blog${post.slug}/`}>{post.title}</PageLink>
            </CardTitle>
            <Text>{post.description}</Text>
            <Date>
              <PageLink to={`/blog/tag/${kebabCase(post.category)}/`}>{ post.category }</PageLink>
              <FontAwesomeIcon className='separator' icon={faCircle} />
              <FontAwesomeIcon icon={faCalendarAlt} />
              {post.date}
            </Date>
          </CardContent>
        </Wrapper>
      </Card>
    )
  }
}

export default BlogCard
