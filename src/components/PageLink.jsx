import React from 'react'
import PropTypes from 'prop-types'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { colors } from '../../tailwind'

const PageLink = (props) => {
  const label = props.label ? props.label : props.children
  return (
    <>
      <AniLink cover
        className={props.className}
        bg={colors['background-alt']}
        direction={props.direction}
        duration={props.duration}
        aria-label={label}
        to={props.to}>
        { props.children }
      </AniLink>
    </>
  )
}

PageLink.defaultProps = {
  direction: 'left',
  duration: 1.15,
}
PageLink.propTypes = {
  className: PropTypes.string,
  duration: PropTypes.number,
  direction: PropTypes.string,
  label: PropTypes.string,
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default PageLink
