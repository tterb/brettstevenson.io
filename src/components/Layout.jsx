import React from 'react'
import PropTypes from 'prop-types'
// Components
import Nav from 'components/Nav'
import SEO from 'components/SEO'
// Views
import Footer from 'views/Footer'
// Styles
import GlobalStyle from 'styles/global'
// Hooks
import { isMobile } from 'hooks/WindowDimensions'


const Layout = ({ nav, navLogo, className, children, ...props }) => {
  const mobile = isMobile()
  return (
    <>
      <SEO />
      <GlobalStyle />
      <div className={`relative w-full${className ? ` ${className}` : ' h-full'}`}>
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
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Layout
