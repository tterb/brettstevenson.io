import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const BlockQuote = styled.blockquote`
    background: transparent;
    quotes: "“""”""‘""’  ";
    width: 90%;
    border: 0;
    border-radius: 4px;
    margin: 2.5em auto !important;
    padding: 0;
    &::before, &::after {
      display: block;
      position: relative;
      color: #878787;
      font-family: sans-serif !important;
      font-size: 6.25em;
      line-height: 0.075em;
      text-shadow: none;
    }
    &::before {
      content: open-quote;
      top: 0.25em;
      left: 0;
      float: left;
      margin: 0 0.075em 0 0;
    }
    &::after {
      content: close-quote;
      top: 0.25em;
      right: 0;
      float: right;
      vertical-align: -0.6em;
      margin-left: 0.175em !important;
    }
    @media (max-width: 500px) {
      margin-left: 0 !important;
      &::before {
        left: -1rem;
      }
      &::after {
        right: -2rem;
      }
    }
`

const pStyles = {
    fontSize: '0.95em',
    lineHeight: '1.3em',
    boxShadow: '0 1px 5px rgba(0,0,0,0.25)',
    padding: '0.85em 1.2em 1em 1.4em',
}

const Blockquote = ({ children }) => (
    <BlockQuote>
        <p className='flex bg-base-600 bg-opacity-5 text-black text-opacity-75 w-9/10 rounded-sm my-0 mx-auto pt-3 pr-5 pb-4 pl-6' style={pStyles}>
            {children}
        </p>
    </BlockQuote>
)
Blockquote.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Blockquote
