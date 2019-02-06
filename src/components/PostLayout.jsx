import React from 'react'
import { Link } from 'gatsby'
import Container from './Container'
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
      <Container>
        <Nav active={this.props.location.pathname} />
        {children}
      </Container>
    )
  }
}

export default Template
