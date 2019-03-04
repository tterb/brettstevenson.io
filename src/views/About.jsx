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

import avatar from '../images/me.png'


const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-4`};
`
const Avatar = styled.img`
  ${tw`rounded-full w-48 xl:w-64 shadow-lg h-auto`};
`
const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`
const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-4 md:pt-8`};
`

const About = ({ offset }) => (
  <>
    <Content speed={0.2} offset={`${offset}`} id='about'>
      <Inner>
        <Cube color='blue' />
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt='Brett Stevenson' />
          <AboutSub>
            The English language can not fully capture the depth and complexity of my thoughts. So I'm incorporating
            Emoji into my speech to better express myself. 😜
          </AboutSub>
        </AboutHero>
        <AboutDesc>
           As a developer, I have experience working in both front and back-end development and enjoy experimenting with new frameworks and platforms, while striving to create tools that myself and others can enjoy.  
        </AboutDesc>
      </Inner>
    </Content>
    <Divider bg='#23262b' clipPath='polygon(0 16%, 100% 4%, 100% 82%, 0 94%)' speed={0.1} offset={`${offset-0.001}`} factor={1.25} />
  </>
)

export default About

About.propTypes = {
  // children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
