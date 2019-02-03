import React from 'react'
import PropTypes from 'prop-types'
import tw from 'tailwind.macro'
import styled from 'styled-components'
import { Divider } from '../elements/Dividers'
import Content from '../elements/Content'
import { UpDown, UpDownWide, waveAnimation } from '../styles/animations'
import { colors } from '../../tailwind'
import SVG from '../components/SVG'

const Contact = ({ children, offset }) => (
  <>
    <Content speed={0.4} offset={`${offset}`}>
      {children}
    </Content>
    <Divider speed={0.1} offset={offset}>
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
  </>
)

export default Contact

Contact.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
