import React from 'react'
import { Link } from 'gatsby'
import get from 'lodash/get'
import PostMeta from './PostMeta'
import Nav from './Nav'


class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    let header
    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <div>
        <PostMeta 
          title={`${this.props.post.title} | ${siteTitle}`}
          description={this.props.post.description}
          thumbnail={this.props.post.heroImage.fluid}
          url={`/blog/${this.props.post.slug}`}
        />
        <Nav active={this.props.location.pathname} />
        {children}
      </div>
    )
  }
}

export default Template
