import React from 'react'
// Componemts
import SEO from './SEO'
// Styles
import GlobalStyle from '../styles/global'

const Layout = () => {
  require('typeface-titillium-web')
  if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]', {
      speed: 400,
      easing: 'easeInOutQuad',
    })
  }
  return (
    <>
      <SEO />
      <GlobalStyle />
    </>
  )
}

export default Layout
