import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Typed from 'react-typed';
import { Parallax } from 'react-spring/renderprops-addons'
import Fade from 'react-reveal/Fade'
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
// Elements
import Content from '../elements/Content'
import { Subtitle } from '../elements/Titles'


const Container = styled(Content)`
  ${tw`pin-t lg:p-20`}
`

const Wrapper = styled.div`
  ${tw`relative w-full mt-0 xl:w-full`}
  top: -2.5em;
  @media screen and (max-width: 420px) {
    top: -3.5em;
  }
`

const Title = styled.h1`
  ${tw`font-title font-bold leading-none w-full text-6xl md:text-7xl lg:text-9xl xl:text-10xl mt-4 lg:mt-6 mb-6 ml-0`}
  color: rgba(255,255,255,0.95);
  /* font-size: 3.5rem; */
  letter-spacing: -2px;
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
  @media screen and (max-width: 420px) {
    font-size: 17vw;
  }
`

const CodeWrapper = styled(Container)`
  z-index: -1;
  svg {
    ${tw`absolute m-0 ml-2 z-0`}
    color: #fff;
    fill: rgba(255,255,255,0.1);
    transform: rotate(10deg);
  }
`

const typedStyle = {
  color: `rgba(255,255,255,0.6)`,
  fontWeight: 400,
}

const ScrollContainer = styled(Parallax.Layer)`
  ${tw`relative text-center w-1/2 mx-auto my-2 mt-18 md:mt-6 xl:mt-2`}
`

const Arrow = styled(Link)`
  ${tw`relative text-center mx-auto my-2 cursor-pointer z-999`}
  color: rgba(255,255,255,0.2);
  font-size: 2.75rem;
  transition: color 300ms ease-in-out;
  &:hover {
    color: rgba(255,255,255,0.7);
  }
`
const Code = () => (
    <CodeWrapper pages={0.05} speed={0.15}>
      <svg xmlns='https://www.w3.org/2000/svg' viewBox='0 0 210 168' className='code-svg'>
        <path d='M50.9,124.77,11,85.59a3.93,3.93,0,0,1-.54-5.44,2.31,2.31,0,0,1,.54-.54L50.79,39.88a4.53,4.53,0,0,1,6.41-.12h0l.12.12,7.94,7.94a4.53,4.53,0,0,1,.12,6.41h0l-.12.12L38.05,80.91a2.1,2.1,0,0,0,0,3l0,0,27.1,26.34c1.85,1.74,2.72,3.81.11,6.53l-7.84,7.94A4.63,4.63,0,0,1,50.9,124.77Z' />
        <path d='M158.09,124.77,199,84.61c1.85-1.85,2-3.7,0-5.55L158.53,38.69a4.53,4.53,0,0,0-6.41-.12h0l-.12.12L144,47.29a4.53,4.53,0,0,0-.12,6.41h0l.12.12,26.88,26.87a2.1,2.1,0,0,1,0,3l0,0-27,26.45a4.62,4.62,0,0,0-.11,6.53l7.84,7.94a4.46,4.46,0,0,0,6.28.4Z' />
        <path d='M92.53,157.64l-11.86-3.16a4.58,4.58,0,0,1-3.28-5.58h0v-.07l37-136.47A4.58,4.58,0,0,1,120,9.06h.1l11.86,3.16a4.58,4.58,0,0,1,3.28,5.58h0v.07l-37,136.47a4.68,4.68,0,0,1-5.66,3.26Z' />
      </svg>
    </CodeWrapper>
)

const ScrollArrow = () => (
  <ScrollContainer pages={0.35} offset={0.05} speed={-0.1}>
    <Fade bottom delay={450}>
      <Arrow to={`/${location.pathname}/#about`}>
        <FontAwesomeIcon icon={faAngleDoubleDown} />
      </Arrow>
    </Fade>
  </ScrollContainer>
)

const Hero = ({ offset }) => (
  <Container speed={0.7} offset={offset}>
    <Wrapper>
      <Title>Hello,<br />I'm Brett<br />Stevenson<span className='accent'>.</span></Title>
      <Subtitle>
        <Typed
          style={typedStyle} strings={[
            'I am a Software Engineer',
            'I am a UI/UX Designer',
            'I am a Code Monkey',
            'I am a Full-Stack Developer',
            '. . .^1000',
            'I like to build stuff<span class="accent-text">.</span>',
            ]}
            typeSpeed={40} backSpeed={30}
            smartBackspace />
      </Subtitle>
      <Code />
      <ScrollArrow />
    </Wrapper>
  </Container>
)

export default Hero

Hero.propTypes = {
  offset: PropTypes.number.isRequired,
}
