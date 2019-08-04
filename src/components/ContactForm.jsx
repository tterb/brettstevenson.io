import React from 'react'
import upperFirst from 'lodash/upperFirst'
import tw from 'tailwind.macro'
import { accent, accentHover } from '../../tailwind'
import styled from 'styled-components'

const Form = styled.form`
  ${tw`text-left w-full mt-8 mx-auto md:w-9/10 md:ml-0 xl:w-5/6`}
`

const InputWrapper = styled.div`
  ${tw`relative mb-6`}
  input, textarea {
    ${tw`w-9/10 text-left text-lg border-none outline-none py-2 px-4 pl-1`}
    background: transparent;
    color: rgba(255,255,255,0.8);
    -webkit-text-fill-color: rgba(255,255,255,0.8);
    line-height: 1.2;
    transition: all 350ms ease-in-out;
    &::placeholder, &::-webkit-input-placeholder {
      color: rgba(255,255,255,0.4) !important;
    }
    + .focus-input::after {
      top: 8px;
      left: 1px !important;
    }
    &:focus {
      padding-top: 0.75rem;
      + .focus-input::before {
        background: linear-gradient(to bottom right, SlateBlue 35%, DeepSkyBlue 65%);
      }
      + .focus-input::after {
        color: #888;
        top: -15px;
        left: 1px;
        transition: all 400ms ease-in-out;
      }
    }
  }
  textarea {
    min-height: 8rem;
  }
  &.has-input {
    margin-top: 0.25rem;
    input, textarea {
      padding-top: 0.75rem;
    }
    input + .focus-input::after,
    textarea + .focus-input::after {
      color: #888;
      top: -15px;
      left: 1px;
    }
    textarea, textarea:focus {
      margin-top: 0.25rem;
    }
  }
  &:focus-within {
    margin-top: 0.25rem;
  }
`

const FocusLine = styled.span`
  ${tw`block w-full md:w-4/5 h-full pin-t pin-l overflow-hidden md:w-9/10`}
  pointer-events: none;
  &::before {
    ${tw`block w-full pin-l overflow-hidden`}
    background: rgba(255,255,255,0.3);
    content: '';
    height: 2px;
    bottom: -2px;
    transition: all 400ms ease-in-out;
  }
  &::after {
    ${tw`block absolute text-lg w-full pin-t overflow-hidden`}
    color: #666;
    content: attr(data-placeholder);
    line-height: 1.2;
    transition: all 400ms ease-in-out;
  }
`

const ContactInput = (props) => (
  <InputWrapper className={`contact-input ${props.value !== '' ? 'has-input' : ''}`}>
    <input type={props.type}
           name={props.name}
           value={props.value}
           onChange={props.onChange} />
    <FocusLine className='focus-input' data-placeholder={upperFirst(props.name)} />
  </InputWrapper>
)

const ContactMessage = (props) => (
  <InputWrapper className={`contact-input ${props.value !== '' ? 'has-input' : ''}`}>
    <textarea name={props.name}
           value={props.value}
           onChange={props.onChange} />
    <FocusLine className='focus-input' data-placeholder={upperFirst(props.name)} />
  </InputWrapper>
)

const SubmitBtn = styled.button`
  ${tw`block text-lg font-semibold text-center h-auto border-none outline-none cursor-pointer mt-12 pl-1 pb-5 px-5 py-3 xs:w-1/2 md:w-1/4`}
  background: ${accent};
  color: rgba(255,255,255,0.9);
  text-shadow: 0 1px 1px rgba(0,0,0,0.4);
  max-width: 175px;
  border-radius: 4px;
  transition: all 350ms ease-in-out;
  &:hover, &:active, &:focus {
    background: #DF3028;
    text-shadow: 0 1px 2px rgba(0,0,0,0.5);
  }
`

class ContactForm extends React.Component {
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
      <Form accept-charset='UTF-8' action='https://usebasin.com/f/9d19a5ddd1f8' method='POST'>
        <ContactInput
          type={'text'}
          name={'name'}
          placeholder={'Name'}
          value={this.state.name}
          onChange={this.handleInputChange} />
        <ContactInput
          type={'email'}
          name={'email'}
          placeholder={'Email'}
          value={this.state.email}
          onChange={this.handleInputChange} />
        <ContactInput
          type={'text'}
          name={'subject'}
          placeholder={'Subject'}
          value={this.state.subject}
          onChange={this.handleInputChange} />
        <ContactMessage 
          name={'message'}
          placeholder={'Message'}
          value={this.state.message}
          onChange={this.handleInputChange} />
        <SubmitBtn type='submit'>Submit</SubmitBtn>
      </Form>
    )
  }
}

export default ContactForm
