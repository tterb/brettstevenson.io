import React from 'react'
import { Link } from 'gatsby'
import TweenLite from 'gsap'
import scrollTo from 'gsap/ScrollToPlugin';
import tw from 'tailwind.macro'
import { accent } from '../../tailwind'
import styled from 'styled-components'
// Components
import PostNav from './PostNav'
import PostMeta from './PostMeta'
import PostHero from './PostHero'
import PostAuthor from './PostAuthor'
import PageLink from './PageLink'
import Disqus from './Disqus'
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faArrowAltCircleRight, faArrowUp } from '@fortawesome/free-solid-svg-icons'


const Separator = styled.hr`
  ${tw`w-4/5 border-none my-4 mt-8`};
  border-bottom: 2px solid rgba(0,0,0,0.095);
`

const BackToTop = styled.span`
  ${tw`fixed rounded-full text-center p-4 shadow-md hover:shadow-lg cursor-pointer`}
  width: 1rem;
  height: 1rem;
  right: 4vw;
  bottom: 10vh;
  transition: all 450ms ease-in-out;
  svg path {
    fill: rgba(0,0,0,0.5);
    transition: fill 450ms ease-in-out;
  }
  &:hover {
    svg path {
      fill: ${accent};
    }
  }
`

class PostLayout extends React.Component {
  
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }
  
  scrollToTop() {
    TweenLite.to(window, .8, {scrollTo:0});
  }
  
  render() {
    const config = require(`../../config/website`)
    const { post, location, context, children } = this.props
    const { prev, next } = context
    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <>
        <div>
          <PostMeta
            title={`${post.title} | ${config.siteTitle}`}
            description={post.description}
            thumbnail={post.heroImage.fluid}
            url={`/blog/${post.slug}`}
          />
          <PostNav active={location.pathname} />
          <PostHero id='postHero' post={post} />
          <div style={{ background: `#fff` }}>
            {children}
            <BackToTop onClick={this.scrollToTop}>
              <FontAwesomeIcon icon={faArrowUp} />
            </BackToTop>
          </div>
        </div>
        <Separator />
        <PostAuthor author={post.author} />
        <div className='prev-next'>
          { prev && <span className='prev'>
            <PageLink to={`blog/${prev.node.slug}`} rel='prev'>
              <FontAwesomeIcon icon={faArrowAltCircleLeft} />
              <span className='prev-title'>{prev.node.title}</span>
            </PageLink></span> }
          { next && <span className='next'>
            <PageLink direction='right' to={`blog/${next.node.slug}`} rel='next'>
              <span className='next-title'>{next.node.title}</span>
              <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </PageLink></span> }
        </div>
        <Disqus shortname={config.disqusShortname} identifier={post.id} title={post.title} url={`${config.siteUrl}${location.pathname}`} />
      </>
    )
  }
}

export default PostLayout
