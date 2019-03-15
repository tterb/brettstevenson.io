import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { colors } from '../../tailwind'
import PropTypes from 'prop-types'
// Elements
import { Divider } from '../elements/Dividers'
import Content from '../elements/Content'
import Inner from '../elements/Inner'
import { Title } from '../elements/Titles'
// Components
import Cube from '../components/Cube'
import { waveAnimation } from '../styles/animations'


const ContactText = styled.p`
  ${tw`text-grey font-sans text-xl mt-3 md:text-2xl lg:text-3xl`};
  margin-block-start: 0;
  margin-block-end: 110px;
  a {
    color: #fff;
    &:hover {
      color: #FD5750;
    }
  }
`

const Contact = ({ offset }) => (
  <>
    <Content speed={0.65} offset={offset} factor={0.35}>
      <Inner>
        <Cube color='purple' />
        <Title>Get in touch</Title>
        <ContactText>
          Say <a href='mailto:bstevensondev@gmail.com'>Hi</a> or find me on other platforms:{' '}
          <a href='https://github.com/tterb'>GitHub</a> &{' '}
          <a href='https://www.dribbble.com/tterb/'>Dribbble</a>
        </ContactText>
      </Inner>
    </Content>
  </>
)

export default Contact

Contact.propTypes = {
  offset: PropTypes.number.isRequired,
}
