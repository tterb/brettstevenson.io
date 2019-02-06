import React from 'react'
import PropTypes from 'prop-types'

const Nav = ({ active, items }) => (
  <nav className='menu-wrapper'>
    <ul className='menu'>
    {items.map(function(page, i) {
      if(page.toLowerCase() === active) {
        return <li className='menu-item active' key={i}><a href={`./${page.toLowerCase()}`}>{page}</a></li>
      } else {
        return <li className='menu-item' key={i}><a href={`./${page}`}>{page}</a></li>
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
  items: PropTypes.arrayOf(PropTypes.string).isRequired
}