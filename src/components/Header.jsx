import React from 'react'
import PropTypes from 'prop-types'
import tw from 'tailwind.macro'
import styled from 'styled-components'
import { ParallaxLayer } from 'react-spring/renderprops-addons'


const HeaderContent = styled(ParallaxLayer)`
  ${tw`flex justify-center items-center text-2xl p-2 px-8 md:p-12 md:px-20 lg:py-16 lg:px-22`}
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

const Wrapper = styled.div`
  ${tw`relative w-4/5 mr-auto xl:w-5/6`}
`

const Header = ({ children, offset, speed, style}) => (
  <>
    <HeaderContent className='header' speed={speed} offset={offset}>
      <Wrapper>{children}</Wrapper>
    </HeaderContent>
  </>
)

Header.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}

export default Header
