import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import tw from 'tailwind.macro'
import styled from 'styled-components'
import VisibilitySensor from 'react-visibility-sensor';
import PropTypes from 'prop-types'
// Components
import PageLink from './PageLink'
import Logo from './Logo'

const Wrapper = styled.div`
  ${tw`relative block`}
  height: 1rem;
  top: 0;
  left: 0;
  right: 0;
  transform: translate3D(0, 0, 0);
  z-index: 999;
`

const MenuContainer = styled.div`
  ${tw`flex absolute w-full items-center p-4`}
  height: 4rem;
  top: 0.5rem;
  flex-wrap: wrap;
  justify-content: space-between;
  box-sizing: border-box;
`

const Menu = styled.ul`
  ${tw`relative w-full font-title text-right list-reset mt-0 mb-0`}
  background: transparent;
  z-index: 999999;
`

const MenuItem = styled.li`
  ${tw`inline-block text-xl cursor-pointer py-0 px-3`}
  z-index: 999999;
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
          <div className={`header ${this.getNavSize()}`}>
            <div className='header-logo'>
              <Logo className='logo-container' link={data.site.siteMetadata.menuLinks[0].link} />
            </div>
            <div className='menu-wrapper'>
              <Menu className='menu'>
                {data.site.siteMetadata.menuLinks.map((item, i) => {
                  if(i == 0) return
                  return (
                    <MenuItem className='menu-item' key={item.name}>
                      <PageLink to={item.link}>{item.name}</PageLink>
                    </MenuItem>
                  )
                })}
              </Menu>
            </div>
          </div>
          <VisibilitySensor onChange={this.visibilitySensorChange}>
            <div className='sensor' />
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