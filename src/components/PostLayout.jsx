import React from 'react'
import { Link } from 'gatsby'
import tw from 'tailwind.macro'
import styled from 'styled-components'
// Components
import Nav from './Nav'
import PostMeta from './PostMeta'
import PostHero from './PostHero'
import PostAuthor from './PostAuthor'
import PageLink from './PageLink'
import Disqus from './Disqus'
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'


const Separator = styled.hr`
  ${tw`w-4/5 border-none my-4 mt-8`};
  border-bottom: 2px solid rgba(0,0,0,0.095);
`

class PostLayout extends React.Component {
  
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
          <Nav active={location.pathname} />
          <PostHero post={post} />
          <div style={{ background: `#fff` }}>
            {children}
          </div>
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
        <Disqus shortname={config.disqusShortname} identifier={post.id} title={post.title} url={`${config.siteUrl}${location.pathname}`} />
      </>
    )
  }
}

export default PostLayout
