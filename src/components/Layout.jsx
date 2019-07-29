import React from 'react'
// Componemts
import SEO from './SEO'
// Styles
import GlobalStyle from '../styles/global'

const Layout = () => {
  require('typeface-titillium-web')
  if (typeof window !== 'undefined') {
    require('smooth-scroll')('a[href*="#"]', {
      speed: 600,
      easing: 'easeInOutCubic',
      updateURL: false,
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
