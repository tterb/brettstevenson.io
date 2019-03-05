import React from 'react'
import tw from 'tailwind.macro'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Content from '../elements/Content'

const Wrapper = styled.div`
  ${tw`relative ml-8`};
  width: 58px;
  height: 58px;
  top: 78px;
  left: -58px;
  transform: translateY(0) rotatex(-33.5deg) rotatey(45deg);
  transform-style: preserve-3D;
`

const WrapperInner = styled.div`
  transform: translate3d(0, 0, 0);
  transform-style: preserve-3D;
  animation: hoverY 2s infinite alternate;
  backface-visibility: hidden;
`


const Cube = ({ offset, color }) => (
    <Wrapper>
      <WrapperInner>
        <div className={`cube cube-${color}`}>
          <div className='cube-side cube-side-top'></div>
          <div className='cube-side cube-side-bottom'></div>
          <div className='cube-side cube-side-left'></div>
          <div className='cube-side cube-side-right'></div>
          <div className='cube-side cube-side-front'></div>
          <div className='cube-side cube-side-back'></div>
        </div>
      </WrapperInner>
    </Wrapper>
)

export default Cube

Cube.defaultProps = {
  color: 'red',
}

Cube.propTypes = {
  color: PropTypes.string,
  offset: PropTypes.number,
}