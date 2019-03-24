import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { colors, accent } from '../../tailwind'
import PropTypes from 'prop-types'
import AniLink from 'gatsby-plugin-transition-link/AniLink';
// Elements
import { Divider } from '../elements/Dividers'
import Content from '../elements/Content'
import Inner from '../elements/Inner'
import { Title } from '../elements/Titles'
// Components
import Cube from '../components/Cube'


const ContactText = styled.p`
  ${tw`text-grey font-sans text-xl mt-3 md:text-2xl lg:text-3xl`};
  margin-block-start: 0;
  margin-block-end: 110px;
  a {
    color: #fff;
    &:hover {
      color: ${accent};
    }
  }
`

const Contact = ({ offset }) => (
  <>
    <Content offset={offset} factor={0.35} speed={0.65}>
      <Inner>
        <Cube color='purple' />
        <Title>Get in touch</Title>
        <ContactText>
          Say <AniLink cover bg={colors['blue-black']} duration={0.75} direction='left' to={'./Contact'}>Hi</AniLink> or find me on other platforms:{' '}
          <a href='https://github.com/tterb' aria-label='GitHub'>GitHub</a> &{' '}
          <a href='https://www.dribbble.com/tterb/' aria-label='Dribbble'>Dribbble</a>
        </ContactText>
      </Inner>
    </Content>
  </>
)

export default Contact

Contact.propTypes = {
  offset: PropTypes.number.isRequired,
}
