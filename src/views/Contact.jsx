import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { accent } from '../../tailwind'
// Elements
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

const Contact = (props) => {
  const { height, width } = useWindowDimensions()
  const factor = props.factor
  let offset = props.offset
  if (width <= 500)
    offset += (offset * 0.04)

  return (
    <Content offset={offset} factor={factor} speed={0.55}>
      <Inner>
        <Cube color='purple' />
        <ContactTitle>Get in touch</ContactTitle>
        <ContactText>
          <PageLink to='/contact'>Say Hello</PageLink> or find me on other platforms:{' '}
          <a href='https://github.com/tterb' aria-label='GitHub' target='_blank' rel='noopener noreferrer'>GitHub</a> &{' '}
          <a href='https://www.dribbble.com/tterb/' aria-label='Dribbble' target='_blank' rel='noopener noreferrer'>Dribbble</a>
        </ContactText>
      </Inner>
    </Content>
  )
}

Contact.propTypes = {
  offset: PropTypes.number.isRequired,
  factor: PropTypes.number.isRequired,
}

export default Contact
