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
  ${tw`flex relative w-full font-title text-right list-reset m-0 mr-8`}
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
    padding-right: 0.2rem;
    &::after {
      content: '*';
      color: #63666b;
      opacity: 0;
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
  ${tw`fixed w-1/2 pin-t pin-r px-6 py-10`}
  position: fixed;
  background: ${colors['background-alt']};
  height: 300vh;
  top: 0;
  box-shadow: 0 0 10px rgba(0,0,0,0.7);
  transform: translateX(20rem);
  transition: transform 500ms ease;
  z-index: -1;
  &.active {
    transform: translateX(0)
  }
  li {
    ${tw`w-9/10 mt-3 p-0 py-3`}
    border-bottom: 1px solid rgba(255,255,255,0.1);
  }
`

const MenuButton = styled.span`
  ${tw`absolute text-3xl ml-auto overflow-visible z-9999`}
  color: rgba(255,255,255,0.75);
  width: 35px;
  height: 35px;
  top: 1rem;
  right: 1rem;
  &.active {
    position: fixed;
    top: 0.25rem;
    span {
      background: transparent;
      top: 1rem;
    }
    span::before {
      top: 1rem;
      transform-origin: center;
      transform: rotate(-45deg);
    }
    span::after {
      top: 1rem;
      transform-origin: center;
      transform: rotate(45deg);
    }
  }
`

const Icon = styled.span`
  ${tw`absolute block w-full overflow-visible z-9999`}
  background: #fff;
  height: 3px;
  top: 1rem;
  border-radius: 20px;
  transition: position 300ms ease-in-out, transform 500ms ease;
  &::before, &::after {
    ${tw`absolute block w-7/10 overflow-visible z-9999`}
    background: #fff;
    content: '';
    height: 3px;
    top: 1rem;
    border-radius: 20px;
    transition: position 300ms ease-in-out, transform 500ms ease;
  }
  &::before {
    top: -8px;
  }
  &::after {
    top: 8px;
  }
`

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
                  <MenuButton className={`menu-button ${this.isPanelVisible()}`} onClick={this.togglePanel}>
                    <Icon />
                  </MenuButton>
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
