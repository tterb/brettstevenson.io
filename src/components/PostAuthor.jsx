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
  ${tw`w-4/5 m-auto mt-14 mb-18 xs:text-center xs:mb-12 md:text-left `}
`

const Avatar = styled.span`
  .author-img {
    width: 135px !important;
    height: 135px !important;
    border-radius: 100%;
  }
`

const AuthorText = styled.span`
  ${tw`inline-block xs:max-w-full xs:ml-0 md:max-w-3/5 md:ml-4`}
  vertical-align: super;
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
  ${tw`list-reset	text-2xl my-3 ml-1 pl-0`}
  li {
    ${tw`inline-block mr-2 cursor-pointer`}
    &:first-child {
      font-size: 105%;
    }
    @media (max-width: 500px) {
      ${tw`mt-2 mr-3`}
      /* margin-right: 0.75rem; */
    }
    a {
      color: rgba(0,0,0,0.7);
      transition: all 300ms ease-in-out;
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
        <li><a href={author.github}><FontAwesomeIcon icon={faGithub}/></a></li>
        <li><a href={author.twitter}><FontAwesomeIcon icon={faTwitter}/></a></li>
        <li><a href={author.dribbble}><FontAwesomeIcon icon={faDribbble}/></a></li>
        <li><a href={author.linkedIn}><FontAwesomeIcon icon={faLinkedinIn}/></a></li>
        <li><a href='https://brettstevenson.io' target='_blank'><FontAwesomeIcon icon={faEnvelope}/></a></li>
      </AuthorLinks>
    </AuthorText>
  </Wrapper>
)

export default PostAuthor
