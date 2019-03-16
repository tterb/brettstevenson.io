import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { colors } from '../../tailwind'
import { Divider } from '../elements/Dividers'
import Content from '../elements/Content'
import { UpDown, UpDownWide } from '../styles/animations'
import { ParallaxLayer } from 'react-spring/addons.cjs'
import SVG from './SVG'

const HeaderContent = styled(ParallaxLayer)`
  ${tw`p-4 px-6 md:p-12 lg:p-16 px-24 justify-center items-center flex z-50`};
  height: 40vh !important;
`

const Wrapper = styled.div`
  ${tw`w-full xl:w-5/6`};
  position: relative;
`

const Header = ({ children, offset }) => (
  <>
    <HeaderContent className='header' speed={0.4} offset={offset}>
      <Wrapper>{children}</Wrapper>
    </HeaderContent>
  </>
)

export default Header

Header.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
