import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Fade } from "react-awesome-reveal";
import styled from 'styled-components'
// Components
import Logo from 'components/Logo'
import PageLink from 'components/PageLink'
// Config
import config from 'config/website.js'


const Panel = styled.div`
  box-shadow: 0 0 10px rgba(0,0,0,0.7);
  transform: translateY(-100vh);
  transform-style: preserve-3d;
  transition: all 450ms ease, transform 0ms ease;
  &.open {
    transform: translateY(0);
    opacity: 0.975;
    &::before {
      filter: blur(1rem);
    }
  }
`

const MenuLink = styled(PageLink)`
    color: transparent !important;
    &::before {
        content: '';
        display: block;
        position: absolute;
        background: #F2433B;
        height: 6px;
        top: 50%;
        left: -10%;
        right: -10%;
        border-radius: 2px;
        margin-top: 0px;
        transform: scale(0);
        transition: transform .8s cubic-bezier(.16,1.08,.38,.98);
        z-index: 99999;
    }

    &:hover, &:active {
        &::before {
            transform: scale(1);
        }
        .menu-item-mask {
            color: #FFF;
            transform: skewX(12deg) translateX(7px);
        }
        .menu-item-mask + .menu-item-mask {
            transform: skewX(12deg) translateX(-7px);
        }
    }

    .menu-item-mask + .menu-item-mask {
        height: 59.9%;
        top: 49.9%;
        span {
            transform: translateY(-50%);
        }
    }
`

const MenuItemMask = styled.span`
    transition: all 800ms cubic-bezier(0.16, 1.08, 0.38, 0.98);
`

const Button = styled.span`
  transition: width 200ms ease-in-out, transform 200ms ease-in-out 200ms;
  &.open {
    width: 22px;
    .start, .end {
      transition: width 100ms ease-in-out, transform 300ms cubic-bezier(0.54, -0.81, 0.57, 0.57) 50ms;
    }
  }
`

const Line = styled.div`
  height: 3px;
  transition: width 100ms ease-in-out, transform 250ms cubic-bezier(0.54, -0.81, 0.57, 0.57) 50ms;
`

const MenuButton = ({ isOpen, onClick }) => (
  <Button className={`menu-button relative flex flex-col justify-between text-white text-opacity-75 h-6 -top-1 transform rotate-0 ml-auto z-9999 cursor-pointer ${isOpen ? 'open -rotate-45' : 'w-8'}`} onClick={onClick}>
    <Line className={`start bg-white bg-opacity-75 rounded origin-right transform ${isOpen ? 'w-1/2 -rotate-90 top-0.5' : 'w-3/5 top-0'}`} />
    <Line className='bg-white bg-opacity-75 w-full rounded transition-transform duration-300 ease-out' />
    <Line className={`end bg-white bg-opacity-75 self-end rounded origin-left transform ${isOpen ? 'w-1/2 -rotate-90 -top-0.5' : 'w-3/5 top-0'}`} />
  </Button>
)
MenuButton.propTypes = {
  isOpen: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
}

const MenuPanel = ({ isOpen }) => (
  <Panel className={`fixed flex flex-col bg-base-100 text-left items-center w-screen h-screen top-0 right-0 p-6 opacity-0 z-min${isOpen ? ' open' : ''}`}>
    <div className='flex flex-col items-start justify-center ml-2 mr-auto pt-16'>
    {config.menuLinks.map((item) => (
        <MenuLink
          key={item.name}
          className='group menu-item relative text-4xl font-bold cursor-pointer'
          to={item.link}
          external={item.external}
        >
          {item.name}
          <MenuItemMask className='menu-item-mask absolute block text-white text-opacity-80 h-1/2 top-0 overflow-hidden'>
            <span className='block'>{item.name}</span>
          </MenuItemMask>
          <MenuItemMask className='menu-item-mask absolute block text-white text-opacity-80 h-1/2 top-0 overflow-hidden'>
            <span className='block'>{item.name}</span>
          </MenuItemMask>
        </MenuLink>
    ))}
    </div>
  </Panel>
)
MenuPanel.propTypes = {
  isOpen: PropTypes.bool,
}

const InlineMenu = ({ links }) => (
  <nav className='hidden sm:block right-0 sm:right-10 ml-auto'>
    <ul className='menu grid grid-cols-4 gap-x-1 relative bg-transparent w-full font-title font-medium text-right list-reset m-0 z-9999'>
      {links.map((item) => (
          <li key={item.name} className='menu-item inline-block text-gray-1000 text-opacity-90 text-lg text-center font-normal w-19 max-w-24 py-0 px-0 last:pr-0 cursor-pointer z-9999'>
            <PageLink
              className='gradient-text-blue border-none hover:font-semibold focus:font-semibold transition-all duration-300 ease-in-out'
              external={item.external}
              content={item.name}
              to={item.link}
            />
          </li>
      ))}
    </ul>
  </nav>
)
InlineMenu.propTypes = {
  links: PropTypes.array,
}

const Nav = ({ showLogo, windowSize }) => {
  const isMobile = (windowSize.width && windowSize.width <= 600)
  const [isOpen, setOpen] = useState(false)
  return (
    <div
      className='nav-wrapper relative block font-title h-0 top-0 left-0 right-0 z-999'
      role='navigation'
      title='navigation'
    >
      <Fade direction='down' delay={250} triggerOnce>
        <div className='flex relative w-5/6 md:w-9/10 h-16 flex-wrap items-center justify-between top-0 mx-auto pt-6 pb-4 px-0 box-border'>
          {showLogo ? (
            <Logo className='logo-container' link='/' />
          ) : null}

          {isMobile ?
            <MenuButton isOpen={isOpen} onClick={() => setOpen(!isOpen)} />
          :
            <InlineMenu links={config.menuLinks} />
          }
        </div>
      </Fade>
      {isMobile ?
        <MenuPanel isOpen={isOpen} />
      : null}
    </div>
  )
}
Nav.defaultProps = {
  showLogo: true,
  windowSize: {},
}
Nav.propTypes = {
  showLogo: PropTypes.bool,
  windowSize: PropTypes.object.isRequired,
}

export default Nav
