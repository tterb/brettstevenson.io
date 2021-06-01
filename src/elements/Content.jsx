import React from 'react'
import PropTypes from 'prop-types'


const Content = ({className, children, ...props }) => (
  <div 
    className={`relative w-full py-12 md:py-16 lg:py-24 justify-center items-center z-50${className ? ` ${className}` : ''}`}
    {...props}
  >
    {children}
  </div>
)
Content.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Content
