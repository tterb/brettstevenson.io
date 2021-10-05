import React from 'react'
import PropTypes from 'prop-types'


const Content = ({className, children, ...props }) => (
  <section className={`relative flex w-full justify-center items-center z-50${className ? ` ${className}` : ''}`} {...props}>
    {children}
  </section>
)
Content.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Content
