import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { colors } from '../../tailwind'
import { Divider } from '../elements/Dividers'
import Content from '../elements/Content'
import { UpDown, UpDownWide } from '../styles/animations'
import SVG from '../components/SVG'

const Wrapper = styled.div`
  ${tw`w-full xl:w-2/3`};
  position: relative;
  top: -2em;
`

const Hero = ({ children, offset }) => (
  <>
    <Divider className='hero' speed={0.2} offset={`${offset}`}>
      <UpDown>
        <SVG icon="triangle" hiddenMobile width={48} stroke={colors.red} left="10%" top="20%" />
        <SVG icon="hexa" width={32} stroke={colors.indigo} left="65%" top="70%" />
        <SVG icon="box" width={6} fill={colors['grey-darker']} left="60%" top="15%" />
        <SVG icon="circle" width={16} fill={colors['grey-darker']} left="20%" top="85%" />
        <SVG icon="cross" hiddenMobile width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="arrowUp" hiddenMobile width={16} fill={colors['blue-dark']} left="80%" top="10%" />
        <SVG icon="triangle" width={12} stroke={colors['grey-darkest']} left="91%" top="50%" />
        <SVG icon="triangle" width={16} stroke={colors['grey-darkest']} left="35%" top="65%" />
        <SVG icon="circle" width={6} fill={colors['grey-darkest']} left="80%" top="10%" />
        <SVG icon="cross" hiddenMobile width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="circle" hiddenMobile width={24} fill={colors['grey-darker']} left="5%" top="70%" />
      <SVG icon="circle" width={6} fill={colors['grey-darkest']} left="4%" top="20%" />
      <SVG icon="circle" width={12} fill={colors['grey-darkest']} left="50%" top="60%" />
      <SVG icon="cross" width={8} fill={colors['grey-dark']} left="90%" top="90%" />
      <SVG icon="cross" hiddenMobile width={24} fill={colors['grey-darker']} left="40%" top="80%" />
      <SVG icon="triangle" width={8} stroke={colors['grey-darker']} left="25%" top="5%" />
      <SVG icon="circle" width={64} fill={colors.green} left="95%" top="8%" />
      <SVG icon="box" hiddenMobile width={64} fill={colors.purple} left="5%" top="90%" />
      <SVG icon="box" width={6} fill={colors.yellow} left="10%" top="10%" />
      <SVG icon="box" width={12} fill={colors['grey-darkest']} left="40%" top="25%" />
      <SVG icon="hexa" width={16} stroke={colors['grey-darker']} left="5%" top="57%" />
      <SVG icon="circle" width={4} fill={colors['grey-light']} left="70%" top="44%" />
    </Divider>
    <Content className='hero' speed={0.4} offset={offset}>
      <Wrapper>{children}</Wrapper>
    </Content>
  </>
)

export default Hero

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
