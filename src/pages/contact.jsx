import React from 'react'
import _ from 'lodash'
import tw from 'tailwind.macro'
import { accent } from '../../tailwind'
import styled from 'styled-components'
import { Parallax } from 'react-spring/renderprops-addons'
// Components
import Layout from '../components/Layout'
import Nav from '../components/Nav'
import Header from '../components/Header'
// Elements
import Content from '../elements/Content'
import { BigTitle } from '../elements/Titles'
// Views
import Footer from '../views/Footer'
// Styles
import '../styles/contact.scss'

const ContactForm = styled.form`
  ${tw`text-left mx-auto ml-4 xl:w-5/6 ml-auto`}
  @media (min-width: 400px) {
    width: 100%;
  }
  @media (min-width: 600px) {
    width: 92%;
  }
`

const ContactInput = (props) => (
  <div className={`contact-input ${props.value !== '' ? 'has-input' : ''}`}>
    <input type={props.type}
           name={props.name}
           value={props.value}
           onChange={props.onChange} />
    <span className='focus-input' data-placeholder={_.upperFirst(props.name)}></span>
  </div>
)

const ContactMessage = (props) => (
  <div className={`contact-input ${props.value !== '' ? 'has-input' : ''}`}>
    <textarea name={props.name}
           value={props.value}
           onChange={props.onChange} />
    <span className='focus-input' data-placeholder={_.upperFirst(props.name)}></span>
  </div>
)

const SubmitBtn = styled.button`
  ${tw`block h-auto font-semibold text-center border-none outline-none cursor-pointer mt-10 ml-1 mb-5 px-5 py-3 sm:w-1/3 md:w-1/4`}
  background: ${accent};
  color: rgba(255,255,255,0.9);
  text-shadow: 0 1px 1px rgba(0,0,0,0.4);
  max-width: 175px;
  border-radius: 4px;
  transition: all 350ms ease-in-out, text-shadow 400ms ease-in-out;
  outline: none;
  &:hover, &:active, &:focus, &:visited {
    background: #FE625A;
    text-shadow: 0 1px 1px rgba(0,0,0,0.4);
  }
`

class ContactPage extends React.Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }

  handleInputChange = (event) => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }
  
  render() {
    return (
      <>
        <Layout />
        <Parallax pages={1.35}>
          <Nav />
          <Header offset={0.05} factor={0.4} speed={0.7}>
            <BigTitle>Say<br/>Hello<span className='accent'>.</span></BigTitle>
          </Header>
          <Content offset={0.5} factor={0.5} speed={0.6} style={{padding: `14rem !important`}}>
            <ContactForm accept-charset='UTF-8' action='https://usebasin.com/f/9d19a5ddd1f8' method='POST'>
              <ContactInput
                type={'text'}
                name={'name'}
                placeholder={'Name'}
                value={this.state.name}
                onChange={this.handleInputChange} />
              <ContactInput
                type='email'
                name='email'
                placeholder='Email'
                value={this.state.email}
                onChange={this.handleInputChange} />
              <ContactInput
                type='text'
                name='subject'
                placeholder='Subject'
                value={this.state.subject}
                onChange={this.handleInputChange} />
              <ContactMessage 
                name='message'
                placeholder='Message'
                value={this.state.message}
                onChange={this.handleInputChange} />
              <SubmitBtn type='submit'>Submit</SubmitBtn>
            </ContactForm>
          </Content>
          <Footer offset={1.025} factor={0.5} />
        </Parallax>
      </>
    )
  }
}

export default ContactPage