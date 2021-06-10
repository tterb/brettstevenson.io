import React from 'react'
import PropTypes from 'prop-types'
// Components
import Nav from 'components/Nav'
import SEO from 'components/SEO'
// Views
import Footer from 'views/Footer'
// Styles
import GlobalStyle from 'styles/global'


const Layout = ({ nav, navLogo, isMobile, className, children, ...props }) => {
  return (
    <>
      <SEO />
      <GlobalStyle />
      <div className={`relative w-full${className ? ` ${className}` : ' h-full'}`}>
        {nav ?
          <Nav showLogo={navLogo} isMobile={isMobile} />
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
  isMobile: PropTypes.bool.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Layout
