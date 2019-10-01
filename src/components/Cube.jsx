import React from 'react'
import tw from 'tailwind.macro'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  ${tw`relative ml-8`}
  width: 58px;
  height: 58px;
  top: 82px;
  left: -58px;
  transform: translateY(0) rotatex(-33.5deg) rotatey(45deg);
  transform-style: preserve-3D;
  @media (min-width: 600px) {
    left: -30px;
  }
`

const WrapperInner = styled.div`
${tw`sm:opacity-0 md:opacity-100`}
  transform: translate3d(0, 0, 0);
  transform-style: preserve-3D;
  animation: hoverY 2s infinite alternate;
  transition: opacity 300ms ease-in-out;
  backface-visibility: hidden;
  @media (max-width: 600px) {
    opacity: 0;
  }
`

const Side = styled.div`
  ${tw`absolute w-full h-full`}
`

const Cube = ({ offset, color }) => (
    <Wrapper>
      <WrapperInner>
        <div className={`cube cube-${color}`}>
          <Side className='cube-side cube-side-top'></Side>
          <Side className='cube-side cube-side-bottom'></Side>
          <Side className='cube-side cube-side-left'></Side>
          <Side className='cube-side cube-side-right'></Side>
          <Side className='cube-side cube-side-front'></Side>
          <Side className='cube-side cube-side-back'></Side>
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
