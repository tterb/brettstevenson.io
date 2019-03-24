import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { colors } from '../../tailwind'
import PageLink from './PageLink';

const navStyle = {
  position: 'absolute',
  top: '-0.5rem',
  right: '8vw',
}

const Nav = () => (
  <StaticQuery
    query={graphql`
      query LinkQuery {
        site {
          siteMetadata {
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <nav className='menu-wrapper' style={navStyle}>
        <ul className='menu'>
          {data.site.siteMetadata.menuLinks.map(item => {
            return (
              <li className='menu-item' key={item.name}>
                <PageLink duration={1} direction='down' to={item.link}>{item.name}</PageLink>
              </li>
            )
          })}
        </ul>
      </nav>
    )}
  />
)

export default Nav