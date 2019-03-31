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
  ${tw`w-4/5 m-auto mt-14 mb-18`}
`

const Avatar = styled.span`
  .author-img {
    width: 135px !important;
    height: 135px !important;
    border-radius: 100%;
  }
`

const AuthorText = styled.span`
  ${tw`inline-block max-w-3/5 ml-4`}
  vertical-align: super;
  .author-bio, p {
    color: rgba(#000, 0.7);
    line-height: 1.25;
    margin: 0.25rem auto;
    padding-left: 2px;
  }
`

const AuthorTitle = styled.h4`
  ${tw`m-auto mt-3 mb-2`}
  color: rgba(0,0,0,0.8);
  font-size: 1.4rem;
`

const Links = styled.ul`
  ${tw`list-reset	text-lg pl-2`}
  li {
    display: inline-block;
    margin-right: 8px;
    cursor: pointer;
    a {
      color: rgba(0,0,0,0.75);
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
      <p className='author-bio' dangerouslySetInnerHTML={{ __html: author.shortBio.childMarkdownRemark.html }} />
      <Links>
        <li><a href={author.github}><FontAwesomeIcon icon={faGithub}/></a></li>
        <li><a href={author.twitter}><FontAwesomeIcon icon={faTwitter}/></a></li>
        <li><a href={author.dribbble}><FontAwesomeIcon icon={faDribbble}/></a></li>
        <li><a href={author.linkedIn}><FontAwesomeIcon icon={faLinkedinIn}/></a></li>
        <li><a href='https://brettstevenson.io' target='_blank'><FontAwesomeIcon icon={faEnvelope}/></a></li>
      </Links>
    </AuthorText>
  </Wrapper>
)

export default PostAuthor