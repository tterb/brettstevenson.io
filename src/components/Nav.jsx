import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import tw from 'tailwind.macro'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import styled from 'styled-components'
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
  ${tw`flex relative w-full font-title text-right list-reset m-0 mr-8`}
  background: transparent;
  z-index: 999999;
`

const MenuItem = styled.li`
  ${tw`inline-block text-xl cursor-pointer py-0 px-3`}
  z-index: 999999;
`

const navStyle = {
  position: 'absolute',
  // top: '-0.5rem',
  right: '2.5rem',
}

const Nav = ({ logo }) => (
  <StaticQuery query={menuQuery} 
    render={data => (
      <>
      <Wrapper className='nav-wrapper'>
      <Bounce top delay={500}>
      <MenuContainer>
        {logo ? <Logo link={data.site.siteMetadata.menuLinks[0].link} /> : ''}
        <div className='menu-wrapper' style={navStyle}>
          <Menu className='menu'>
            {data.site.siteMetadata.menuLinks.map((item, i) => {
              if(logo && i == 0) return
              return (
                <MenuItem className='menu-item' key={item.name}>
                  <PageLink to={item.link}>{item.name}</PageLink>
                </MenuItem>
              )
            })}
          </Menu>
        </div>
      </MenuContainer>
      </Bounce>
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