import React from 'react'
import PropTypes from 'prop-types'
import tw from 'tailwind.macro'
import styled from 'styled-components'
import { ParallaxLayer } from 'react-spring/renderprops-addons'


const HeaderContent = styled(ParallaxLayer)`
  ${tw`p-2 px-8 md:p-12 lg:p-16 justify-center items-center flex z-50`};
  @media (min-width: 400px) {
    height: 35vh !important;
  }
  @media (min-width: 600px) {
    height: 40vh !important;
  }
`

const Wrapper = styled.div`
  ${tw`w-full xl:w-5/6`};
  position: relative;
`

const Header = ({ children, offset, speed }) => (
  <>
    <HeaderContent className='header' speed={speed} offset={offset}>
      <Wrapper>{children}</Wrapper>
    </HeaderContent>
  </>
)

export default Header

Header.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
