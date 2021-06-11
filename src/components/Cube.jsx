import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'


const Wrapper = styled.div`
  width: 58px;
  height: 58px;
  transform: translateY(0) rotatex(-33.5deg) rotatey(45deg);
  transform-style: preserve-3D;
`

const WrapperInner = styled.div`
  transform: translate3d(0, 0, 0);
  transform-style: preserve-3D;
  animation: hoverY 2s infinite alternate;
  transition: opacity 300ms ease-in-out;
  backface-visibility: hidden;
`

const Cube = ({ color }) => (
    <Wrapper className='relative hidden md:block'>
      <WrapperInner className='opacity-0 md:opacity-100'>
        <div className={`cube cube-${color} absolute inline-block w-9 h-9`}>
          <div className='cube-side cube-side-top absolute bg-black bg-opacity-10 w-full h-full' />
          <div className='cube-side cube-side-bottom absolute bg-transparent w-full h-full' />
          <div className='cube-side cube-side-left absolute bg-black bg-opacity-10 w-full h-full' />
          <div className='cube-side cube-side-right absolute bg-black bg-opacity-10 w-full h-full' />
          <div className='cube-side cube-side-front absolute bg-black bg-opacity-10 w-full h-full' />
          <div className='cube-side cube-side-back absolute bg-black bg-opacity-10 w-full h-full' />
        </div>
      </WrapperInner>
    </Wrapper>
)
Cube.defaultProps = {
  color: 'red',
}
Cube.propTypes = {
  color: PropTypes.string,
}

export default Cube
