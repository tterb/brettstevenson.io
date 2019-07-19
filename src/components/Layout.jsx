import React from 'react'
import SEO from './SEO'
// Styles
import GlobalStyle from '../styles/global'
import 'typeface-titillium-web'

const Layout = () => {
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
