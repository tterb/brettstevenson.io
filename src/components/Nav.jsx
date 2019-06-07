import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Fade from 'react-reveal/Fade'
import tw from 'tailwind.macro'
import { accent } from '../../tailwind'
import styled from 'styled-components'
import PropTypes from 'prop-types'
// Components
import PageLink from './PageLink'
import Logo from './Logo'

const Wrapper = styled.div`
  ${tw`relative block h-4 pin-t pin-x z-999`}
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
`

const Navbar = styled.div`
  ${tw`absolute`}
  right: 2.5rem;
`

const Nav = ({ logo }) => (
  <StaticQuery query={menuQuery} 
    render={data => (
      <>
      <Wrapper className='nav-wrapper'>
        <Fade top delay={250}>
          <MenuContainer>
            {logo ? <Logo className='logo-container' link={data.site.siteMetadata.menuLinks[0].link} /> : ''}
            <Navbar>
              <Menu className='menu'>
                {data.site.siteMetadata.menuLinks.map((item, i) => (
                  <MenuItem className='menu-item' key={item.name}>
                    <PageLink to={item.link}>{item.name}</PageLink>
                  </MenuItem>
                ))}
              </Menu>
            </Navbar>
          </MenuContainer>
        </Fade>
      </Wrapper>
      </>
    )}
  />
)

Nav.defaultProps = {
  logo: true,
}
Nav.propTypes = {
  logo: PropTypes.bool
}

const menuQuery = graphql`
  query menuQuery {
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

export default Nav