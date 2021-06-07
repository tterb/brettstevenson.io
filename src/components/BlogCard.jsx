import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { animated } from 'react-spring'
import assignIn from 'lodash/assignIn'
import kebabCase from 'lodash/kebabCase'
import styled from 'styled-components'
// Components
import PageLink from 'components/PageLink'
// Icons
import { CalendarAlt } from '@styled-icons/fa-regular'
import { Calendar, Tag } from '@styled-icons/octicons'
import { Circle } from '@styled-icons/fa-solid'


const Card = styled.div`
  box-shadow: 2px 7px 12px -2px rgba(38, 48, 73, 0.1);
  transform: translate3D(0, 0, 0) scale(1.0);
  &:hover {
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

const Meta = styled.span`
  /* svg {
    margin: 0 8px 0 4px;
  } */
  .separator {
    height: 0.3rem;
    margin-top: -1px;
    margin-left: 6px;
    margin-right: 1px;
  }
`

class BlogCard extends React.Component {

  handleClick() {
    navigate(`/blog${this.props.post.fields.slug}`)
  }

  render() {
    const post = this.props.post
    assignIn(post, post.frontmatter, post.fields)

    return (
      <Card className='flex flex-col relative bg-center bg-no-repeat w-full h-100 rounded-lg mx-auto my-7 mb-14 transition-all duration-300 ease-in-out cursor-pointer sm:flex-row sm:h-64 md:h-68 lg:h-80' onClick={this.handleClick.bind(this)}>
        <BgImage
          className='relative block sm:inline-block w-full h-1/3 top-0 left-0 rounded-none z-min xs:rounded-t-lg sm:w-5/12 sm:h-full sm:rounded-l-lg sm:rounded-t-none'
          image={post.image.childImageSharp.gatsbyImageData}
          alt={post.title}
        />
        <div className='content-mask relative block bg-white w-full md:w-9/10 h-2/3 py-4 px-4 rounded-none overflow-hidden cursor-pointer z-5 xs:rounded-b-lg sm:rounded-r-lg sm:rounded-b-none focus:sm:inline-block sm:h-full sm:py-6 sm:px-6 sm:pr-8 md:px-8 md:pr-10 lg:pr-12'>
          <div className='flex flex-col h-full'>
            <CardTitle className='font-title font-bold text-3xl sm:text-4xl lg:text-5xl leading-tighter tracking-tight w-full mt-0 ml-0 mr-auto pb-3'>
              <PageLink 
                className='w-9/10 no-underline text-base-100 text-opacity-80 mr-auto hover:text-base-100'
                to={`/blog${post.slug}`}
                content={post.title}
              />
            </CardTitle>
            <Text className='text-lg text-base-400 leading-normal w-full mt-0 md:mt-1 mb-4 pb-1 cursor-pointer z-10'> 
              {post.description}
            </Text>
            <Meta className='flex text-base text-base-400 text-opacity-90 items-center align-middle mt-auto mb-0'>
              <Tag className='text-base-700 my-0 ml-0 mr-2' size='1.2em' />
              <PageLink
                className='text-base-400 text-opacity-90'
                to={`/blog/tag/${kebabCase(post.category)}`}
                content={post.category}
              />
              <Circle className='separator text-base-700 text-opacity-40 align-middle' size='1em' />
              <Calendar className='text-base-700 my-0 ml-1 mr-2' size='1.1em' />
              {post.date}
            </Meta>
          </div>
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
