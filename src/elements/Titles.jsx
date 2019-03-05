import styled from 'styled-components'
import tw from 'tailwind.macro'
import { rotateAnimation } from '../styles/animations'
import triangle from '../images/triangle.svg'

export const Title = styled.h1`
  ${tw`text-5xl lg:text-5xl font-title text-white my-6 ml-4 tracking-wide relative inline-block`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  /* &:before {
    content: '';
    width: 40px;
    height: 40px;
    position: absolute;
    background-size: 40px;
    ${rotateAnimation('4s')};
    left: -60px;
    top: 5px;
  } */
`

export const BigTitle = styled.h1`
  ${tw`text-6xl lg:text-7xl font-title text-white mt-4 mb-6 tracking-wide`};
  font-weight: 800;
  letter-spacing: 0.025em;
  line-height: 1.1;
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
  width: 100%;
`

export const Subtitle = styled.p`
  ${tw`text-2xl lg:text-3xl font-sans text-white mt-8 ml-2 xxl:w-3/4`};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`
