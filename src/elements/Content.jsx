import React from 'react'
import PropTypes from 'prop-types'


const Content = ({className, children, ...props }) => (
  <div
    className={`relative w-full my-6 py-6 md:my-8 md:py-8 lg:my-12 lg:py-12 justify-center items-center z-50${className ? ` ${className}` : ''}`}
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
