import React from 'react'
import tw from 'tailwind.macro'
import { colors, accent } from '../../tailwind'
import styled from 'styled-components'
import { Parallax } from 'react-spring/renderprops-addons'
import Typed from 'react-typed';
// Components
import Layout from '../components/Layout'
import Header from '../components/Header'
// Elements
import Content from '../elements/Content'
import { BigTitle } from '../elements/Titles'
// Views
import Footer from '../views/Footer'


const PageTitle = styled(BigTitle)`
  ${tw`sm:text-7xl ml-1 md:text-9xl lg:text-10xl font-title text-center font-extrabold mt-0 ml-0`}
  font-size: 8rem;
  text-shadow: 0 2.5px 6px rgba(0,0,0,0.4) !important;
`

const TermTitle = styled.span`
  ${tw`relative inline-block font-normal tracking-wide text-center align-middle`}
  color: rgba(0,0,0,0.65);
  top: 0.5px;
  left: -45px;
`

const TermBody = styled.div`
  ${tw`relative text-sm font-medium leading-normal m-auto p-0 pt-4 z-999`}
  font-family: Monaco, Consolas, 'Ubuntu Mono', monospace;
  color: rgba(255,255,255,0.75);
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
  ${tw`text-base mt-1`}
  input {
    ${tw`inline-block w-4/5 h-4 border-none rounded-none py-0 px-2 shadow-none outline-none`}
    background: transparent;
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
          <Header offset={0} factor={0.4} speed={0.6} style={{ paddingTop: `0` }}>
            <PageTitle>404<span className='accent'>.</span></PageTitle>
          </Header>
        </Content>
        <Content offset={0.325} factor={0.5} speed={0.5} style={{padding: `14rem !important`}}>
          <div className='terminal'>
            <div className='window-title'>
              <div className='win-buttons'>
                <a id='close' className='term-button' href='../'></a>
                <a id='min' className='term-button' href='#'></a>
                <a id='max' className='term-button' href='#'></a>
              </div>
              <TermTitle>404</TermTitle>
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
