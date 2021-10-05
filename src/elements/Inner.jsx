import React from 'react'
import PropTypes from 'prop-types'


const Inner = (props) => (
  <div className={`text-left w-9/10 md:w-4/5 xxl:w-2/3 max-w-250 mx-auto${props.className ? ` ${props.className}` : ''}`}>
    {props.children}
  </div>
)
Inner.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Inner
