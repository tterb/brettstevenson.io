import React, { useState } from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { colors, accent } from '../../tailwind'
import PropTypes from 'prop-types'
// Elements
import { Divider } from '../elements/Dividers'
import Content from '../elements/Content'
import Inner from '../elements/Inner'
import { Title } from '../elements/Titles'
// Components
import PageLink from '../components/PageLink';
import Cube from '../components/Cube'


const ContactText = styled.p`
  ${tw`text-grey font-sans text-xl mt-3 ml-2 md:text-2xl lg:text-3xl`};
  margin-block-start: 0;
  margin-block-end: 110px;
  a {
    color: #fff;
    transition: all 300ms ease-in-out;
    &:hover {
      color: ${accent};
    }
  }
`

const Contact = ({ offset, factor }) => (
  <Content offset={offset} factor={factor} speed={0.65}>
    <Inner>
      <Cube color='purple' />
      <Title>Get in touch</Title>
      <ContactText>
        Say <PageLink to='./contact'>Hi</PageLink> or find me on other platforms:{' '}
        <a href='https://github.com/tterb' aria-label='GitHub'>GitHub</a> &{' '}
        <a href='https://www.dribbble.com/tterb/' aria-label='Dribbble'>Dribbble</a>
      </ContactText>
    </Inner>
  </Content>
)

Contact.propTypes = {
  offset: PropTypes.number.isRequired,
}

export default Contact
