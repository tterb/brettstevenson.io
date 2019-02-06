import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { colors } from '../../tailwind'
import { Parallax } from 'react-spring/addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import Nav from '../components/Nav'
import SVG from '../components/SVG'
import Cube from '../components/Cube'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Footer from '../views/Footer'

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faDeviantart, faTwitter, faDribbble, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import avatar from '../images/me.png'
import '../styles/main.scss'


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

const Contact = () => (
  <>
  <Layout />
  <Parallax pages={2}>
    <Nav active={'contact'} items={['Home','Blog','Contact']}/>
    <Cube/>
    <Title>Get in touch</Title>
    <Footer offset={1}>
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

export default Contact