import React from 'react'
import Image from 'gatsby-image'
import tw from 'tailwind.macro'
import { accent } from '../../tailwind'
import styled from 'styled-components'
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter, faDribbble, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Wrapper = styled.div`
  ${tw`m-auto mt-10 mb-18 xs:w-4/5 xs:text-center xs:mb-12 md:w-3/4 md:text-left xl:w-7/10 xl:mx-auto`}
  @media (min-width: 900px) {
    /* max-width: 780px !important; */
  }
`

const Avatar = styled.span`
  vertical-align: bottom;
  .author-img {
    width: 135px !important;
    height: 135px !important;
    border-radius: 100%;
  }
`

const AuthorText = styled.span`
  ${tw`inline-block xs:max-w-9/10 xs:ml-0 md:max-w-3/4 md:ml-5 xl:max-w-3/5`}
  .author-bio, p {
    ${tw`leading-tight mx-auto my-1`}
    color: rgba(0,0,0,0.7);
    padding-left: 2px;
  }
`

const AuthorTitle = styled.h4`
  ${tw`text-2xl m-auto mt-3 mb-2`}
  color: rgba(0,0,0,0.75);
`

const AuthorLinks = styled.ul`
  ${tw`list-reset text-2xl my-3 ml-1 pl-0`}
  li {
    ${tw`inline-block cursor-pointer`}
    margin-right: 0.65rem;
    &:first-child {
      font-size: 105%;
    }
    @media (max-width: 500px) {
      ${tw`mt-2 mr-3`}
      /* margin-right: 0.75rem; */
    }
    a {
      color: rgba(0,0,0,0.7);
      transition: all 200ms ease-in-out;
      &:hover {
        color: ${accent};
      }
    }
  }
`

const PostAuthor = ({ author }) => (
  <Wrapper className='author-wrapper'>
    <Avatar>
      <Image className='author-img' alt={author.name} fixed={author.image.fixed} />
    </Avatar>
    <AuthorText>
      <AuthorTitle>{author.name}</AuthorTitle>
      <p className='author-bio'>{ author.bio }</p>
      <AuthorLinks>
        <li><a href={author.github} target='_blank'><FontAwesomeIcon icon={faGithub}/></a></li>
        <li><a href={author.twitter} target='_blank'><FontAwesomeIcon icon={faTwitter}/></a></li>
        <li><a href={author.dribbble} target='_blank'><FontAwesomeIcon icon={faDribbble}/></a></li>
        <li><a href={author.linkedIn} target='_blank'><FontAwesomeIcon icon={faLinkedinIn}/></a></li>
        <li><a href='https://brettstevenson.io/contact' target='_blank'><FontAwesomeIcon icon={faEnvelope}/></a></li>
      </AuthorLinks>
    </AuthorText>
  </Wrapper>
)

export default PostAuthor
