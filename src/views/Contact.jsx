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
// Hooks
import useWindowDimensions from '../hooks/WindowDimensions'


const ContactTitle = styled(Title)`
  ${tw`leading-tighter`}
  font-size: 4.5rem;
`

const ContactText = styled.p`
  ${tw`text-grey font-sans text-xl mt-3 ml-2 sm:text-2xl md:text-2xl lg:text-3xl sm:leading-tight`}
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

const Contact = ({ offset, factor }) => {
  const { height, width } = useWindowDimensions()
  if(width <= 500) {
    offset = offset+(offset*0.04)
  }
  return (
    <Content offset={offset} factor={factor} speed={0.55}>
      <Inner>
        <Cube color='purple' />
        <ContactTitle>Get in touch</ContactTitle>
        <ContactText>
          Say <PageLink to='./contact'>Hello</PageLink> or find me on other platforms:{' '}
          <a href='https://github.com/tterb' aria-label='GitHub' target='_blank'>GitHub</a> &{' '}
          <a href='https://www.dribbble.com/tterb/' aria-label='Dribbble' target='_blank'>Dribbble</a>
        </ContactText>
      </Inner>
    </Content>
  )
}

Contact.propTypes = {
  offset: PropTypes.number.isRequired,
}

export default Contact
