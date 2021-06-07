import React from 'react'
import PropTypes from 'prop-types'
import { getSrc } from 'gatsby-plugin-image'
import { Helmet } from 'react-helmet'


// Meta-tags for blog posts
const PostMeta = (props) => {
  const imageSrc = getSrc(props.thumbnail)

  return (
    <Helmet defer={false}>
      <html lang='en' />
      <title>{props.title}</title>
      <meta name='title' content={props.title} />
      <meta name='description' content={props.description} />

      {props.pathname && <meta property='og:url' content={props.url + props.pathname} />}
      {imageSrc && <meta property='og:image' content={imageSrc} />}
      {imageSrc && <meta property=' og:image:secure_url' content={imageSrc}
      />}

      <meta property='og:description' content={props.description} />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
      <meta property='og:locale' content='en' />

      <meta name='twitter:title' content={props.title} />
      <meta name='twitter:description' content={props.description} />
      <meta name='twitter:card' content='summary_large_image' />
      {imageSrc && <meta name='twitter:image' content={imageSrc} />}
    </Helmet>
  )
}
PostMeta.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
  thumbnail: PropTypes.object,
}

export default PostMeta
