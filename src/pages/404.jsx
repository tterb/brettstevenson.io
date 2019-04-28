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
// Styles
import '../styles/404.scss'


const PageTitle = styled(BigTitle)`
  ${tw`sm:text-6xl ml-1 md:text-8xl lg:text-9xl font-title text-center font-extrabold mt-0 ml-0`};
  font-size: 8rem;
  text-shadow: 0 2.5px 6px rgba(0,0,0,0.4) !important;
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
    return (
      <>
        <Layout style={`background: linear-gradient(to bottom, #23262b, #161719)`}/>
        <Parallax pages={1.25}>
        <Content offset={0} factor={0.375} speed={0.6}>
          <Header offset={0} factor={0.4} speed={0.6}>
            <PageTitle>404<span className='accent'>.</span></PageTitle>
          </Header>
          </Content>
          <Content offset={0.325} factor={0.5} speed={0.5} style={`padding: 14rem !important`}>
            <div className='terminal'>
              <div className='window-title'>
                <div className='win-buttons'>
                  <a id='close' className='term-button' href='../'></a>
                  <a id='min' className='term-button' href=''></a>
                  <a id='max' className='term-button' href=''></a>
                </div>
                <span className='title'>404</span>
              </div>
              <div className='message'>
                <span className='prompt'><span className='user'>root</span><span className='at'>@</span><span className='path'>~/404</span>><span className='caret'>$</span> </span>
                  <Typed style={typedStyle} strings={[
                      "Oops! <br/>" + "><span className='caret'>$</span> You might have mis-typed the URL, <br/> ^1" + "><span className='caret'>$</span> or maybe the page has been moved. <br/> ^500" + "><span className='caret'>$</span> Anyways, there is nothing to see here... <br/> ^500" + "><span className='caret'>$</span> Would you like to return to the <a href='../'>homepage</a> (Y/N)?"
                      ]}
                      cursorChar={'█'} showCursor={false}
                      autoInsertCss={true} loop={false}
                      typeSpeed={10} backSpeed={30}
                      smartBackspace>
                  </Typed>
                  <form>&gt;<span className='caret'>$</span>
                  <input id='term-input' type='text' 
                  value={this.state.value} onKeyDown={this.keyPress}
                  onChange={this.handleChange} autoFocus />
                </form>
              </div>
            </div>
          </Content>
          <Footer offset={0.95} factor={0.5} speed={0.5} />
        </Parallax>
      </>
    )
  }
}

export default FourOhFour