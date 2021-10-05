import React from 'react'
import PropTypes from 'prop-types'


const Divider = ({ offset, direction, className, children }) => {
  const classes = `relative w-full h-auto box-content${className ? ` ${className}` : ''}`
  let path = [[0, 0], [100, 0], [100, 100], [0, 100]]
  if (direction === 'left') {
    path[1][1] = offset
    path[3][1] = 100 - offset
  } else {
    path[0][1] = offset
    path[2][1] = 100 - offset
  }
  const clipPath = `polygon(${path.map((vertex) => (
    vertex.map((val) => `${val}%`).join(' ')
  )).join(', ')})`

  const dividerStyle = {
    paddingTop: `${offset}%`,
    paddingBottom: `${offset}%`,
    clipPath: clipPath,
  }

  return (
    <div className={classes} style={dividerStyle}>
      {children}
    </div>
  )
}
Divider.propTypes = {
  offset: PropTypes.number.isRequired,
  direction: PropTypes.oneOf(['left', 'right']),
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default Divider