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
  /* top: 0px; */
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

const Title = styled.div`
  ${tw`text-white uppercase text-2xl md:text-3xl xl:text-4xl tracking-wide font-title pt-8`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`

const Text = styled.div`
  ${tw`opacity-75 font-sans text-sm md:text-base`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
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
          <span className={`card-category ${_.kebabCase(this.props.post.category.toString().toLowerCase())}`}>{this.props.post.category}</span>
          <div className='text-container'>
            <h2 className='card-title'>
              <PageLink to={`/blog/${this.props.post.slug}`}>{this.props.post.title}</PageLink>
            </h2>
            <p dangerouslySetInnerHTML={{ __html: this.props.post.description.childMarkdownRemark.html }}
            />
            <span className='card-date'>
              <FontAwesomeIcon icon={faCalendarAlt} style={{ margin: `0 6px` }}/>
              {this.props.post.publishDate}
            </span>
          </div>
        </Wrapper>
        <Angle />
      </Card>
    )
  }
}

export default BlogCard