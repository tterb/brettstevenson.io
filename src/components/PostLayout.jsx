import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { Disqus } from 'gatsby-plugin-disqus'
// Icons
import {ArrowUp, ArrowAltCircleLeft, ArrowAltCircleRight } from '@styled-icons/fa-solid'
// Config
import config from 'config/website'
// Components
import Nav from 'components/Nav'
import PostHeader from 'components/PostHeader'
import PostAuthor from 'components/PostAuthor'
import PageLink from 'components/PageLink'


const Wrapper = styled.div`
  background: rgba(255,255,255,0.985);
  margin-bottom: 2vh;
`

const Content = styled.div`
  font-size: 1.1rem;
  letter-spacing: 0.01em;
  max-width: 900px;
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

const BackToTop = styled(Link)`
  background: rgba(255,255,255,0.985);
  right: 4vw;
  bottom: 10vh;
  svg {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: all 450ms ease-in-out 100ms;
    path {
      fill: rgba(0,0,0,0.5);
      transition: fill 450ms ease-in-out;
    }
  }
  &:hover svg {
    transition: all 450ms ease-in-out 100ms;
    path {
      fill: #F2433B;
      transition: all 450ms ease-in-out 100ms;
    }
  }
`

class PostLayout extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { post, mobile, location, context, children } = this.props
    const { prevPost, nextPost } = context

    if (typeof __PREFIX_PATHS__ !== 'undefined' && __PREFIX_PATHS__) {
      rootPath = `${__PATH_PREFIX__  }/`
    }
    const disqusConfig = {
      url: `${config.siteUrl}${location.pathname}`,
      identifier: post.id,
      title: post.title,
    }

    return (
      <div className='post-body w-full m-auto'>
        <span id='top' />
        <Nav mobile={mobile} />
        {post.image ? (
          <HeroImage
            className='w-full top-0 left-0'
            image={post.image.childImageSharp.gatsbyImageData}
            alt={post.title}
          />
        ) : null}
        <Wrapper className='wrapper font-default m-0 pb-20'>
          <PostHeader post={post} />
          <Content className='text-black text-opacity-85 leading-normal w-full sm:w-9/10 max-w-300 md:w-4/5 lg:w-3/4 mt-0 mb-8 mx-auto p-0 pb-4 md:px-6 md:pb-9'>
            {children}
            <BackToTop className='fixed hidden rounded-full text-center w-14 h-14 p-4 shadow-md hover:shadow-lg transition-all duration-400 ease-in-out cursor-pointer md:block' to={`${location.pathname}/#top`}>
              <ArrowUp className='absolute flex items-center justify-between w-6 h-6 p-0' size='1em' />
            </BackToTop>
          </Content>
          <Separator className='w-5/6 border-none my-4 mt-8 mx-auto' />
          <PostAuthor author={post.author} />
          <div className='prev-next'>
            {prevPost &&
              <span className='prev'>
                <PageLink
                  label='previous'
                  rel='prev'
                  to={`${location.pathname}/blog${prevPost.fields.slug}`}
                >
                  <ArrowAltCircleLeft size='1em' />
                  <span className='prev-title'>{prevPost.frontmatter.title}</span>
                </PageLink>
              </span>
            }
            {nextPost &&
              <span className='next'>
                <PageLink
                  label='next'
                  rel='next'
                  to={`${location.pathname}/blog${nextPost.fields.slug}`}
                >
                  <span className='next-title'>{nextPost.frontmatter.title}</span>
                  <ArrowAltCircleRight size='1em' />
                </PageLink>
              </span>
            }
          </div>
          <Disqus
            className='w-9/10 md:w-4/5 lg:w-3/4 mx-auto mt-18 mb-20'
            config={disqusConfig}
          />
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
  context: PropTypes.shape({
    nextPost: PropTypes.object,
    prevPost: PropTypes.object,
  }).isRequired,
  mobile: PropTypes.bool,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default PostLayout
