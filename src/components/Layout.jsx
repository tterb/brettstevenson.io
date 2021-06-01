import React from 'react'
import PropTypes from 'prop-types'
// Componemts
import Nav from './Nav'
import SEO from './SEO'
// Views
import Footer from '../views/Footer'
// Styles
import GlobalStyle from '../styles/global'
// Hooks
import { isMobile } from '../hooks/WindowDimensions'


const Layout = ({ nav, navLogo, children }) => {
  const mobile = isMobile()
  return (
    <>
      <SEO />
      <GlobalStyle />
      <div className='relative w-full h-full'>
        { nav ? <Nav logo={navLogo} mobile={mobile} /> : null }
        {children}
        <Footer />
      </div>
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
