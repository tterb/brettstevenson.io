import React from 'react'
import { Link } from 'gatsby'
import PostMeta from './PostMeta'
import Nav from './Nav'


class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header
    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <div>
        <PostMeta 
          title={`${post.title} | ${siteTitle}`}
          description={post.description}
          thumbnail={post.heroImage.fluid}
          url={`/blog/${post.slug}`}
        />
        <Nav active={this.props.location.pathname} />
        {children}
      </div>
    )
  }
}

export default Template
