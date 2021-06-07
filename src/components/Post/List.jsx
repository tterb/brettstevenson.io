import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const Ordered = styled.ol`
  counter-reset: list;
  line-height: 1.625;
  li {
    margin-bottom: 0.25rem;
    &::before {
      content: counter(list) ".";
      position: absolute;
      display: flex;
      justify-content: flex-end;
      font-weight: 500;
      text-align: right;
      counter-increment: list;
      width: 4em;
      margin: 0 0 0 -4em;
      padding-right: 0.5rem;
      opacity: 0.5;
      box-sizing: border-box;
      pointer-events: none;
    }
  }
`

const Unordered = styled.ul`
  line-height: 1.625;
  li::before {
    content: '';
    position: absolute;
    display: flex;
    background: rgba(0,0,0,0.45);
    justify-content: flex-end;
    text-align: right;
    line-height: 1.7;
    vertical-align: middle;
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 0.5rem;
    margin: 0.55rem 0.25rem 0 -1rem;
  }
`

export const OrderedList = ({ children }) => (
  <Ordered className='list-reset w-9/10 mx-auto sm:w-full mt-0 pl-6'>
    {children}
  </Ordered>
)
OrderedList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export const UnorderedList = ({ children }) => (
  <Unordered className='list-reset w-9/10 mx-auto sm:w-full leading-loose align-middle mt-0 sm:ml-5'>
    {children}
  </Unordered>
)
UnorderedList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
