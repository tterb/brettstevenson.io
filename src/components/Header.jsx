import React from 'react'
import PropTypes from 'prop-types'
import tw from 'tailwind.macro'
import styled from 'styled-components'
import { ParallaxLayer } from 'react-spring/renderprops-addons'


const HeaderContent = styled(ParallaxLayer)`
  ${tw`p-2 px-8 md:p-12 lg:py-16 lg:px-22 justify-center items-center flex z-50`};
  /* background: #161719; */
  @media (min-width: 400px) {
    height: 40vh !important;
  }
  @media (min-width: 600px) {
    height: 45vh !important;
  }
`

const Wrapper = styled.div`
  ${tw`relative w-4/5 mt-8 mr-auto xl:w-5/6`};
`

const Header = ({ children, offset, speed, style}) => (
  <>
    <HeaderContent className='header' speed={speed} offset={offset} style={style}>
      <Wrapper>{children}</Wrapper>
    </HeaderContent>
  </>
)

export default Header

Header.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
