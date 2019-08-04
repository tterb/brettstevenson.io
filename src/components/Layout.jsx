import React from 'react'
import PropTypes from 'prop-types'
import { Parallax } from 'react-spring/renderprops-addons'
// Componemts
import Nav from './Nav'
import SEO from './SEO'
// Views
import Footer from '../views/Footer'
// Styles
import GlobalStyle from '../styles/global'
// Hooks
import { isMobile } from '../hooks/WindowDimensions'

const Layout = ({ pages, nav, navLogo, children }) => {
  require('typeface-titillium-web')
  if (typeof window !== 'undefined') {
    require('smooth-scroll')('a[href*="#"]', {
      speed: 600,
      easing: 'easeInOutCubic',
      updateURL: false,
    })
  }
  const mobile = isMobile()
  let footerScale = 0.35
  if(mobile) 
    footerScale = 0.32
  const footerOffset = pages - footerScale
  return (
    <>
      <SEO />
      <GlobalStyle />
      <Parallax pages={pages}>
        { nav ? <Nav logo={navLogo} mobile={mobile} /> : null }
        {children}
        <Footer offset={footerOffset} scale={footerScale}/>
      </Parallax>
    </>
  )
}

Layout.defaultProps = {
  nav: true,
  navLogo: true,
}

Layout.propTypes = {
  nav: PropTypes.bool,
  navLogo: PropTypes.bool,
  pages: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
}

export default Layout
