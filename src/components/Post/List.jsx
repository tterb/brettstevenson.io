import React from 'react'
import PropTypes from 'prop-types'
import tw from 'tailwind.macro'
import styled from 'styled-components'

const Ordered = styled.ol`
  ${tw`list-reset mt-0 pl-5`}
  counter-reset: list;
  line-height: 1.625;
  li::before {
    ${tw`absolute flex justify-end text-right my-0 mr-0 pr-1`}
    counter-increment: list;
    content: counter(list) ".";
    width: 4em;
    margin-left: -4em;
    opacity: 0.45;
    box-sizing: border-box;
    pointer-events: none;
  }
`

const Unordered = styled.ul`
  ${tw`list-reset leading-loose align-middle mt-0 ml-5`}
  line-height: 1.625;
  li::before {
    ${tw`absolute flex justify-end leading-loose text-right align-middle mb-0 mr-1`}
    content: '';
    background: rgba(0,0,0,0.45);
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 0.5rem;
    margin-top: 0.55rem;
    margin-left: -1rem;
  }
`

export const OrderedList = ({ children }) => (
  <Ordered>
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
  <Unordered>
    {children}
  </Unordered>
)
UnorderedList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
