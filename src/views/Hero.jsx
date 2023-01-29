import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Fade } from 'react-awesome-reveal'
// Icons
import { AngleDoubleDown } from '@styled-icons/fa-solid'
// Elements
import { Subtitle } from 'elements/Titles'
import { Typed } from 'components/Typed'


const Title = styled.h1`
  letter-spacing: -2px;
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
  @media screen and (max-width: 420px) {
    font-size: 17vw;
  }
`

const CodeWrapper = styled.div`
  svg {
    fill: rgba(255,255,255,0.1);
    transform: rotate(10deg);
  }
`

const typedStyle = {
  color: `rgba(255,255,255,0.6)`,
  fontWeight: 400,
}

const Arrow = styled(Link)`
  font-size: 2.75rem;
`

const Code = () => (
  <CodeWrapper className='relative w-full justify-center items-center top-16 -left-28 md:top-6 md:-left-16 xl:left-0 py-6 md:py-8 lg:py-24 z-5'>
    <svg xmlns='https://www.w3.org/2000/svg' viewBox='0 0 210 168' className='code-svg text-white w-40 h-40 top-18 right-0 sm:top-22 sm:right-10 md:w-64 md:h-64 md:top-24 md:left-104 lg:w-68 lg:h-68 lg:top-28 m-0 ml-2 z-0'>
      <path d='M50.9,124.77,11,85.59a3.93,3.93,0,0,1-.54-5.44,2.31,2.31,0,0,1,.54-.54L50.79,39.88a4.53,4.53,0,0,1,6.41-.12h0l.12.12,7.94,7.94a4.53,4.53,0,0,1,.12,6.41h0l-.12.12L38.05,80.91a2.1,2.1,0,0,0,0,3l0,0,27.1,26.34c1.85,1.74,2.72,3.81.11,6.53l-7.84,7.94A4.63,4.63,0,0,1,50.9,124.77Z' />
      <path d='M158.09,124.77,199,84.61c1.85-1.85,2-3.7,0-5.55L158.53,38.69a4.53,4.53,0,0,0-6.41-.12h0l-.12.12L144,47.29a4.53,4.53,0,0,0-.12,6.41h0l.12.12,26.88,26.87a2.1,2.1,0,0,1,0,3l0,0-27,26.45a4.62,4.62,0,0,0-.11,6.53l7.84,7.94a4.46,4.46,0,0,0,6.28.4Z' />
      <path d='M92.53,157.64l-11.86-3.16a4.58,4.58,0,0,1-3.28-5.58h0v-.07l37-136.47A4.58,4.58,0,0,1,120,9.06h.1l11.86,3.16a4.58,4.58,0,0,1,3.28,5.58h0v.07l-37,136.47a4.68,4.68,0,0,1-5.66,3.26Z' />
    </svg>
  </CodeWrapper>
)

const ScrollArrow = ({ location }) => (
  <div
    className='relative text-center w-1/2 top-0 sm:-top-8 mx-auto my-2 mt-18 md:mt-6 xl:mt-2'
  >
    <Fade direction='up' delay={450}>
      <Arrow
        className='relative text-white text-opacity-20 hover:text-white hover:text-opacity-60 focus:text-white focus:text-opacity-60 text-center mx-auto my-2 transition-color duration-300 ease-in-out cursor-pointer z-999'
        aria-label='Scroll Down'
        to={`${location.pathname}#about`}
      >
        <AngleDoubleDown size='1em' />
      </Arrow>
    </Fade>
  </div>
)

const Hero = (props) => (
  <div className='flex flex-col p-6 justify-center items-center min-h-160 top-0 z-50 md:p-16 lg:p-24 lg:pt-28'>
    <div className='relative flex flex-row w-full -top-8 sm:-top-14 mx-2 mt-16 sm:mx-0 sm:mt-32 md:mt-24 lg:mt-12'>
      <div className='flex flex-col'>
        <Title className='font-title font-bold text-white text-opacity-95 leading-none w-full text-6xl md:text-7xl lg:text-8xl xl:text-9xl mt-4 mb-6 ml-0 lg:mt-6'>
          Hello,<br />
          I'm Brett<br />
          Stevenson<span className='text-accent accent-dot'>.</span>
        </Title>
        <Subtitle>
          <Typed
            typeSpeed={40}
            backSpeed={30}
            smartBackspace
            style={typedStyle}
            strings={[
              'I am a Software Engineer',
              'I am a Designer',
              'I am a Code Monkey',
              'I am a Full-Stack Developer',
              '. . .^1000',
              'I like to build stuff<span class="accent-text">.</span>',
              ]}
            />
        </Subtitle>
      </div>
      <Code />
    </div>
    <ScrollArrow location={props.location} />
  </div>
)
Hero.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default Hero
