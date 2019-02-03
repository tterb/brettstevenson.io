import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { width as twWidth } from '../../tailwind'
import { hidden } from '../styles/utils'

const Wrapper = styled.svg`
  ${tw`absolute`};
  stroke: currentColor;
  ${props => props.hiddenMobile && hidden};
  color: ${props => props.stroke};
  width: ${props => props.svgWidth};
  fill: ${props => props.fill};
  left: ${props => props.left};
  top: ${props => props.top};
`

const icons = {
  triangle: {
    shape: (
      <polygon
        strokeWidth="1px"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="14.921,2.27 28.667,25.5 1.175,25.5 "
      />
    ),
    viewBox: '0 0 30 30',
  },
  circle: {
    shape: (
      <path d="M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,6.23A8.77,8.77,0,1,0,23.77,15,8.77,8.77,0,0,0,15,6.23Z" />
    ),
    viewBox: '0 0 30 30',
  },
  arrowUp: {
    shape: (
      <>
        <path d="M28.74,20.81H1.26a1.26,1.26,0,0,1-1-2L14.16.5a1.25,1.25,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,18.8a1.25,1.25,0,0,1-1,2ZM3.81,18.29H26.22L15.16,3.37Z" />{' '}
        <path d="M28.74,42H1.26a1.28,1.28,0,0,1-1.13-.71A1.26,1.26,0,0,1,.26,40l13.9-18.29a1.28,1.28,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,40a1.26,1.26,0,0,1,.12,1.32A1.28,1.28,0,0,1,28.74,42ZM3.81,39.47H26.22L15.16,24.55Z" />
      </>
    ),
    viewBox: '0 0 30 42',
  },
  cross: {
    shape: (
      <>
        <path d="M213.33,207.67a4.0022,4.0022,0,0,1-5.66,5.66l-97.42-97.42L12.83,213.33a4.0022,4.0022,0,0,1-5.66-5.66l97.42-97.42L7.17,12.83a4.0022,4.0022,0,0,1,5.66-5.66l97.42,97.42L207.67,7.17a4.0022,4.0022,0,0,1,5.66,5.66l-97.42,97.42Z"/>
      </>
    ),
    viewBox: "0 0 220 220",
  },
  box: {
    shape: (
      <path d="M28,2V28H2V2H28m.13-2H1.88A1.88,1.88,0,0,0,0,1.88V28.13A1.88,1.88,0,0,0,1.88,30H28.13A1.87,1.87,0,0,0,30,28.13V1.88A1.88,1.88,0,0,0,28.13,0Z" />
    ),
    viewBox: '0 0 30 30',
  },
  hexa: {
    shape: (
      <polygon
        strokeWidth="2px"
        strokeLinejoin="round"
        strokeMiterlimit="5"
        points="27.5,21.904 15,28.809  2.5,21.904 2.5,8.095 15,1.19 27.5,8.095 "
      />
    ),
    viewBox: '0 0 30 30',
  },
  gatsby: {
    shape: (
      <path class="a" d="M15.9554.0891A15.9555,15.9555,0,1,0,31.9109,16.0446,15.9555,15.9555,0,0,0,15.9554.0891ZM3.4284,16.2109,15.7891,28.5716A12.528,12.528,0,0,1,3.4284,16.2109ZM18.76,28.2584,3.7416,13.24A12.531,12.531,0,0,1,26.085,8.671L24.35,10.2016a10.23,10.23,0,0,0-18.0141,2.36L19.438,25.6638a10.249,10.249,0,0,0,6.4484-7.1646H20.4557V16.0446h8.0289A12.5338,12.5338,0,0,1,18.76,28.2584Z" transform="translate(0 -0.0891)"/>
    ),
    viewBox: '0 0 32 32',
  },
}

const SVG = ({ stroke, fill, width, icon, left, top, hiddenMobile }) => (
  <Wrapper
    viewBox={icons[icon].viewBox}
    stroke={stroke}
    fill={fill}
    svgWidth={twWidth[`${width}`]}
    left={left}
    top={top}
    hiddenMobile={hiddenMobile}
  >
    {icons[icon].shape}
  </Wrapper>
)

export default SVG

SVG.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  width: PropTypes.number,
  icon: PropTypes.oneOf(['triangle', 'circle', 'arrowUp', 'cross', 'box', 'hexa']).isRequired,
  left: PropTypes.string,
  top: PropTypes.string,
  hiddenMobile: PropTypes.bool,
}

SVG.defaultProps = {
  stroke: 'transparent',
  width: 8,
  fill: 'none',
  left: '0%',
  top: '0%',
  hiddenMobile: false,
}
