import React from 'react'
import PropTypes from 'prop-types'
import tw from 'tailwind.macro'
import styled from 'styled-components'
import { accent } from '../../tailwind'

const Forms = styled.form`
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
  }
  &:focus-within {
    margin-top: 1rem;
    transition: all 350ms ease-in-out;
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

const TextArea = styled.textarea`
  ${tw`mt-1`}
  min-height: 8rem;
  &:focus {
    ${tw`mt-1`}
  }
`

const HoneyPot = styled.input`
  ${tw`absolute w-0 h-0 pin-t pin-l opacity-0`}
  z-index: -1;
`

const Submit = styled.button`
  ${tw`block text-lg font-semibold text-center h-auto border-none outline-none cursor-pointer mt-12 pl-1 pb-5 px-5 py-3 xs:w-1/2 md:w-1/4`}
  /* background: ${accent}; */
  background-image: linear-gradient(to top, #BF2310, ${accent}, ${accent}, ${accent});
  background-size: 100% 300%;
  color: rgba(255,255,255,0.9);
  text-shadow: 0 1px 1px rgba(0,0,0,0.4);
  max-width: 175px;
  border-radius: 4px;
  transition: all 350ms ease-in-out;
  &:hover, &:active, &:focus {
    background-position: 0% 100%;
    text-shadow: 0 1px 2px rgba(0,0,0,0.5);
    transition: all 350ms ease-in-out;
  }
`

export const Form = (props) => (
  <Forms
    method={props.method}
    name={props.name}
    data-netlify='true'
    netlify-honeypot='only_for_bots'
    accept-charset='UTF-8'>
    {/* action='success' */}
    <input type='hidden' name='form-name' value={props.name} />
    {props.children}
    <HoneyPot type='email' name='only_for_bots' />
  </Forms>
)

Form.defaultProps = {
  method: 'POST',
  name: 'contact',
  button: 'Submit',
  // action: '/success'
}
Form.propTypes = {
  method: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
  action: PropTypes.string,
  children: PropTypes.element,
}


export const Input = (props) => (
  <InputWrapper className={`contact-input ${props.value.length ? 'has-input' : ''}`}>
    <input type={props.type}
           name={props.name}
           value={props.value}
           autoComplete={props.autocomplete ? 'false' : 'true'}
           onChange={props.onChange}
           required />
    <FocusLine
      className='focus-input'
      data-placeholder={props.placeholder} />
  </InputWrapper>
)

Input.defaultProps = {
  type: 'text',
  autocomplete: false,
}
Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  autocomplete: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
}


export const Message = (props) => (
  <InputWrapper className={`contact-input ${props.value.length ? 'has-input' : ''}`}>
    <TextArea
      name={props.name}
      value={props.value}
      autoComplete={props.autocomplete ? 'false' : 'true'}
      onChange={props.onChange}
      required />
    <FocusLine
      className='focus-input'
      data-placeholder={props.placeholder} />
  </InputWrapper>
)

Message.defaultProps = {
  type: 'text',
  autocomplete: false,
}
Message.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  autocomplete: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
}


export const Button = (props) => (
  <Submit type={props.type}>
    {props.value ? props.value : props.children}
  </Submit>
)

Button.defaultProps = {
  type: 'submit',
}
Button.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  children: PropTypes.element,
}
