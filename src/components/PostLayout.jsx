import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Image from 'gatsby-image'
import tw from 'tailwind.macro'
import styled from 'styled-components'
import { Disqus } from 'gatsby-plugin-disqus'
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faArrowAltCircleRight, faArrowUp } from '@fortawesome/free-solid-svg-icons'
// Config
import { accent } from '../../tailwind'
import config from '../../config/website'
// Components
import Nav from './Nav'
import PostHeader from './PostHeader'
import PostAuthor from './PostAuthor'
import PageLink from './PageLink'


const Wrapper = styled.div`
  ${tw`font-default m-0`}
  background: rgba(255,255,255,0.985);
  margin-bottom: 2vh;
`

const Content = styled.div`
  ${tw`leading-normal w-9/10 md:w-4/5 lg:w-3/4 mt-0 mb-8 mx-auto p-0 pb-4 md:px-9 md:pb-9`}
  color: rgba(0,0,0,0.85);
  font-size: 1.1rem;
  letter-spacing: 0.01em;
  max-width: 900px;
`

const HeroImage = styled(Image)`
  width: 100.5%;
  height: 60vw;
  max-height: 45vh;
  top: -1px;
  left: -1px;
  > div {
    padding-bottom: 28% !important;
  }
`

const Separator = styled.hr`
  ${tw`w-4/5 border-none my-4 mt-8`}
  border-bottom: 2px solid rgba(0,0,0,0.095);
`

const BackToTop = styled(Link)`
  ${tw`fixed rounded-full text-center w-6 h-6 p-4 shadow-md hover:shadow-lg cursor-pointer`}
  background: rgba(255,255,255,0.985);
  line-height: inherit;
  right: 4vw;
  bottom: 10vh;
  transition: all 450ms ease-in-out;
  svg {
    ${tw`absolute flex items-center justify-between w-10 h-10 p-0`}
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
      fill: ${accent};
      transition: all 450m ease-in-out 100ms;
    }
  }
`

const Comments = styled(Disqus)`
  ${tw`w-9/10 md:w-4/5 lg:w-3/4`}
  margin-bottom: 3rem !important;
  @media (min-width: 350px) {
    width: 90% !important;
  }
  @media (min-width: 650px) {
    width: 80% !important;
  }
  @media (min-width: 900px) {
    width: 75% !important;
  }
`

class PostLayout extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { post, mobile, location, context, children } = this.props
    const { prev, next } = context
    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== 'undefined' && __PREFIX_PATHS__)
      rootPath = `${__PATH_PREFIX__  }/`

    return (
      <>
        <span id='top' />
        <Nav mobile={mobile} />
        <HeroImage alt={post.title} fluid={post.image.childImageSharp.fluid} />
        <Wrapper className='wrapper'>
          <PostHeader id='postHero' post={post} />
          <Content>
            {children}
            <BackToTop to={`${location.pathname}/#top`}>
              <FontAwesomeIcon icon={faArrowUp} />
            </BackToTop>
          </Content>
          <Separator />
          <PostAuthor author={post.author} />
          <div className='prev-next'>
            { prev &&
              <span className='prev'>
                <PageLink label='previous' rel='prev' to={`blog${prev.node.fields.slug}`}>
                  <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                  <span className='prev-title'>{prev.node.frontmatter.title}</span>
                </PageLink>
              </span>
            }
            { next &&
              <span className='next'>
                <PageLink
                  label='next' rel='next' direction='right'
                  to={`blog${next.node.fields.slug}`}>
                  <span className='next-title'>{next.node.frontmatter.title}</span>
                  <FontAwesomeIcon icon={faArrowAltCircleRight} />
                </PageLink>
              </span>
            }
          </div>
          <Comments identifier={post.id} title={post.title} url={`${config.siteUrl}${location.pathname}`} />
        </Wrapper>
      </>
    )
  }
}

PostLayout.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  context: PropTypes.shape({
    next: PropTypes.shape,
    prev: PropTypes.shape,
  }).isRequired,
  mobile: PropTypes.bool,
  location: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default PostLayout
