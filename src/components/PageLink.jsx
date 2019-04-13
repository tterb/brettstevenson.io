import React from 'react'
import PropTypes from 'prop-types'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const PageLink = ({ direction, duration, to, className, children }) => (
  <>
    <AniLink cover hex='#23262b' className={className}
    to={to} direction={direction} duration={duration}>{ children }</AniLink>
  </>
)

PageLink.defaultProps = {
  direction: 'left',
  duration: 1.15,
}
PageLink.propTypes = {
  duration: PropTypes.number,
  direction: PropTypes.string,
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
}

export default PageLink