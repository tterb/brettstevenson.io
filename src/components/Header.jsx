import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const HeaderContent = styled.div`
  height: 32vh !important;
  z-index: -9;
  @media (min-width: 600px) {
    height: 45vh !important;
  }
  @media (min-width: 800px) {
    max-height: 400px !important;
  }
`

const Header = ({ className, children, ...props }) => {
  const full = (props.full ? ' w-full' : '')
  return (
    <header className={`w-full mx-auto my-0${className ? ` ${className}` : ''}`} role='banner'>
      <HeaderContent className='header flex justify-center items-center text-xl w-5/6 sm:w-9/10 md:w-4/5 max-w-240 sm:h-72 h-48 mx-auto py-2 md:py-12 lg:py-16 z-min'>
        <div className={`relative w-9/10 md:w-4/5 mr-auto${full}`}>
          {children}
        </div>
      </HeaderContent>
    </header>
  )
}
Header.propTypes = {
  full: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Header
