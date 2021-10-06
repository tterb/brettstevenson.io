import React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
// Icons
import { Envelope } from '@styled-icons/fa-solid'
import { Dribbble, Github, LinkedinIn, Twitter } from '@styled-icons/fa-brands'


const AuthorText = styled.span`
  .author-bio, p {
    padding-left: 2px;
  }
`

const AuthorLinks = styled.ul`
  li {
    &:first-child {
      font-size: 105%;
    }
  }
`

const SocialLink = ({ link, label, icon }) => (
  <li className='inline-block mt-2 sm:mt-0 mr-3 cursor-pointer'>
    <a
      href={link}
      className='text-black text-opacity-70
      transition-color duration-200 ease-in-out hover:text-blue-400 hover:text-opacity-100 focus:text-blue-400 focus:text-opacity-100'
      aria-label={label}
      target='_blank'
      rel='noopener noreferrer'
    >
      {icon}
    </a>
  </li>
)

const PostAuthor = ({ author }) => (
  <div className='author-wrapper flex flex-col items-center text-center w-9/10 max-w-160 md:flex-row md:w-4/5 md:max-w-200 md:text-left lg:w-3/4 lg:max-w-250 m-auto mt-10 mb-18'>
    <span className='w-40 h-40 align-middle mx-auto sm:ml-auto sm:mr-0'>
      <GatsbyImage
        className='author-img w-40 h-full rounded-full overflow-hidden'
        image={author.image.childImageSharp.gatsbyImageData}
        alt={author.name}
      />
    </span>
    <AuthorText className='inline-block max-w-9/10 mx-auto sm:ml-0 md:max-w-3/4 md:ml-5 xl:max-w-3/5'>
      <h4 className='text-xl text-black text-opacity-80 font-semibold mx-auto mt-3 mb-2'>{author.name}</h4>
      <p className='author-bio text-black text-opacity-70 leading-tight mx-auto my-1'>{author.bio}</p>
      <AuthorLinks className='list-reset text-xl my-3 ml-1 pl-0'>
        <SocialLink
          Label='Check out my Github'
          link={author.github}
          icon={<Github size='1em' />}
        />
        <SocialLink
          Label='Check out my Dribbble'
          link={author.dribbble}
          icon={<Dribbble size='1em' />}
        />
        <SocialLink
          Label='Check out my Twitter'
          link={author.twitter}
          icon={<Twitter size='1em' />}
        />
        <SocialLink
          Label='Check out my LinkedIn'
          link={author.linkedIn}
          icon={<LinkedinIn size='1em' />}
        />
        <SocialLink
          Label='Contact me'
          link={'https://brettstevenson.io/contact'}
          icon={<Envelope size='1em' />}
        />
      </AuthorLinks>
    </AuthorText>
  </div>
)

PostAuthor.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        gatsbyImageData: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired,
    bio: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    twitter: PropTypes.string.isRequired,
    dribbble: PropTypes.string.isRequired,
    linkedIn: PropTypes.string.isRequired,
  }).isRequired,
}

export default PostAuthor
