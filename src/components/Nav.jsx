import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Fade from 'react-reveal/Fade'
import tw from 'tailwind.macro'
import { colors, accent } from '../../tailwind'
import styled from 'styled-components'
import PropTypes from 'prop-types'
// Components
import PageLink from './PageLink'
import Logo from './Logo'

const Wrapper = styled.div`
  ${tw`relative block font-title h-0 pin-t pin-x z-999`}
  transform: translate3D(0, 0, 0);
`

const MenuContainer = styled.div`
  ${tw`flex absolute w-full h-16 flex-wrap items-center justify-between p-4`}
  top: 0.5rem;
  box-sizing: border-box;
`

const Menu = styled.ul`
  ${tw`flex relative w-full font-title text-right list-reset m-0 md:mr-4 lg:mr-8`}
  background: transparent;
  z-index: 999999;
`

const MenuItem = styled.li`
  ${tw`inline-block text-xl cursor-pointer py-0 px-3`}
  z-index: 999999;
  a {
    ${tw`no-underline border-none`}
  }
  &:last-child {
    ${tw`pr-0`}
  }
  &.external {
    padding-right: 0.75rem;
    &::after {
      ${tw`absolute opacity-0`}
      content: '*';
      color: #63666b;
      transition: opacity 300ms ease-in-out;
    }
    &:hover {
      &::after {
        opacity: 1;
      }
    }
  }
`

const Navbar = styled.div`
  ${tw`absolute`}
  right: 2.5rem;
  @media (max-width: 420px) {
    right: 0;
  }
`

const MenuPanel = styled.div`
  ${tw`fixed text-center pin-t pin-r px-6 py-10`}
  position: fixed;
  background: ${colors['background-alt']};
  width: 100vw;
  height: 100vh;
  top: 0;
  box-shadow: 0 0 10px rgba(0,0,0,0.7);
  transform: translatey(-100vh);
  transition: transform 400ms ease;
  opacity: 0.975;
  z-index: -1;
  &::before {
    ${tw`absolute w-full h-full pin-t pin-l`}
    background: ${colors['background-alt']};
    content: '';
    filter: blur(0);
    transition: filter 350ms ease 250ms;
    z-index: -1;
  }
  &.active {
    &::before {
      filter: blur(1rem);
    }
    transform: translateY(0);
  }
  /* li {
    ${tw`w-9/10 mt-3 p-0 py-3`}
    border-bottom: 1px solid rgba(255,255,255,0.1);
  } */
  li {
    ${tw`relative inline-block mt-1 mx-auto px-0 py-3 z-999`}
    font-size: 14vw;
    width: max-content;
    margin: 0 10%;
    &:first-child {
      margin-top: 1.5rem;
    }
    a {
      &::before {
        ${tw`absolute w-0`}
        background: ${accent};
        content: '';
        height: 8px;
        top: 50%;
        left: -10%;
        transition: width 500ms cubic-bezier(0.77, 0, 0.175, 1);
      }
      &:hover, &:active {
        color: rgba(255, 255, 255, 0.8);
        &::before {
          width: 120%;
          transition: width 500ms cubic-bezier(0.77, 0, 0.175, 1);
        }
      }
    }
  }
`

const Button = styled.span`
  ${tw`absolute flex flex-col justify-between cursor-pointer z-9999`}
  color: rgba(255,255,255,0.75);
  width: 30px;
  height: 25px;
  top: 0.75rem;
  right: 1rem;
  transition: all 350ms ease-in-out;
  &.active {
    width: 25px;
    transform: rotate(-45deg);
    transition: all 200ms ease-out;
    .half {
      ${tw`w-1/2`}
    }
    .start {
      transform: rotate(-90deg) translateX(2px);
      transition: width 300ms ease-out 25ms, transform 300ms cubic-bezier(0.54, -0.81, 0.57, 0.57) 25ms;
      transform-origin: right;
    }
    .end {
      transform: rotate(-90deg) translateX(-2px);
      transition: width 300ms ease-out 25ms, transform 300ms cubic-bezier(0.54, -0.81, 0.57, 0.57) 25ms;
      transform-origin: left;
    }
  }
`

const Line = styled.div`
  ${tw`w-full`}
  background: rgba(255,255,255,0.75);
  border-radius: 5px;
  height: 3px;
  transition: transform 350ms ease-out;
  &.half {
    ${tw`w-3/5`}
  }
  &.start {
    transition: width 300ms ease-out, transform 250ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
    transform-origin: right;
  }
  &.end {
    align-self: flex-end;
    transition: width 300ms ease-out, transform 250ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
    transform-origin: left;
  }
`

const MenuButton = ({ status, onClick }) => (
  <Button className={`menu-button ${status}`} onClick={onClick}>
    <Line className='half start' />
    <Line />
    <Line className='half end' />
  </Button>
)

class Nav extends React.Component {
  
  state = {
    panel: false,
  }
  
  togglePanel = () => {
    if(this.state.panel)
      this.setState({ panel: false }) 
    else
      this.setState({ panel: true })
  }
  
  isPanelVisible = () => {
    return this.state.panel ? 'active' : ''
  }
  
  render() {
    const logo = this.props.logo
    const mobile = this.props.mobile
    const panel = this.state.panel
    return (
      <StaticQuery query={menuQuery} 
        render={data => (
          <>
          <Wrapper className='nav-wrapper'>
            <Fade top delay={250}>
              <MenuContainer>
                {logo ? <Logo className='logo-container' link={data.site.siteMetadata.menuLinks[0].link} /> : null}
                { mobile ?
                  <MenuButton status={this.isPanelVisible()} onClick={this.togglePanel} />
                  :
                  <Navbar>
                    <Menu className='menu'>
                      {data.site.siteMetadata.menuLinks.map((item, i) => {
                        if(item.external) {
                          return (
                            <MenuItem className='menu-item external' key={item.name}>
                              <a href={item.link} target='_blank'>{item.name}</a>
                            </MenuItem>
                          )
                        } else {
                          return (
                            <MenuItem className='menu-item' key={item.name}>
                              <PageLink to={item.link}>{item.name}</PageLink>
                            </MenuItem>
                          )
                        }
                      })}
                    </Menu>
                  </Navbar>
                }
              </MenuContainer>
            </Fade>
            { mobile ?
              <MenuPanel className={`${this.isPanelVisible()}`}>
                {data.site.siteMetadata.menuLinks.map((item, i) => {
                  if(item.external) {
                    return (
                      <MenuItem className='menu-item external' key={item.name}>
                        <a href={item.link} target='_blank'>{item.name}</a>
                      </MenuItem>
                    )
                  } else {
                    return (
                      <MenuItem className='menu-item' key={item.name}>
                        <PageLink to={item.link}>{item.name}</PageLink>
                      </MenuItem>
                    )
                  }
                })}
              </MenuPanel> : null }
          </Wrapper>
          </>
        )}
      />
    )
  }
}

Nav.defaultProps = {
  logo: true,
  mobile: false,
}
Nav.propTypes = {
  logo: PropTypes.bool,
  mobile: PropTypes.bool,
}

const menuQuery = graphql`
  query menuQuery {
    site {
      siteMetadata {
        menuLinks {
          name
          link
          external
        }
      }
    }
  }
`

export default Nav
