import React from 'react'
import PropTypes from 'prop-types'

const Menu = ({ active, items }) => (
  <nav className='menu-wrapper'>
    <ul className='menu'>
    {items.map(function(page, i) {
      if(page.toLowerCase() === active) {
        return <li className='menu-item active' key={i}><a href={`./${page}`}>{page}</a></li>
      } else {
        return <li className='menu-item' key={i}><a href={`./${page}`}>{page}</a></li>
      }
    })}
    </ul>
  </nav>
)

export default Menu

Menu.defaultProps = {
  active: 'home',
}

Menu.propTypes = {
  active: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string).isRequired
}