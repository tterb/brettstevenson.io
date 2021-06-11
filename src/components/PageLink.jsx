import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'


const PageLink = (props) => {
  const label = props.label ? props.label : props.children
  return props.external ? (
    <a
      className={props.className}
      aria-label={label}
      href={props.to}
      target='_blank'
      rel='noopener noreferrer'
    >
      {props.content ? props.content : props.children}
    </a>
  ) : (
    <Link
      className={props.className}
      aria-label={label}
      to={props.to}
    >
      {props.content ? props.content : props.children}
    </Link>
  )
}
PageLink.defaultProps = {
  external: false,
}
PageLink.propTypes = {
  external: PropTypes.bool,
  label: PropTypes.string,
  to: PropTypes.string.isRequired,
  content: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default PageLink
