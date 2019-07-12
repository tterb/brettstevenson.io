import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import tw from 'tailwind.macro'
import styled from 'styled-components'
import VisibilitySensor from 'react-visibility-sensor';
// Components
import Logo from './Logo'
import PageLink from './PageLink'

const Wrapper = styled.div`
  ${tw`relative block h-4 pin-t pin-l pin-r z-999`}
  transform: translate3D(0, 0, 0);
`

const Header = styled.div`
  ${tw`absolute w-full pin-t pin-l`}
  transition: all 350ms ease-in-out;
  &.fixed {
    ${tw`fixed pin-t pin-l z-1 py-2 px-8`}
    height: 50px;
    .menu-wrapper {
      top: 1.7rem;
      right: 2.75rem;
      .menu {
        top: -0.5rem;
        right: 0;
      }
    }
    .logo-title {
      top: 0.75rem;
      left: 3.5rem;
    }
  }
`

const MenuContainer = styled.div`
  ${tw`flex absolute w-full h-16 flex-wrap items-center justify-between p-4`}
  top: 0.5rem;
  box-sizing: border-box;
`

const MenuWrapper = styled.div`
  ${tw`absolute`}
  top: 1.5rem;
  right: 2.75rem;
  @media (max-width: 500px) {
    right: 2rem;
  }
`

const Menu = styled.ul`
  ${tw`relative w-full font-title text-right list-reset my-0 z-9999`}
  background: transparent;
`

const MenuItem = styled.li`
  ${tw`inline-block text-xl cursor-pointer py-0 px-3 z-9999`}
  &:last-child {
    ${tw`pr-0`}
  }
  a {
    ${tw`no-underline border-none`}
  }
`

const Sensor = styled.div`
  ${tw`block absolute pin-l pin-r pin-b z-1`}
  height: 1px;
  top: 60px;
`

class PostNav extends React.Component {
  
  state = {
    fixed: false
  }

  visibilitySensorChange = (val) => {
    if(val) 
      this.setState({ fixed: false }) 
    else
      this.setState({ fixed: true })
  }
  
  getNavSize = () => {
    const fixed = this.state.fixed ? 'fixed' : ''
    return `${fixed}`
  }
  
  render() {
    const { fixed } = this.state;
    return (
      <StaticQuery query={postMenuQuery}
        render={data => (
          <>
          <Header className={`header ${this.getNavSize()}`}>
            <div className='header-logo'>
              <Logo link={data.site.siteMetadata.menuLinks[0].link} />
            </div>
            <MenuWrapper className='menu-wrapper'>
              <Menu className='menu'>
                {data.site.siteMetadata.menuLinks.map((item, i) => (
                  <MenuItem className='menu-item' key={item.name}>
                    <PageLink to={item.link}>{item.name}</PageLink>
                  </MenuItem>
                ))}
              </Menu>
            </MenuWrapper>
          </Header>
          <VisibilitySensor onChange={this.visibilitySensorChange}>
            <Sensor className='sensor' />
          </VisibilitySensor>
          </>
        )}
      />
    )
  }
}

const postMenuQuery = graphql`
  query postMenuQuery {
    site {
      siteMetadata {
        menuLinks {
          name
          link
        }
      }
    }
  }
`

export default PostNav
