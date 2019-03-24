import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import PropTypes from 'prop-types'
import Typed from 'react-typed';
// Elements
import Content from '../elements/Content'
import { BigTitle, Subtitle } from '../elements/Titles'


const Wrapper = styled.div`
  ${tw`w-full mt-0 xl:w-full mt-4`};
  position: relative;
  top: -1.5em;
  p svg {
    position: relative;
    color: rgba(255,255,255,0.6);
    font-size: 0.05em;
    width: 0.75em !important;
    top: -0.5em;
  }
`

const iconStyle = {
  position: `absolute`,
  color: `#fff`,
  fill: `rgba(255,255,255,0.1)`,
  margin: `0 0 0 0.5em`,
  transform: `rotate(10deg)`,
};

const typedStyle = {
  color: `rgba(255,255,255,0.75)`,
};

const Code = () => (
    <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 210 168" style={iconStyle} className="code-svg"><path d="M50.9,124.77,11,85.59a3.93,3.93,0,0,1-.54-5.44,2.31,2.31,0,0,1,.54-.54L50.79,39.88a4.53,4.53,0,0,1,6.41-.12h0l.12.12,7.94,7.94a4.53,4.53,0,0,1,.12,6.41h0l-.12.12L38.05,80.91a2.1,2.1,0,0,0,0,3l0,0,27.1,26.34c1.85,1.74,2.72,3.81.11,6.53l-7.84,7.94A4.63,4.63,0,0,1,50.9,124.77Z"/><path d="M158.09,124.77,199,84.61c1.85-1.85,2-3.7,0-5.55L158.53,38.69a4.53,4.53,0,0,0-6.41-.12h0l-.12.12L144,47.29a4.53,4.53,0,0,0-.12,6.41h0l.12.12,26.88,26.87a2.1,2.1,0,0,1,0,3l0,0-27,26.45a4.62,4.62,0,0,0-.11,6.53l7.84,7.94a4.46,4.46,0,0,0,6.28.4Z"/><path d="M92.53,157.64l-11.86-3.16a4.58,4.58,0,0,1-3.28-5.58h0v-.07l37-136.47A4.58,4.58,0,0,1,120,9.06h.1l11.86,3.16a4.58,4.58,0,0,1,3.28,5.58h0v.07l-37,136.47a4.68,4.68,0,0,1-5.66,3.26Z"/></svg>
)

const Hero = ({ offset }) => (
  <>
  <Content className='hero' speed={0.4} offset={offset}>
    <Wrapper>
      <BigTitle>Hello,<br/>I'm Brett<br/>Stevenson<span className='accent'>.</span></BigTitle>
      <Subtitle>
        <Typed style={typedStyle} strings={[
            'I am a Software Engineer',
            'I am a UI/UX Designer',
            'I am a Code Monkey',
            'I am a Full-Stack Developer',
            '. . .^1000',
            'I like to build stuff<span class="accent-text">.</span>',
            ]}
            typeSpeed={40} backSpeed={30}
            smartBackspace>
        </Typed>
      </Subtitle>
      <Code />
    </Wrapper>
  </Content>
  </>
)

export default Hero

Hero.propTypes = {
  offset: PropTypes.number.isRequired,
}
