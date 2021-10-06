import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
// Components
import PageLink from 'components/PageLink'
// Content
import messages from '../content/FourOhFour.yaml'
// Styles
import { glitchAnimation, glitchHoverAnimation } from 'styles/animations'


const Glitch = styled.div`
  ${glitchAnimation('2s')};
  left: -2px;
  text-shadow: 2px 0 #F9F8F8, -1px 0 cyan, -2px 0 green, 3px 0 rgba(255,0,0,0.7);
`

const Title = styled.h1`
  font-size: 13.25rem;
  &:hover {
    &:before, &:after {
      content: '404';
      position: absolute;
      text-align: center;
      width: 100%;
      top: 0;
      left: 0;
      opacity: 0.8;
    }
    &:before {
      ${glitchHoverAnimation('1s', '250ms', '')};
      color: #0FF;
      z-index: -2;
    }
    &:after {
      ${glitchHoverAnimation('600ms', '0ms', 'reverse')};
      color: #F05;
      z-index: -1;
    }
  }
`

const Button = styled(PageLink)`
  ${glitchAnimation('2s')};
  transform-style: preserve-3d;
  &::before, &::after {
    position: absolute;
    width: 102%;
    height: 70px;
    top: 0;
    left: 0;
    border: 4px solid;
    opacity: 0.8;
    transform-style: preserve-3d;
    transform: translateZ(-1px);
  }
  &:hover {
    &:before {
      ${glitchHoverAnimation('1s', '250ms', 'reverse')};
      content: '';
      background: #0FFA;
      border-color: #0FF;
      z-index: -2;
      transform: translateZ(-2px);
    }
    &:after {
      ${glitchHoverAnimation('600ms', '0ms', '')};
      content: '';
      background: #F05A;
      border-color: #F05;
      z-index: -1;
      transform: translateZ(-1px);
    }
  }
`

const FourOhFour = () => {

  const [message, setMessage] = useState({ text: '', buttonText: '' })

  useEffect(() => {
    let randomIndex = Math.floor(Math.random() * messages.length)
    setMessage(messages[randomIndex])
  }, [])

  return (
    <div className='absolute bg-white font-title w-full h-full top-0 left-0 -translate-y-1/2 overflow-hidden' role='main'>
      <div>
        <Title className='fourohfour-title relative font-title font-extrabold text-base-300 leading-none text-center uppercase mt-18 mb-10 z-10 cursor-default'>
          <span className='z-10'>404</span>
        </Title>
        <div className='text-xl font-normal text-center m-auto mt-4'>
          {message.text}
        </div>
        <Glitch className='glitch absolute w-full top-0 overflow-hidden'>
          <Title className='relative font-title font-extrabold text-base-300 leading-none text-center uppercase mt-18 mb-10 cursor-default'>404</Title>
        </Glitch>
      </div>
      <div className='relative flex w-auto h-auto items-center mx-auto mt-28 mb-0 z-10'>
        <Button
          className='fourohfour-button group relative block bg-white text-base-400 text-lg font-bold text-center w-max min-w-48 py-4 px-6 mx-auto transition duration-300 ease outline-none cursor-pointer hover:text-base-300'
          data-text='Home'
          label='Home'
          to='/'
        >
          {message.buttonText.length ? message.buttonText : 'Home'}
          <PageLink
            className='fourohfour-button group absolute block bg-white text-base-400 text-lg font-bold text-center w-max min-w-48 top-0 left-0 border-4 border-solid border-base-400 py-4 px-6 mx-auto transition duration-300 ease outline-none cursor-pointer hover:text-base-300'
            data-text='Home'
            label='Home'
            to='/'
          >
            {message.buttonText.length ? message.buttonText : 'Home'}
          </PageLink>
        </Button>
      </div>
    </div>
  )
}

export default FourOhFour
