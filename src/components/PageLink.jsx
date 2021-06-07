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
  direction: 'left',
  duration: 1.15,
  external: false,
}
PageLink.propTypes = {
  className: PropTypes.string,
  duration: PropTypes.number,
  direction: PropTypes.string,
  external: PropTypes.bool,
  label: PropTypes.string,
  to: PropTypes.string.isRequired,
  content: PropTypes.node,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default PageLink
