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
  ${tw`p-6 md:p-12 lg:p-24 justify-center items-center flex z-50`};
  height: 40vh !important;
`

const Wrapper = styled.div`
  ${tw`w-full xl:w-2/3`};
  position: relative;
  top: -2em;
`

const Header = ({ children, offset }) => (
  <>
    <Divider className='header' speed={0.2} offset={`${offset}`}>
      <UpDown>
        <SVG icon="cross" width={8} fill={colors.teal} left="10%" top="-8%" />
        // <SVG icon="cross" hiddenMobile width={8} fill={colors['grey-darkest']} left="70%" top="20%" />
        // <SVG icon="triangle" width={8} stroke={colors['grey-darkest']} left="30%" top="8%" />
        <SVG icon="triangle" width={8} stroke={colors.yellow} left="30%" top="8%" />
        <SVG icon="box" width={12} fill={colors['grey-darker']} left="10%" top="65%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="circle" width={6} fill={colors.indigo} left="8%" top="12%" />
        <SVG icon="hexa" width={8} stroke={colors.purple} left="85%" top="0%" />
        <SVG icon="triangle" width={8} stroke={colors.red} left="90%" top="45%" />
        <SVG icon="cross" width={8} fill={colors['grey-darker']} left="45%" top="15%" />
      </UpDownWide>
      <SVG icon="circle" width={6} fill={colors.grey} left="78%" top="36%" />
      <SVG icon="circle" width={12} fill={colors['grey-darkest']} left="65%" top="63%" />
      <SVG icon="box" width={12} fill={colors['grey-darkest']} left="60%" top="30%" />
      <SVG icon="hexa" width={10} stroke={colors['grey-darker']} left="80%" top="80%" />
    </Divider>
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
