import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { colors } from '../../tailwind'
import PropTypes from 'prop-types'
// Elements
import { Divider } from '../elements/Dividers'
import Content from '../elements/Content'
import Inner from '../elements/Inner'
import { Title } from '../elements/Titles'
// Components
import Cube from '../components/Cube'
// Images
import avatar from '../images/me.png'


const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-0 md:mt-4 px-2`}
`
const Avatar = styled.img`
  ${tw`rounded-full w-1/2 md:w-48 xl:h-auto`}
  box-shadow: 0 5px 30px 0 rgba(0,0,0,0.3), 0 1px 15px 0 rgba(0,0,0,0.25);
`
const AboutSub = styled.span`
  ${tw`text-white pt-8 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl xs:hidden md:block`}
`
const AboutDesc = styled.p`
  ${tw`text-grey-light xs:text-xl lg:text-2xl font-sans pt-4 md:pt-6`}
  line-height: 1.45;
`

const About = ({ offset, factor }) => (
  <>
    <Content id='about' offset={offset} speed={0.25}>
      <Inner>
        <Cube color='blue' />
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt='Brett Stevenson' />
          <AboutSub>
            The English language can not fully capture the depth and complexity of my thoughts. So I choose to incorporate
            Emojis into my speech to better express myself. 😜
          </AboutSub>
        </AboutHero>
        <AboutDesc>
           I'm a full-stack developer with a passion for experimenting with new frameworks and platforms, while striving to create tools that myself and others can enjoy. I have experience working in a variety of languages, though I'm particularly found of <a href='https://github.com/tterb?utf8=%E2%9C%93&tab=repositories&q=&type=&language=python'>Python</a>, <a href='https://github.com/tterb?utf8=%E2%9C%93&tab=repositories&q=&type=&language=javascript'>Javascript</a>, and <a href='https://github.com/tterb?utf8=%E2%9C%93&tab=repositories&q=&type=&language=java'>Java</a>.
        </AboutDesc>
      </Inner>
    </Content>
    <Divider bg={colors['blue-grey']} clipPath='polygon(0 16%, 100% 4%, 100% 82%, 0 94%)' offset={`${offset+0.019}`} factor={factor} speed={0.35} />
  </>
)

About.propTypes = {
  offset: PropTypes.number.isRequired,
}

export default About

// I enjoy using technology to provide unique and memorable experiences.

// As a designer. I'm passionate about bridging the gap between intent and realization, while making for an enjoyable ride

//As a developer, I have experience working in both front and back-end development and enjoy experimenting with new frameworks and platforms, while striving to create tools that myself and others can enjoy.  
