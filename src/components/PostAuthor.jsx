import React from 'react'
import Image from 'gatsby-image'
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter, faDribbble, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const PostAuthor = ({ author }) => (
  <div className='author-info'>
    <span className='author-img-container'>
      <Image className='author-img' alt={author.name} fixed={author.image.fixed} />
    </span>
    <span className='author-text'>
      <h4 className='author-name'>{author.name}</h4>
      <p className='author-bio' dangerouslySetInnerHTML={{ __html: author.shortBio.childMarkdownRemark.html }} />
      <ul className='author-links'>
        <li><a href={author.github}><FontAwesomeIcon icon={faGithub}/></a></li>
        <li><a href={author.twitter}><FontAwesomeIcon icon={faTwitter}/></a></li>
        <li><a href={author.dribbble}><FontAwesomeIcon icon={faDribbble}/></a></li>
        <li><a href={author.linkedIn}><FontAwesomeIcon icon={faLinkedinIn}/></a></li>
        <li><a href='https://brettstevenson.io' target='_blank'><FontAwesomeIcon icon={faEnvelope}/></a></li>
      </ul>
    </span>
  </div>
)

export default PostAuthor