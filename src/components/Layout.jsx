import React from 'react'
import PropTypes from 'prop-types'
// Components
import Nav from 'components/Nav'
import SEO from 'components/SEO'
// Views
import Footer from 'views/Footer'
// Styles
import GlobalStyle from 'styles/global'


const Layout = ({ nav, navLogo, windowSize, className, children, ...props }) => {
  return (
    <>
      <SEO />
      <GlobalStyle />
      <div className={`relative w-full${className ? ` ${className}` : ' h-full'}`}>
        {nav ?
          <Nav
            showLogo={navLogo} 
            windowSize={windowSize} 
          />
        : null }
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
  windowSize: PropTypes.object.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Layout
