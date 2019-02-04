import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { colors } from '../../tailwind'
import { Parallax } from 'react-spring/addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import Menu from '../components/Menu'
import SVG from '../components/SVG'
import Cube from '../components/Cube'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'
import Footer from '../views/Footer'

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faDeviantart, faTwitter, faDribbble, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import avatar from '../images/me.png'
import '../styles/main.scss'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

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
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-4 md:pt-8 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl mt-3 md:text-2xl lg:text-3xl`};
  margin-block-start: 0;
  margin-block-end: 110px;
`

const FooterWrapper = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
  z-index: -99;
  .separator {
    position: relative;
    font-size: 5px;
    top: -0.7em;
    margin: 0 1em;
  }
  .gatsby-icon {
    border-bottom: none;
    &:hover svg path {
      fill: #6E49A4;
      transition: all 300ms ease-in-out;
    }
  }
`

const SocialList = styled.ul`
  ${tw`list-reset text-3xl lg:text-4xl mt-4 mb-5`};
  li {
    display: inline;
    margin-right: 0.5em;
    a {
      color: #70818A;
      border-bottom: none;
      transition: all 350ms ease-in-out;
      &:hover {
        color: #9FAFB8;
        border-bottom: none;
      }
    }
  }
`

const iconStyle = {
  position: 'relative',
  width: '1.1em',
  height: '1.1em',
  top: '0.175em',
  margin: '0 0 0 0.5em'
};

const GatsbyIcon = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32' style={iconStyle}><path d='M15.9554.0891A15.9555,15.9555,0,1,0,31.9109,16.0446,15.9555,15.9555,0,0,0,15.9554.0891ZM3.4284,16.2109,15.7891,28.5716A12.528,12.528,0,0,1,3.4284,16.2109ZM18.76,28.2584,3.7416,13.24A12.531,12.531,0,0,1,26.085,8.671L24.35,10.2016a10.23,10.23,0,0,0-18.0141,2.36L19.438,25.6638a10.249,10.249,0,0,0,6.4484-7.1646H20.4557V16.0446h8.0289A12.5338,12.5338,0,0,1,18.76,28.2584Z' transform='translate(0 -0.0891)' fill='#9BABB4'/></svg>
)

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Menu items={['Home','Blog','Contact']}/>
      <Hero offset={0}>
        <BigTitle>
          Hi, I'm <br/> Brett <br/> Stevenson
        </BigTitle>
        <Subtitle>I'm creating noice web experiences for the next generation of consumer-facing companies.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Cube/>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title='Hyde'
            link='https://brettstevenson.io/Hyde'
            bg='linear-gradient(to right, #D4145A 0%, #FBB03B 100%)'
          >
            An Electron-based markdown editor that aims to improve the accessibility of making beautiful documents with markdown
          </ProjectCard>
          <ProjectCard
            title='yt2mp3'
            link='https://brettstevenson.io/yt2mp3'
            bg='linear-gradient(to right, #662D8C 0%, #ED1E79 100%)'
          >
            A command-line program that simplifies the process of searching, downloading and converting Youtube videos to MP3 files with metadata from the iTunes API
          </ProjectCard>
          <ProjectCard
            title='PlayMusic'
            link='https://github.com/tterb/PlayMusic'
            bg='linear-gradient(to right, #009245 0%, #FCEE21 100%)'
          >
            A Rainmeter skin that provides Google Play Music users the ability to access their music tastefully on their desktop
          </ProjectCard>
          <ProjectCard
            title='Polr'
            link='https://polr.app'
            bg='linear-gradient(to right, #D585FF 0%, #00FFEE 100%)'
          >
            A web app that aims to bring modern convenience to the democratic process.<br/>Created @ the 2018 Monterey Bay Startup Hackathon
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Cube color='blue' />
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt='Brett Stevenson' />
          <AboutSub>
            The English language can not fully capture the depth and complexity of my thoughts. So I'm incorporating
            Emoji into my speech to better express myself. {'\u1f609'}
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          You know the way you feel when you see a picture of two otters holding hands? That's how you're gonna feel
          every day. My mother cried the day I was born because she knew she’d never be prettier than me. You should
          make me your campaign manager. I was born for politics. I have great hair and I love lying. Captain? The kids
          want to know where Paulie the Pigeon is. I told them he got sucked up into an airplane engine, is that all
          right?
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Cube/>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href='mailto:bstevensondev@gmail.com'>Hi</a> or find me on other platforms:{' '}
            <a href='https://github.com/tterb'>GitHub</a> &{' '}
            <a href='https://www.instagram.com/lekoarts.de/'>Instagram</a>
          </ContactText>
        </Inner>
      </Contact>
      <Footer offset={4}>
        <FooterWrapper>
          <SocialList>
            <li><a href='https://github.com/tterb'><FontAwesomeIcon icon={faGithub}/></a></li>
            <li><a href='https://deviantart.com/bstevenson'><FontAwesomeIcon icon={faDeviantart}/></a></li>
            <li><a href='https://twitter.com/bstevensondev'><FontAwesomeIcon icon={faTwitter}/></a></li>
            <li><a href='https://dribbble.com/tterb'><FontAwesomeIcon icon={faDribbble}/></a></li>
            <li><a href='https://linkedin.com/in/brett-stevenson/'><FontAwesomeIcon icon={faLinkedinIn}/></a></li>
            <li><a href=''><FontAwesomeIcon icon={faEnvelope}/></a></li>
          </SocialList>
          &copy; 2019 by Brett Stevenson<FontAwesomeIcon className='separator' icon={faCircle}/>
          <a href='https://github.com/LekoArts/gatsby-starter-portfolio-cara'>Github Repository</a><FontAwesomeIcon className='separator' icon={faCircle}/>Powered by<a href='https://www.gatsbyjs.org/' className='gatsby-icon'><GatsbyIcon/></a>
        </FooterWrapper>
      </Footer>
    </Parallax>
  </>
)

export default Index
