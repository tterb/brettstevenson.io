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
  ${tw`relative inline-block h-full py-3 px-0 pl-10 cursor-pointer overflow-hidden`}
  background: rgba(255,255,255,0.8);
  top: 0px;
  width: 65%;
  border-top-left-radius: 9px;
  border-bottom-left-radius: 9px;
  z-index: 5;
`

const Card = styled.div`
  ${tw`block relative bg-center bg-no-repeat w-full float-left cursor-pointer`}
  background-size: cover;
  border-radius: 9px;
`

const Angle = styled.div`
  ${tw`relative inline-block w-1/5 h-full overflow-hidden`}
  background: linear-gradient(to top right, rgba(255,255,255,0.8) 50%, transparent 0);
  top: 0;
  right: 0;
`

const BgImage = styled(Image)`
  ${tw`absolute min-w-full`}
  top: 0;
  left: 0;
  height: 53vh; // or whatever
  z-index: -1;
  // Adjust image positioning (if image covers area with defined height) and add font-family for polyfill
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
        <Image alt={this.props.post.title}
          css={{ top: 0, left: 0, right: 0, bottom: 0 }} 
          style={{ position: `absolute` }} 
          fixed={this.props.post.heroImage.fixed}/>
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