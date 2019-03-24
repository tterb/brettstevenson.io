import React from 'react'
import Image from 'gatsby-image'
import tw from 'tailwind.macro'
import { colors } from '../../tailwind'
import styled from 'styled-components'
import kebabCase from 'lodash/kebabCase'
import AniLink from 'gatsby-plugin-transition-link/AniLink';
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'

const Wrapper = styled.a`
  width: 100%;
  ${tw`shadow-lg relative no-underline rounded-lg px-8 py-8 md:py-16 text-white`};
  background: ${props => props.bg};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-5px);
  }
`
const Title = styled.div`
  ${tw`text-white uppercase text-2xl md:text-3xl xl:text-4xl tracking-wide font-sans pt-8`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`
const Text = styled.div`
  ${tw`opacity-75 font-sans text-sm md:text-base`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`
const BgImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  height: 53vh; // or whatever
  z-index: -1;
  // Adjust image positioning (if image covers area with defined height) and add font-family for polyfill
  & > img {
    object-fit: cover !important; 
    object-position: 0% 0% !important;
  }
  `

class BlogCard extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    location.href='/blog/'+this.props.post.slug
  }
  
  render() {
    return (
      <div className='blog-card' style={{ position: `relative` }} onClick={this.handleClick}>
        <Image alt={this.props.post.title}
          css={{ top: 0, left: 0, right: 0, bottom: 0 }} 
          style={{ position: `absolute` }} 
          fixed={this.props.post.heroImage.fixed}/>
        <div className='content-mask'>
          <span className={`card-category ${kebabCase(this.props.post.category.toString().toLowerCase())}`}>{this.props.post.category}</span>
          <div className='text-container'>
            <h2>
              <AniLink cover bg={colors['blue-black']} duration={1} direction='left' to={`/blog/${this.props.post.slug}`}>{this.props.post.title}</AniLink>
            </h2>
            <p dangerouslySetInnerHTML={{ __html: this.props.post.description.childMarkdownRemark.html }}
            />
            <span className='card-date'>
              <FontAwesomeIcon icon={faCalendarAlt} style={{ margin: `0 6px` }}/>
              {this.props.post.publishDate}
            </span>
          </div>
        </div>
        <div className='horizontal'></div>
      </div>
    )
  }
}

export default BlogCard