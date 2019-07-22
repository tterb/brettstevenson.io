import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
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


const AboutHero = styled.div`
  ${tw`flex flex-col md:flex-row items-center mt-0 md:mt-4 px-2`}
`

const Avatar = styled(Image)`
  ${tw`rounded-full w-full xl:h-auto xs:hidden sm:block`}
  box-shadow: 0 5px 30px 0 rgba(0,0,0,0.3), 0 1px 15px 0 rgba(0,0,0,0.25);
  @media (max-width: 900px) {
    min-width: 25vw;
  }
  @media (min-width: 900px) {
    max-width: 200px;
  }
`

const AboutTitle = styled(Title)`
  ${tw`xs:mb-2 sm:mb-6`}
`
const AboutSub = styled.span`
  ${tw`text-white text-2xl pt-8 xs:hidden md:block md:pt-0 md:pl-10 lg:pl-12 lg:text-3xl xl:text-4xl`}
`
const AboutDesc = styled.p`
  ${tw`text-grey-light xs:text-xl lg:text-2xl font-sans xs:pt-0 sm:pt-4  md:pt-6`}
  line-height: 1.45;
`

const About = ({ offset, factor }) => {
  const avatar = useStaticQuery(aboutQuery).file.childImageSharp;
  return (
    <>
      <Content id='about' offset={offset} speed={0.25}>
        <Inner>
          <Cube color='blue' />
          <AboutTitle>About</AboutTitle>
          <AboutHero>
            <Avatar fluid={avatar.fluid} alt='Brett Stevenson' />
            <AboutSub>
              The English language can not fully capture the depth and complexity of my thoughts. So I choose to incorporate
              Emojis into my speech to better express myself 😜
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
}

About.propTypes = {
  offset: PropTypes.number.isRequired,
}

const aboutQuery = graphql`
  query {
    file(name: {eq: "me"}) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default About

// I enjoy using technology to provide unique and memorable experiences.

// As a designer. I'm passionate about bridging the gap between intent and realization, while making for an enjoyable ride

//As a developer, I have experience working in both front and back-end development and enjoy experimenting with new frameworks and platforms, while striving to create tools that myself and others can enjoy.  
