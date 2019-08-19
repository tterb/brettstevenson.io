import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { colors, accent } from '../../tailwind'

const SearchWrapper = styled.div`
  ${tw`w-14 h-14 rounded-full p-2`}
  background: none;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);
  .on {
    animation-name: in-out;
    animation-duration: 0.7s;
    animation-timing-function: linear;
    animation-iteration-count: 1;
  }
`

const SearchInput = styled.input`
  ${tw`absolute text-base font-normal w-12 h-12 pin-t pin-l outline-none`}
  /* background: ${colors['blue-grey']}; */
  background: ${colors['grey-lightest']};
  color: rgba(255,255,255,0.85);
  top: 1.75rem;
  left: 3.25rem;
  align-items: center;
  justify-content: center;
  /* border: 4px solid ${accent}; */
  border: none;
  border-radius: 50%;
  box-shadow: 1px 2px 5px -1px rgba(0,0,0,0.35);
  box-sizing: border-box;
  transition: width 400ms ease-in-out, border-radius 350ms ease-in-out 250ms, padding 200ms;
  transform: translate(-100%, -50%);
  &.square {
    ${tw`text-base font-normal h-12 rounded-none py-0 pl-4 pr-10 outline-none`}
    background: ${colors['grey-lightest']};
    color: ${accent};
    font-size: 1.25rem;
    width: 18.75rem;
    border: none;
    border-radius: 8px;
    box-sizing: border-box;
    transition: width 400ms ease-in-out, border-radius 400ms ease-in-out, padding 200ms;
    transition-delay: 200ms, 0s, 200ms;
    transform: translate(-100%, -50%);
    @media (max-width: 500px) {
      width: 15rem;
    }
    &:before {
      ${tw`w-4/5`}
    }
  }
  &:focus, &:active {
    background: ${colors['grey-lightest']} !important;
    color: ${colors['blue-grey']} !important;
    border: none !important;
    box-shadow: 1px 2px 5px -1px rgba(0,0,0,0.35) !important;
  }
  &:before {
    ${tw`absolute pin-l mr-auto`}
    content: '';
    background: ${colors['grey-dark']};
    width: 0;
    height: 1px;
    bottom: 2px;
    transition: width 450ms ease-in-out 300ms;
  }
`

const SearchButton = styled.button`
  ${tw`absolute w-10 h-10 pin-t pin-l rounded-full border-none p-0 outline-none cursor-pointer`}
  background: none;
  top: 1.75rem;
  left: 3rem;
  align-self: center;
  transition: 200ms ease-in-out;
  transform: translate(-100%, -50%);
  &:before {
    ${tw`absolute w-6 h-6 rounded-full mt-0 ml-0`}
    content: '';
    background: none;
    top: 0.25rem;
    left: 0.35rem;
    border: 4px solid ${colors['grey-dark']};
  }
  &:after {
    ${tw`absolute w-3 h-1 mt-4 ml-3`}
    content: '';
    background-color: ${colors['grey-dark']};
    top: 0.65rem;
    left: 0.75rem;
    transform: rotate(45deg);
    transition: 200ms ease-in-out;
  }
  &.close {
    transition: 400ms ease-in-out;
    transition-delay: 400ms;
    &:before {
      ${tw`absolute w-6 h-1`}
      content: '';
      background-color: ${colors['grey-dark']};
      border: none;
      margin-top: 14px;
      margin-left: 5px;
      transform: rotate(45deg);
      transition: 200ms ease-in-out;
    }
    &:after {
      ${tw`absolute w-6 h-1 cursor-pointer`}
      content: '';
      background-color: ${colors['grey-dark']};
      top: 20px;
      left: 20px;
      margin-top: -2px;
      margin-left: -10px;
      transform: rotate(-45deg);
    }
  }
`

class Search extends React.Component {
  
  state = {
    open: false,
  }
  
  handleOnClick = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }
  
  render() {
    const open = this.state.open
    return (
      <SearchWrapper>
        <SearchInput type='text' name='input' className={`${this.state.open ? `square` : ``}`} />
        <SearchButton onClick={this.handleOnClick} type='reset' className={`${this.state.open ? `close` : ``}`} />
      </SearchWrapper>
    )
  }
}

export default Search
