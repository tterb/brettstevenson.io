import React from 'react'
import styled from 'styled-components'


const SearchWrapper = styled.div`
  .on {
    animation-name: in-out;
    animation-duration: 0.7s;
    animation-timing-function: linear;
    animation-iteration-count: 1;
  }
`

const SearchInput = styled.input`
  border-radius: 50%;
  box-shadow: 1px 2px 5px -1px rgba(0,0,0,0.35);
  transition: width 400ms ease-in-out, border-radius 350ms ease-in-out 250ms, padding 200ms;
  transform: translate(-100%, -50%);
  &.square {
    font-size: 1.25rem;
    width: 18.75rem;
    border-radius: 8px;
    transition: width 400ms ease-in-out, border-radius 400ms ease-in-out, padding 200ms;
    transition-delay: 200ms, 0s, 200ms;
    transform: translate(-100%, -50%);
    @media (max-width: 500px) {
      width: 15rem;
    }
    &:before {
      width: 80%;
    }
  }
  &:focus, &:active {
    box-shadow: 1px 2px 5px -1px rgba(0,0,0,0.35) !important;
  }
  &:before {
    content: '';
    position: absolute;
    background: '#70818A';
    width: 0;
    height: 1px;
    left: 0;
    bottom: 2px;
    margin-right: auto;
    transition: width 450ms ease-in-out 300ms;
  }
`

const SearchButton = styled.button`
  transform: translate(-100%, -50%);
  &::before, &::after {
    content: '';
    position: absolute;
  }
  &:before {
    background: none;
    width: 1.5rem;
    height: 1.5rem;
    top: 0.25rem;
    left: 0.35rem;
    border-radius: 100%;
    border: 4px solid #677486;
    margin-top: 0;
    margin-left: 0;
  }
  &:after {
    background-color: #677486;
    width: 0.85rem;
    height: 0.25rem;
    top: 0.65rem;
    left: 0.65rem;
    border-radius: 4px;
    margin-top: 1rem;
    margin-left: 0.75rem;
    transform: rotate(45deg);
    transition: 400ms ease-in-out;
  }
  &.close {
    transition: 600ms ease-in-out;
    transition-delay: 600ms;
    &::before, &::after {
      content: '';
      position: absolute;
      background-color: #70818A;
      width: 1.5rem;
      height: 0.25rem;
    }
    &:before {
      border: none;
      border-radius: 4px;
      margin-top: 14px;
      margin-left: 5px;
      transform: rotate(45deg);
      transition: 200ms ease-in-out;
    }
    &:after {
      top: 20px;
      left: 20px;
      margin-top: -2px;
      margin-left: -10px;
      transform: rotate(-45deg);
      cursor: pointer;
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
    return (
      <SearchWrapper className='relative bg-none items-center justify-center w-14 h-14 rounded-full p-2'>
        <SearchInput
          type='text'
          name='input'
          aria-label='Search'
          className={`absolute bg-white text-sm text-white text-opacity-85 font-normal items-center justify-center w-12 h-12 top-7 left-13 border-none outline-none box-border focus:bg-white active:bg-white focus:text-base-300 active:text-base-300${this.state.open ? ` square text-sm text-accent font-normal h-12 rounded-none border-none py-0 pl-4 pr-10  box-border focus:outline-none focus:ring-4 focus:ring-base-700 focus:ring-opacity-50` : ``}`}
        />
        <SearchButton
          type='reset'
          className={`absolute bg-none w-10 h-10 top-7 left-12 self-center rounded-full border-none p-0 outline-none transition duration-200 ease-in-out cursor-pointer focus:outline-none${this.state.open ? ` close` : ``}`}
          aria-label='Search'
          onClick={this.handleOnClick}
        />
      </SearchWrapper>
    )
  }
}

export default Search
