import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import assignIn from 'lodash/assignIn'
import kebabCase from 'lodash/kebabCase'
import styled from 'styled-components'
// Components
import PageLink from 'components/PageLink'
// Icons
import { Calendar, Tag } from '@styled-icons/octicons'
import { Circle } from '@styled-icons/fa-solid'


const Card = styled.div`
  box-shadow: 2px 7px 12px -2px rgba(38, 48, 73, 0.1);
  transform: translate3D(0, 0, 0) scale(1.0);
  &:focus-visible {
    outline: 2px solid #00A1DB;
    outline-offset: 0;
  }
  &:hover,
  &:focus,
  &:focus-within {
    box-shadow: 1rem 1rem 2rem rgba(38, 48, 73, 0.04), 1rem 1rem 1.5rem rgba(38, 48, 73, 0.05), inset 2rem 2rem 3rem rgba(38, 48, 73, 0.02);
    transform: translate3D(0, -0.3rem, 0) scale(1.02);
  }
`

const BgImage = styled(GatsbyImage)`
  max-width: ${props => props.maxWidth};
  & > img {
    object-fit: cover !important;
    object-position: 0% 0% !important;
  }
`

const CardTitle = styled.h2`
  border-bottom: 2px solid rgba(0,0,0,0.05);
  margin-bottom: 0.35em;
`

const Text = styled.p`
  letter-spacing: 0.5px;
  padding-left: 2px;
  @media (max-width: 500px) {
    p {
      margin-block-start: 0.25rem;
    }
  }
`

const Separator = styled(Circle)`
  height: 0.3rem;
  margin-top: -1px;
  margin-left: 6px;
  margin-right: 1px;
`

class BlogCard extends React.Component {

  handleClick() {
    navigate(`/blog${this.props.post.fields.slug}`)
  }

  render() {
    const post = this.props.post
    assignIn(post, post.frontmatter, post.fields)

    return (
      <Card
        className='flex flex-col relative items-stretch w-full h-100 rounded-lg mx-auto mt-7 mb-12 transition-all duration-300 ease-in-out cursor-pointer sm:flex-row sm:h-auto sm:min-h-64 sm:max-h-76 md:min-h-68 lg:min-h-80'
        onClick={this.handleClick.bind(this)}
        tabIndex='0'
      >
        <BgImage
          className='relative block sm:inline-block w-full h-1/3 top-0 left-0 rounded-none z-min rounded-t-lg sm:w-5/12 sm:h-auto sm:min-h-auto sm:rounded-l-lg sm:rounded-t-none'
          image={post.image.childImageSharp.gatsbyImageData}
          alt={post.title}
        />
        <div className='content-mask relative flex flex-col bg-white w-full md:w-9/10 h-2/3 py-4 px-4 rounded-none overflow-hidden cursor-pointer z-5 rounded-b-lg sm:rounded-r-lg sm:rounded-b-none sm:h-auto sm:py-6 sm:px-6 sm:pr-8 md:px-8 md:pr-10 lg:pr-12'>
          <CardTitle className='font-title font-bold text-base-100 text-2xl sm:text-3xl lg:text-4xl text-opacity-80 leading-tighter tracking-tight w-9/10 mt-0 ml-0 mr-auto pb-3'>
            {post.title}
          </CardTitle>
          <Text className='text-base text-base-400 leading-normal w-full mt-0 md:mt-1 mb-4 pb-1 cursor-pointer z-10'>
            {post.description}
          </Text>
          <span className='flex text-sm text-base-400 text-opacity-90 items-center align-middle mt-auto mb-0'>
            <Tag className='text-base-700 my-0 ml-0 mr-2' size='1.2em' />
            <PageLink
              className='gradient-text-blue-dark transition-all duration-200 ease-in-out hover:font-medium focus:font-medium'
              to={`/blog/category/${kebabCase(post.category)}`}
              content={post.category === 'Web Development' ? 'Web Dev' : post.category}
            />
            <Separator className='text-base-700 text-opacity-40 align-middle' size='1em' />
            <Calendar className='text-base-700 my-0 ml-1 mr-2' size='1.1em' />
            {post.date}
          </span>
        </div>
      </Card>
    )
  }
}
BlogCard.propTypes = {
  post: PropTypes.shape({
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      image: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
}

export default BlogCard
