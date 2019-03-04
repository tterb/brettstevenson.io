import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink';

// import PropTypes from 'prop-types'
// import { Link, animateScroll as scroll } from 'react-scroll'

// let pages = ['home','blog','contact']
    
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
      <nav className='menu-wrapper'>
        <ul className='menu'>
          {data.site.siteMetadata.menuLinks.map(item => {
            return (
              <li className='menu-item' key={item.name}>
                <AniLink fade duration={1} to={item.link} >{item.name}</AniLink>
              </li>
            )
          })}
        </ul>
      </nav>
    )}
  />
)

export default Nav

// Nav.propTypes = {
  // active: PropTypes.string,
  // items: PropTypes.arrayOf(PropTypes.string).isRequired
// }