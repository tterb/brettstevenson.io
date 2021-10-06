import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { Disqus } from 'gatsby-plugin-disqus'
// Views
import Footer from 'views/Footer'
// Components
import Nav from 'components/Nav'
import PostHeader from 'components/PostHeader'
import PostAuthor from 'components/PostAuthor'
import PageLink from 'components/PageLink'
import ScrollTop from 'components/ScrollTop'
// Config
import config from 'config/website'


const Wrapper = styled.div`
  background: rgba(255,255,255,0.985);
`

const HeroImage = styled(GatsbyImage)`
  max-height: 40vh;
  > div {
    padding-bottom: 28% !important;
  }
  &::before {
    content: '';
    position: absolute;
    background: linear-gradient(to bottom, black, rgba(0,0,0,0.3), transparent 95%);
    width: 100vw;
    height: 60px;
    padding: 60px;
    top: 0;
    z-index: 99;
    @media (max-width: 500px) {
      display: none;
    }
  }
`

const Separator = styled.hr`
  border-bottom: 2px solid rgba(0,0,0,0.095);
`

class PostLayout extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { post, location, context, windowSize, children } = this.props

    if (typeof __PREFIX_PATHS__ !== 'undefined' && __PREFIX_PATHS__) {
      rootPath = `${__PATH_PREFIX__  }/`
    }
    const disqusConfig = {
      url: `${config.siteUrl}${location.pathname}`,
      identifier: post.id,
      title: post.title,
    }

    if (typeof window !== 'undefined') {
      // eslint-disable-next-line global-require
      require('smooth-scroll')('a[href*="#"]')
    }

    return (
      <div className='font-default w-full m-auto'>
        <span id='top' />
        <Nav windowSize={windowSize} />
        {post.image ? (
          <HeroImage
            className='w-full top-0 left-0'
            image={post.image.childImageSharp.gatsbyImageData}
            alt={post.title}
          />
        ) : null}
        <Wrapper className='font-default m-0 pt-4 sm:pt-0 pb-0'>
          <PostHeader post={post} />
          <div className='text-black text-opacity-85 text-base leading-normal w-full sm:w-9/10 max-w-240 md:w-4/5 lg:w-3/4 mt-0 mb-8 mx-auto p-0 pb-4 md:px-6 md:pb-9' role='main'>
            {children}
            <ScrollTop
              location={location}
              visible={true}
            />
          </div>
          <Separator className='w-5/6 border-none my-4 mt-8 mx-auto' />
          <PostAuthor author={post.author} />
          <Disqus
            className='w-9/10 md:w-4/5 lg:w-3/4 mx-auto mt-18 mb-20'
            config={disqusConfig}
          />
          <Footer />
        </Wrapper>
      </div>
    )
  }
}
PostLayout.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    image: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        gatsbyImageData: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      bio: PropTypes.string.isRequired,
      image: PropTypes.object.isRequired,
      github: PropTypes.string.isRequired,
      dribbble: PropTypes.string.isRequired,
      twitter: PropTypes.string.isRequired,
      linkedIn: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  windowSize: PropTypes.object.isRequired,
}

export default PostLayout
