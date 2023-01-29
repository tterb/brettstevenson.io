import React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage } from 'gatsby-plugin-image'
// Elements
import Divider from 'elements/Dividers'
import Content from 'elements/Content'
import Inner from 'elements/Inner'
import { SectionTitle } from 'elements/Titles'
// Components
import Cube from 'components/Cube'


const avatarStyle = {
  boxShadow: '0 5px 30px 0 rgba(0,0,0,0.3), 0 1px 15px 0 rgba(0,0,0,0.25)',
}

const About = ({ id, avatar, isMobile }) => (
  <Divider
    className='flex relative bg-base-300'
    direction='right'
    offset={12}
  >
    <Content id={id}>
      <Inner>
        <div className='section-title flex items-baseline mb-2 sm:mb-0'>
          <Cube color='blue' />
          <SectionTitle>About</SectionTitle>
        </div>
        <div className='flex flex-col md:flex-row items-center mt-0 md:pt-2 px-2'>
          <GatsbyImage
            className='hidden sm:block w-1/2 md:w-full min-w-44 h-auto max-w-80 md:max-w-60 xl:max-w-120 rounded-full'
            image={avatar}
            alt='Brett Stevenson'
            style={avatarStyle}
          />
          <span className='text-white text-xl font-medium leading-tighter pt-8 hidden md:block md:pt-0 md:pl-10 lg:pl-12 lg:text-2xl xl:text-3xl'>
            The English language can not fully capture the depth and complexity of my thoughts. So I choose to incorporate
            Emojis into my speech to better express myself 😜
          </span>
        </div>
        <p className='text-gray-700 text-lg lg:text-xl font-sans leading-normal pt-8 md:pt-6 lg:pt-8'>
            I'm a full-stack engineer with a passion for using technology to create unique and memorable experiences. I have experience working in a variety of languages, but I'm particularly fond of <a className='gradient-text-green text-white font-semibold' href='https://github.com/tterb?utf8=%E2%9C%93&tab=repositories&q=&type=&language=javascript'>Javascript</a> and <a className='gradient-text-green text-white font-semibold' href='https://github.com/tterb?utf8=%E2%9C%93&tab=repositories&q=&type=&language=python font-medium'>Python</a>.
        </p>
      </Inner>
    </Content>
  </Divider>
)
About.propTypes = {
  id: PropTypes.string.isRequired,
  avatar: PropTypes.object.isRequired,
  isMobile: PropTypes.bool.isRequired,
}

export default About

// I enjoy using technology to create unique and memorable experiences.

// As a designer. I'm passionate about bridging the gap between intent and realization, while making for an enjoyable ride

// As a developer, I have experience working in both front and back-end development and enjoy experimenting with new frameworks and platforms, while striving to create tools that myself and others can enjoy.
