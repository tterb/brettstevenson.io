import React from 'react'
import { colors } from '../../tailwind'
import PropTypes from 'prop-types'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const PageLink = ({direction, duration, to, className, children}) => (
  <>
    <AniLink cover bg={colors['blue-grey']} duration={duration} direction={direction} to={to} className={className}>{ children }</AniLink>
  </>
)

PageLink.defaultProps = {
  direction: 'left',
  duration: 1,
}
PageLink.propTypes = {
  direction: PropTypes.string,
  duration: PropTypes.number,
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default PageLink