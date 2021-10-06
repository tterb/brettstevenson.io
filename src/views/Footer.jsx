import React from 'react'
import styled from 'styled-components'
// Icons
import { Circle } from '@styled-icons/fa-solid'
import { Deviantart, Dribbble, Github, LinkedinIn, Twitter } from '@styled-icons/fa-brands'
// Components
import PageLink from 'components/PageLink'
// Elements
// import Divider from 'elements/Dividers'
// Styles
import { waveAnimation } from 'styles/animations'


const WavePath = styled.path`
  ${waveAnimation('20s')};
`

const waveStyle = {
  height: '40vh',
  filter: 'drop-shadow(0px 0px 24px rgba(0,0,0,0.25))',
}

const FooterWrapper = styled.div`
  .gatsby-icon {
    &:hover svg path {
      fill: #7643A9;
    }
  }
`

const iconStyle = {
  width: '1.1em',
  height: '1.1em',
}

const GatsbyIcon = () => (
  <svg xmlns='https://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32' className='inline-block relative fill-current text-gray-600 ml-2' style={iconStyle}><path d='M15.9554.0891A15.9555,15.9555,0,1,0,31.9109,16.0446,15.9555,15.9555,0,0,0,15.9554.0891ZM3.4284,16.2109,15.7891,28.5716A12.528,12.528,0,0,1,3.4284,16.2109ZM18.76,28.2584,3.7416,13.24A12.531,12.531,0,0,1,26.085,8.671L24.35,10.2016a10.23,10.23,0,0,0-18.0141,2.36L19.438,25.6638a10.249,10.249,0,0,0,6.4484-7.1646H20.4557V16.0446h8.0289A12.5338,12.5338,0,0,1,18.76,28.2584Z' transform='translate(0 -0.0891)' /></svg>
)

const SocialLink = ({ label, link, icon }) => (
  <li className='inline mr-2'>
    <a
      className='text-base-700 border-b-0 transition-all duration-200 ease-in-out hover:text-base-900 focus:text-base-900'
      href={link}
      aria-label={label}
      target='_blank'
      rel='noopener noreferrer'
    >
      { icon }
    </a>
  </li>
)

const Footer = () => {

  const getCurrentYear = () => {
    const date = new Date()
    return date.getFullYear()
  }

  return (
    <footer className='relative flex w-full justify-center items-center -mt-16 py-16 lg:py-24 z-999' role='contentinfo'>
      <div className='absolute fill-base-300 w-full bottom-0 z-999'>
        <div className='absolute top-0 left-0 bottom-0 w-full h-full' style={{ transform: 'matrix(1, 0, 0, -1, 0, 0)' }}>
          <div className='relative h-full top-0'>
            <svg
              className='fill-base-300 w-full max-h-80'
              xmlns='https://www.w3.org/2000/svg'
              viewBox='0 0 800 338.05'
              preserveAspectRatio='none'
              style={waveStyle}
            >
              <WavePath>
                <animate attributeName='d' values='M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z' repeatCount='indefinite' dur='30s' />
              </WavePath>
            </svg>
          </div>
        </div>
      </div>
      <FooterWrapper className='relative font-sans text-xxs text-gray-600 text-center top-10 sm:top-14 md:top-16 lg:top-24 p-6 px-4 z-9999'>
        <ul className='list-reset text-3xl mt-0 mb-4`'>
          <SocialLink
            link='https://github.com/tterb'
            label='Check out my GitHub'
            icon={<Github size='1em' />}
          />
          <SocialLink
            link='https://dribbble.com/tterb'
            label='Check out my Dribbble'
            icon={<Dribbble size='1em' />}
          />
          <SocialLink
            link='https://twitter.com/bstevensondev'
            label='Check out my Twitter'
            icon={<Twitter size='1em' />}
          />
          <SocialLink
            link='https://linkedin.com/in/brett-stevenson/'
            label='Check out my LinkedIn'
            icon={<LinkedinIn size='1em' />}
          />
          <SocialLink
            link='https://deviantart.com/bstevenson'
            label='Check out my DeviantArt'
            icon={<Deviantart size='0.9em' />}
          />
        </ul>
        <div className='flex text-sm items-center align-middle pt-2'>
          &copy; {getCurrentYear()} by &nbsp;
          <PageLink className='gradient-text-green' to='/'>Brett Stevenson</PageLink>
          <Circle className='relative w-1 my-0 mx-2' size='1em' />
          <span className='flex items-center align-middle'>
            Powered by
            <a
              href='https://www.gatsbyjs.org/'
              className='gatsby-icon border-b-0 transition-all duration-300 ease-in-out'
              aria-label='Visit GatsbyJS.org'
            >
              <GatsbyIcon />
            </a>
          </span>
        </div>
      </FooterWrapper>
    </footer>
  )
}
Footer.propTypes = {}

export default Footer
