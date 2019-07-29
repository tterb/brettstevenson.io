import React from 'react'
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
import '../styles/main.scss'


const Index = () => {
  let pages = 3.85
  let mobile = false
  let footerOffset = pages-0.325
  if(typeof window !== 'undefined') {
    const { height, width } = useWindowDimensions()
    if(width <= 420) {
      pages = pages*1.025
      footerOffset = pages-(0.3*(width/420))
      mobile = true
    }
  }
  return (
    <>
      <Layout />
      <Nav logo={false} mobile={mobile} />
      <Parallax pages={pages}>
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
