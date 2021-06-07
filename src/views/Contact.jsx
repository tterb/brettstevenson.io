import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// Elements
import Content from 'elements/Content'
import Inner from 'elements/Inner'
import { Title } from 'elements/Titles'
// Components
import PageLink from 'components/PageLink';
import Cube from 'components/Cube'


const ContactTitle = styled(Title)`
  font-size: 4.5rem;
  margin-left: 0;
  @media (max-width: 420px) {
    font-size: 3.75rem;
  }
`

const ContactText = styled.p`
  margin-block-start: 0;
  margin-block-end: 1rem;
`

const Contact = ({ id }) => (
  <Content id={id} className='pb-24'>
    <Inner>
      <div className='section-title flex items-baseline'> 
        <Cube color='purple' />
        <ContactTitle className='leading-none sm:leading-tighter'>Get in touch</ContactTitle>
      </div>
      <ContactText className='text-gray-600 font-sans text-xl mt-3 ml-2 sm:text-2xl md:text-2xl lg:text-3xl sm:leading-tight'>
        <PageLink to='/contact' className='text-white hover:text-accent transition-all duration-200 ease-in-out'>
          Say Hello
        </PageLink> 
        {' '}or find me on other platforms:{' '}
        <a
          className='text-white hover:text-accent transition-all duration-200 ease-in-out'
          href='https://github.com/tterb'
          aria-label='GitHub'
          target='_blank'
          rel='noopener noreferrer'
        >GitHub</a> &{' '}
        <a
          className='text-white hover:text-accent transition-all duration-200 ease-in-out'
          href='https://www.dribbble.com/tterb/'
          aria-label='Dribbble'
          target='_blank'
          rel='noopener noreferrer'
        >Dribbble</a>
      </ContactText>
    </Inner>
  </Content>
)
Contact.propTypes = {
  id: PropTypes.string.isRequired,
}

export default Contact
