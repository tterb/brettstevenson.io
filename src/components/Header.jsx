import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const HeaderContent = styled.div`
  height: 47vh !important;
  z-index: -9;
  @media (min-width: 600px) {
    height: 50vh !important;
  }
  @media (min-width: 800px) {
    height: 50vh !important;
    max-height: 400px !important;
  }
`

const Header = ({ children, ...props }) => {
  const full = (props.full ? ' w-full' : '')
  return (
    <HeaderContent className='header flex justify-center items-center text-2xl w-9/10 max-w-250 mx-auto py-2 md:w-4/5 md:py-12 lg:py-16 xxl:w-2/3'>
      <div className={`relative w-9/10 md:w-4/5 xl:w-5/6 mr-auto${full}`}>
        {children}
      </div>
    </HeaderContent>
  )
}
Header.propTypes = {
  full: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Header
