import React from 'react'
import tw from 'tailwind.macro'
import { colors, accent } from '../../tailwind'
import styled from 'styled-components'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import Typed from 'react-typed';
// Components
import Layout from '../components/Layout'
// Elements
import Content from '../elements/Content'
import { BigTitle } from '../elements/Titles'
// Views
import Footer from '../views/Footer'


const Header = styled(ParallaxLayer)`
  ${tw`flex justify-center items-center text-2xl px-8 py-0 md:px-20 lg:px-22`}
  height: 47vh !important;
  z-index: -9;
  @media (min-width: 600px) {
    height: 50vh !important;
  }
  @media (min-width: 800px) {
    height: 50vh !important;
    max-height: 400px !important;
  }
`

const HeaderWrapper = styled.div`
  ${tw`relative w-4/5 mx-auto xl:w-5/6`}
`

const PageTitle = styled(BigTitle)`
  ${tw`font-title text-center font-bold mt-0 ml-0 sm:text-7xl sm:ml-1 md:text-9xl lg:text-10xl`}
  font-size: 8rem;
  text-shadow: 0 2.5px 6px rgba(0,0,0,0.4) !important;
`

const WinButton = styled.a`
  ${tw`inline-block text-center rounded-full align-middle mx-2 my-2 ml-0`}
  line-height: 0.65;
  width: 12px;
  height: 12px;
  border: 0.5px solid;
  &.close {
    background: #e25544;
    color: #a41807;
    border-color: #d84b3a;
  }
  &.min {
    background: #f5b640;
    color: #b77800;
    border-color: #dc9d28;
  }
  &.max {
    background: #7cb058;
    color: #4b8028;
    border-color: #6fa44b;
  }
`

const TermBody = styled.div`
  ${tw`relative font-mono text-sm font-bold m-auto p-0 pt-4 z-999`}
  color: rgba(255,255,255,0.75);
  font-family: Monaco, Consolas, 'Ubuntu Mono', monospace;
  line-height: 1.55;
  width: 94%;
  span {
    ${tw`font-light leading-tight mb-4`}
  }
  a {
    border-bottom: 1px dotted rgba(255,255,255,0.75);
  }
`

const Prompt = styled.span`
  ${tw`text-base pr-1`}
  span {
    letter-spacing: 0.002em;
    padding-right: 2px;
  }
  .user {
    color: #ea7e7d;
  }
  .at {
    color: #ebdb84;
  }
  .path {
    color: #7ecdcb;
  }
`

const TermInput = styled.form`
  ${tw`mt-1`}
  color: #50cd70;
  input {
    ${tw`inline-block w-4/5 h-4 text-base border-none rounded-none py-0 px-2 shadow-none outline-none`}
    background: transparent;
    font-family: Monaco, Consolas, 'Ubuntu Mono', monospace;
    caret-color: #50cd70;
    &:focus {
      ${tw`border-none outline-none`}
      background: transparent !important;
      box-shadow: none !important;
    }
  }
`

const PageHeader = styled(Header)`
  padding-top: 2rem !important;
`

const LayoutStyle = {
  background: 'linear-gradient(to bottom, #23262b, #161719)',
}

const typedStyle = {
  color: `rgba(255,255,255,0.75)`,
};

class FourOhFour extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {value:''}
    this.handleChange = this.handleChange.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }
  
  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  keyPress(e) {
    if(e.keyCode == 13) {
      e.preventDefault();
      console.log('value', e.target.value);
      if(e.target.value.toLowerCase() == 'y')
        window.location.href = '../';
    }
  }
  
  render() {
    require('../styles/404.scss')
    return (
      <Layout pages={1.25} nav={false} style={{background: `linear-gradient(to bottom, #23262b, #161719)`}}>
        <Content offset={0} factor={0.375} speed={0.6}>
          <Header offset={0} factor={0.4} speed={0.6}>
            <HeaderWrapper>
              <PageTitle>404<span className='accent'>.</span></PageTitle>
            </HeaderWrapper>
          </Header>
        </Content>
        <Content offset={0.325} factor={0.5} speed={0.5} style={{padding: `14rem !important`}}>
          <div className='terminal'>
            <div className='window-title'>
              <div className='win-buttons'>
                <WinButton className='close' href='../'>&times;</WinButton>
                <WinButton className='min' href='#'>&minus;</WinButton>
                <WinButton className='max' href='#'>&#43;</WinButton>
              </div>
            </div>
            <TermBody className='message'>
              <Prompt className='prompt'>
                <span className='user'>root</span>
                <span className='at'>@</span>
                <span className='path'>~/404</span>
                <span>&gt;$</span>
              </Prompt>
              <Typed style={typedStyle} strings={[
                  "Oops! <br/>" + "><span className='caret'>$</span> You might have mis-typed the URL, <br/> ^1" + "><span className='caret'>$</span> or maybe the page has been moved. <br/> ^500" + "><span className='caret'>$</span> Anyways, there is nothing to see here... <br/> ^500" + "><span className='caret'>$</span> Would you like to return to the <a href='../'>homepage</a> (Y/N)?"
                  ]}
                  cursorChar={'█'} showCursor={false}
                  autoInsertCss={true} loop={false}
                  typeSpeed={10} backSpeed={30}
                  smartBackspace>
              </Typed>
              <TermInput>&gt;<span className='caret'>$</span>
                <input id='term-input' type='text' 
                  value={this.state.value} 
                  onKeyDown={this.keyPress}
                  onChange={this.handleChange} autoFocus/>
              </TermInput>
            </TermBody>
          </div>
        </Content>
      </Layout>
    )
  }
}

export default FourOhFour
