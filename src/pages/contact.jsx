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

import avatar from '../images/me.png'
import '../styles/main.scss'


const Contact = () => (
  <>
  <Layout />
  <Parallax pages={2}>
    <Nav active={'contact'} items={['Home','Blog','Contact']}/>
    <Cube/>
    <Title>Get in touch</Title>
    <Footer offset={1} />
  </Parallax>
  </>
)

export default Contact