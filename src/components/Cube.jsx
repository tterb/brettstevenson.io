import React from 'react'
import PropTypes from 'prop-types'
import Content from '../elements/Content'

const Cube = ({ offset, color }) => (
    <div className='cube-wrap'>
      <div className='cube-wrap-inner'>
        <div className={`cube cube-${color}`}>
          <div className='cube-side cube-side-top'>
          </div>
          <div className='cube-side cube-side-bottom'>
          </div>
          <div className='cube-side cube-side-left'>
          </div>
          <div className='cube-side cube-side-right'>
          </div>
          <div className='cube-side cube-side-front'>
          </div>
          <div className='cube-side cube-side-back'>
          </div>
        </div>
      </div>
    </div>
)

export default Cube

Cube.defaultProps = {
  color: 'red',
}

Cube.propTypes = {
  color: PropTypes.string,
  offset: PropTypes.number,
}