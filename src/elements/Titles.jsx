import React from 'react'
import styled from 'styled-components'


const StyledBigTitle = styled.h1`
  text-shadow: 0 5px 35px rgba(255,255,255,0.15);
`

const StyledTitle = styled.h1`
  text-shadow: 0 2px 10px rgba(0,0,0,0.2);
`

export const StyledSubtitle = styled.p`
  text-shadow: 0 2px 15px rgba(0,0,0,0.2);
`

export const BigTitle = (props) => (
  <StyledBigTitle className={`font-title font-bold text-white text-opacity-95 tracking-normal leading-tighter w-full text-7xl sm:text-9xl xl:text-10xl mt-4 mb-6 ml-0${props.className ? ` ${props.className}` : ''}`}>
    {props.children}
  </StyledBigTitle>
)

export const Title = (props) => (
  <StyledTitle className={`relative inline-block text-6xl font-title font-bold text-white text-opacity-90 tracking-normal my-6 ml-0 lg:text-6xl md:ml-10 transition-all duration-200 ease-in-out${props.className ? ` ${props.className}` : ''}`}>
    {props.children}
  </StyledTitle>
)

export const SectionTitle = (props) => (
  <StyledTitle className={`relative inline-block font-title text-6xl lg:text-7xl font-bold text-white text-opacity-90 tracking-normal leading-none my-3 mt-0 sm:mb-6 ml-0 transition-all duration-200 ease-in-out${props.className ? ` ${props.className}` : ''}`}>
    {props.children}
  </StyledTitle>
)

export const Subtitle = (props) => (
  <StyledSubtitle className={`font-sans text-grey text-2xl mt-0 lg:text-3xl text-white ml-2 xl:w-3/4 ${props.className}`}>
    {props.children}
  </StyledSubtitle>
)

