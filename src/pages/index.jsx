import React from 'react'
// Components
import Layout from '../components/Layout'
// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'
// Hooks
import useWindowDimensions from '../hooks/WindowDimensions'
// Styles
import '../styles/main.scss'


const Index = () => {
  let pages = 3.85
  if (typeof window !== 'undefined') {
    const { height, width } = useWindowDimensions()
    if (width <= 420)
      pages *= 1.025
  }
  return (
    <Layout pages={pages} navLogo={false}>
      <Hero offset={0} />
      <About offset={0.925} factor={1.25} id='about' />
      <Projects offset={2} factor={2.2} id='projects' />
      <Contact offset={3} factor={0.35} />
    </Layout>
  )
}

export default Index
