import React from 'react'
import PropTypes from 'prop-types'
import { Divider, DividerMiddle } from '../elements/Dividers'
import Content from '../elements/Content'
import Inner from '../elements/Inner'
import { UpDown, UpDownWide } from '../styles/animations'
import { colors } from '../../tailwind'
import SVG from '../components/SVG'

const Projects = ({ children, offset }) => (
  <>
    <DividerMiddle
      bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
      speed={-0.05}
      offset={`${offset}.025`}
      factor={2}
    />
    <Content speed={0.25} offset={`${offset}.05`} factor={2}>
      <Inner>{children}</Inner>
    </Content>
    <Divider speed={0.1} offset={`${offset-1}.99`} factor={2}>
      <UpDown>
        <SVG icon="box" width={6} fill={colors.white} left="15%" top="77%" />
        <SVG icon="cross" width={8} fill={colors.teal} left="70%" top="20%" />
        <SVG icon="triangle" width={8} stroke={colors.purple} left="25%" top="5%" />
        <SVG icon="circle" hiddenMobile width={24} fill={colors.white} left="17%" top="60%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="arrowUp" hiddenMobile width={16} fill={colors.green} left="20%" top="90%" />
        <SVG icon="triangle" width={12} stroke={colors.indigo} left="90%" top="25%" />
        <SVG icon="circle" width={16} fill={colors.yellow} left="70%" top="85%" />
        <SVG icon="triangle" hiddenMobile width={16} stroke={colors.teal} left="18%" top="75%" />
        <SVG icon="circle" width={6} fill={colors['grey-darker']} left="78%" top="5%" />
        <SVG icon="cross" hiddenMobile width={8} fill={colors.green} left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="circle" width={6} fill={colors['grey-light']} left="4%" top="20%" />
      <SVG icon="circle" width={12} fill={colors.pink} left="20%" top="60%" />
      <SVG icon="box" width={6} fill={colors.orange} left="10%" top="10%" />
      <SVG icon="box" width={12} fill={colors.yellow} left="29%" top="26%" />
      <SVG icon="hexa" width={16} stroke={colors['grey-light']} left="75%" top="30%" />
      <SVG icon="hexa" width={8} stroke={colors.yellow} left="80%" top="70%" />
    </Divider>
  </>
)

export default Projects

Projects.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
