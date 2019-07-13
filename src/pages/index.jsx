import React from 'react'
import get from 'lodash/get'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import colors from '../../tailwind'
import { Parallax } from 'react-spring/renderprops-addons'
// Components
import Layout from '../components/Layout'
import Nav from '../components/Nav'
// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'
import Footer from '../views/Footer'
// Hooks
import useWindowDimensions from '../hooks/WindowDimensions'
// Styles
import '../styles/normalize.scss'
import '../styles/main.scss'


const Index = () => {
  var pages = 3.85
  var footerOffset = pages-0.35
  if(typeof window !== 'undefined') {
    const { height, width } = useWindowDimensions()
    if(width <= 500) {
      pages = pages*1.025
    }
    footerOffset = pages-0.35
    if(width <= 420)
      footerOffset = pages-(0.3*(width/500))
  }
  return (
    <>
      <Layout />
      <Parallax pages={pages}>
        <Nav logo={false} />
        <Hero offset={0} />
        <About offset={0.925} factor={1.25} id='about' />
        <Projects offset={2} factor={2.2} id='projects' />
        <Contact offset={3} factor={0.35} />
        <Footer offset={footerOffset} />
      </Parallax>
    </>
  )
}

export default Index
