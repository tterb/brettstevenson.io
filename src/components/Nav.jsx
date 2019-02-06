import React from 'react'
import PropTypes from 'prop-types'

const Nav = ({ active }) => (
  <nav className='menu-wrapper'>
    <ul className='menu'>
    {['home','blog','contact'].map(function(page, i) {
      let capitalized = page.charAt(0).toUpperCase()+page.substr(1)
      if(active.includes(page)) {
        return <li className='menu-item active' key={i}><a href={`./${page}`}>{capitalized}</a></li>
      } else {
        return <li className='menu-item' key={i}><a href={`./${page}`}>{capitalized}</a></li>
      }
    })}
    </ul>
  </nav>
)

export default Nav

Nav.defaultProps = {
  active: 'home',
}

Nav.propTypes = {
  active: PropTypes.string,
  // items: PropTypes.arrayOf(PropTypes.string).isRequired
}