import React from 'react'
import PropTypes from 'prop-types'
import tw from 'tailwind.macro'
import styled from 'styled-components'
import { ParallaxLayer } from 'react-spring/renderprops-addons'


const HeaderContent = styled(ParallaxLayer)`
  ${tw`p-2 px-8 md:p-12 lg:p-16 justify-center items-center flex z-50`};
  @media (min-width: 400px) {
    height: 40vh !important;
  }
  @media (min-width: 600px) {
    height: 45vh !important;
  }
`

const Wrapper = styled.div`
  ${tw`relative w-full mt-8 xl:w-5/6`};
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
