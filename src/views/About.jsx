import React from 'react'
import PropTypes from 'prop-types'
import { Divider } from '../elements/Dividers'
import Content from '../elements/Content'
import Inner from '../elements/Inner'
import { UpDown, UpDownWide } from '../styles/animations'
import { colors } from '../../tailwind'
import SVG from '../components/SVG'

const About = ({ children, offset }) => (
  <>
    <Divider bg="#23262b" clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)" speed={0.1} offset={offset} factor={1.25} />
    <Divider speed={0.1} offset={`${offset-1}.8`}>
      <UpDown>
        <SVG icon="box" hiddenMobile width={6} fill={colors.blue} left="50%" top="75%" />
        <SVG icon="cross" hiddenMobile width={8} fill={colors['grey-darkest']} left="70%" top="20%" />
        <SVG icon="triangle" width={8} stroke={colors['grey-darkest']} left="25%" top="5%" />
        <SVG icon="cross" width={8} fill={colors['grey-darkest']} left="55%" top="10%" />
        <SVG icon="cross" hiddenMobile width={24} fill={colors.orange} left="80%" top="80%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="arrowUp" hiddenMobile width={16} fill={colors.purple} left="5%" top="80%" />
        <SVG icon="box" width={12} fill={colors.yellow} left="90%" top="50%" />
        <SVG icon="cross" hiddenMobile width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="circle" width={6} fill={colors.grey} left="42%" top="20%" />
      <SVG icon="circle" width={12} fill={colors['grey-darkest']} left="55%" top="55%" />
      <SVG icon="hexa" width={12} stroke={colors.green} left="75%" top="20%" />
      <SVG icon="box" width={6} fill={colors.red} left="10%" top="0%" />
      <SVG icon="box" width={12} fill={colors['grey-darkest']} left="20%" top="30%" />
      <SVG icon="hexa" width={8} stroke={colors['grey-darkest']} left="80%" top="70%" />
    </Divider>
    <Content speed={0.2} offset={`${offset}.1`}>
      <Inner>{children}</Inner>
    </Content>
  </>
)

export default About

About.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
