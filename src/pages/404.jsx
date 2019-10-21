import React from 'react'
import tw from 'tailwind.macro'
import styled from 'styled-components'


const Glitch = styled.div`
  ${tw`absolute w-full pin-t overflow-hidden`}
  left: -2px;
  text-shadow: 2px 0 #F9F8F8, -1px 0 cyan, -2px 0 green, 3px 0 rgba(255,0,0,0.7);
`

const Header = styled.header`
  ${tw`absolute font-title w-full h-full pin-l overflow-hidden`}
  top: 50%;
  transform: translateY(-50%);
`

const Title = styled.h1`
  ${tw`relative font-title font-extrabold text-center uppercase my-14 mb-12`}
  color: #222;
  font-size: 13.25rem;
`

const Message = styled.div`
  ${tw`text-2xl font-normal text-center m-auto`}
`

const Button = styled.button`
  ${tw`relative block text-center outline-none cursor-pointer mx-auto mb-0 p-4 px-6`}
  background: transparent;
  color: #000;
  border: 4px solid transparent;
  box-shadow:inset 0px 0px 0px 2px #000, 0 1px 3px #fafafa;
  transform: scale(2);
  margin-top: 16vh;
`

class FourOhFour extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.messages = [
      'Page Not Found',
      'It looks like John Wick found this page first.',
      'Your lack of direction is astounding.',
      'The cake is a lie.',
      'You can\'t always get what you want.',
      'There are no mistakes, only happy accidents.',
      'Return to the NPC that gave you this quest.',
    ]
    this.state = {
      index: Math.round(Math.random()*this.messages.length)
    }
  }
  
  handleClick(evt) {
    evt.preventDefault();
    window.location.href = '../';
  }
  
  render() {
    require('../../static/fonts/fonts.css')
    require('../styles/404.scss')
    const message = this.messages[this.state.index]
    return (
      <Header>
        <Title className='404-title'>404</Title>
        <Message dangerouslySetInnerHTML={{ __html: message }}></Message>
        <Glitch className='glitch'>
          <Title>404</Title>
        </Glitch>
        <Button className='404-button' onClick={this.handleClick} data-text='Home'>Home</Button>
      </Header>
    )
  }
}

export default FourOhFour
