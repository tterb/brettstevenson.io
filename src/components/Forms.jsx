import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const InputWrapper = styled.div`
  input, textarea {
    -webkit-text-fill-color: rgba(255,255,255,0.8);
    line-height: 1.2;
    &::placeholder, &::-webkit-input-placeholder {
      color: rgba(255,255,255,0.4) !important;
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
        transition: all 200ms ease-in-out;
      }
    }
  }
  input + .focus-input::after {
    top: 8px;
    left: 1px !important;
  }
  textarea + .focus-input::after {
    top: 8px;
    left: 1px !important;
  }
  &.has-input {
    margin-top: 1.5rem;
    input + .focus-input::after,
    textarea + .focus-input::after {
      color: #888;
      top: -15px;
      left: 1px;
    }
  }
  &:focus-within {
    margin-top: 1.5rem;
    transition: all 250ms ease-in-out;
  }
`

const FocusLine = styled.span`
  &::before {
    content: '';
    display: block;
    background: rgba(255,255,255,0.3);
    width: 100%;
    height: 2px;
    left: 0;
    bottom: -2px;
    transition: all 200ms ease-in-out;
    overflow: hidden;
  }
  &::after {
    content: attr(data-placeholder);
    display: block;
    position: absolute;
    color: #666;
    font-size: 1.125rem;
    line-height: 1.2;
    width: 100%;
    top: 0;
    transition: all 200ms ease-in-out;
    overflow: hidden;
  }
`

const Submit = styled.button`
  background-image: linear-gradient(to top, #BF2310, #F2433B, #F2433B, #F2433B);
  background-size: 100% 300%;
  text-shadow: 0 1px 1px rgba(0,0,0,0.4);
  &:hover, &:active, &:focus {
    background-position: 0% 100%;
    text-shadow: 0 1px 2px rgba(0,0,0,0.5);
  }
`

export const Form = (props) => (
  <form
    method={props.method}
    name={props.name}
    data-netlify='true'
    netlify-honeypot='only_for_bots'
    acceptCharset='UTF-8'
    className={`text-left w-full my-0 mx-auto${props.className ? ` ${props.className}` : ''}`}
  >
    {/* action='success' */}
    <input type='hidden' name='form-name' value={props.name} />
    {props.children}
    {/* Honeypot */}
    <input
      type='email'
      name='only_for_bots'
      aria-label='honeypot'
      className='absolute w-0 h-0 top-0 left-0 opacity-0 z-min'
    />
  </form>
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
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}


export const Input = (props) => (
  <InputWrapper className={`contact-input${props.value.length ? ' has-input' : ''} relative mb-6`}>
    <input
      className='form-input bg-transparent text-base text-white text-opacity-80 text-left w-full md:w-9/10 border-none outline-none py-2 px-4 pl-1 transition-all duration-300 ease-in-out'
      type={props.type}
      name={props.name}
      value={props.value}
      autoComplete={props.autocomplete ? 'off' : 'on'}
      onChange={props.onChange}
      aria-label={props.name}
      required
    />
    <FocusLine
      className='focus-input block w-full md:w-9/10 h-full top-0 left-0 overflow-hidden pointer-events-none'
      data-placeholder={props.placeholder}
    />
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


export const TextArea = (props) => (
  <InputWrapper className={`contact-input ${props.value.length ? 'has-input' : ''} relative mb-6`}>
    <textarea
      className='form-textarea bg-transparent text-base text-white text-opacity-80 text-left w-full md:w-9/10 min-h-32 border-none outline-none py-2 px-4 pl-1 transition-all duration-300 ease-in-out mt-1 focus:mt-1'
      name={props.name}
      value={props.value}
      autoComplete={props.autocomplete ? 'off' : 'on'}
      onChange={props.onChange}
      aria-label={props.name}
      required
    />
    <FocusLine
      className='focus-input block w-full md:w-9/10 h-full top-0 left-0 overflow-hidden pointer-events-none'
      data-placeholder={props.placeholder}
    />
  </InputWrapper>
)
TextArea.defaultProps = {
  type: 'text',
  autocomplete: false,
}
TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  autocomplete: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
}


export const Button = (props) => (
  <Submit type={props.type} className='block text-base text-white text-opacity-90 font-semibold text-center w-1/2 md:w-1/4 max-w-44 h-auto border-none rounded-lg mt-12 lg:mt-20 px-5 py-3 transition-all duration-300 ease-in-out outline-none cursor-pointer'>
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
