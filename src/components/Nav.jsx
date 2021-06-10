import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'
// Components
import Logo from 'components/Logo'
import PageLink from 'components/PageLink'
// Config
import config from 'config/website.js'


const Wrapper = styled.div`
  transform: translate3D(0, 0, 0);
`

const InlineMenu = styled.ul`
  z-index: 999999;
`

const MenuItem = styled.li`
  z-index: 999999;
`

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
    transition: all .8s cubic-bezier(.16,1.08,.38,.98);
`

const Button = styled.span`
  &.open {
    width: 25px;
    transform: rotate(-45deg);
    .half {
      width: 50%;
    }
    .start {
      transform: rotate(-90deg) translateX(2px);
      transition: width 300ms ease-out 25ms, transform 300ms cubic-bezier(0.54, -0.81, 0.57, 0.57) 25ms;
      transform-origin: right;
    }
    .end {
      transform: rotate(-90deg) translateX(-2px);
      transition: width 300ms ease-out 25ms, transform 300ms cubic-bezier(0.54, -0.81, 0.57, 0.57) 25ms;
      transform-origin: left;
    }
  }
`

const Line = styled.div`
  height: 3px;
  &.half {
    width: 60%;
  }
  &.start {
    transition: width 300ms ease-out, transform 250ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
    transform-origin: right;
  }
  &.end {
    align-self: flex-end;
    transition: width 300ms ease-out, transform 250ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
    transform-origin: left;
  }
`

const MenuButton = ({ isOpen, onClick }) => (
  <Button className={`menu-button absolute flex flex-col justify-between text-white text-opacity-75 w-8 h-6 top-3 right-4 transition-all duration-300 ease-in-out z-9999 cursor-pointer${isOpen ? ' open' : ''}`} onClick={onClick}>
    <Line className='half start bg-white bg-opacity-75 w-full rounded transition-transform duration-300 ease-out' />
    <Line className='bg-white bg-opacity-75 w-full rounded transition-transform duration-300 ease-out' />
    <Line className='half end bg-white bg-opacity-75 w-full rounded transition-transform duration-300 ease-out' />
  </Button>
)
MenuButton.propTypes = {
  isOpen: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
}

const MenuPanel = ({ isOpen }) => (
  <Panel className={`fixed flex flex-col bg-base-100 text-left items-center w-screen h-screen top-0 right-0 p-6 opacity-0 z-min${isOpen ? ' open' : ''}`}>
    <div className='flex flex-col items-start justify-center ml-2 mr-auto pt-12'>
    {config.menuLinks.map((item) => (
        <MenuLink
          key={item.name}
          className='group menu-item relative text-5xl font-bold cursor-pointer'
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
MenuButton.propTypes = {
  isOpen: PropTypes.bool,
}


const Nav = ({ showLogo, isMobile }) => {

  const [isOpen, setOpen] = useState(false)

  return (
    <Wrapper className='nav-wrapper relative block font-title h-0 top-0 left-0 right-0 z-999'>
      <Fade top delay={250}>
        <div className='flex absolute w-full h-16 flex-wrap items-center justify-between top-0 p-4 pt-6 box-border'>
          {showLogo ? (
            <Logo className='logo-container' link={config.menuLinks[0].link} />
          ) : null}

          {isMobile ? (
            <MenuButton isOpen={isOpen} onClick={() => setOpen(!isOpen)} />
          )  : (
            <div className='hidden sm:block absolute right-0 sm:right-10'>
              <InlineMenu className='menu flex relative bg-transparent w-full font-title font-medium  text-right list-reset m-0 md:mr-4 lg:mr-8'>
                {config.menuLinks.map((item) => (
                    <MenuItem key={item.name} className='menu-item inline-block text-gray-1000 text-xl cursor-pointer py-0 px-3 last:pr-0'>
                    {item.external ? (
                      <a className='no-underline border-none' href={item.link}>
                        {item.name}
                      </a>
                    ) : (
                      <PageLink
                        className='no-underline border-none'
                        content={item.name}
                        to={item.link}
                      />
                    )}
                    </MenuItem>
                ))}
              </InlineMenu>
            </div>
          )}
        </div>
      </Fade>
      <MenuPanel isOpen={isOpen} />
    </Wrapper>
  )
}
Nav.defaultProps = {
  showLogo: true,
}
Nav.propTypes = {
  showLogo: PropTypes.bool,
  isMobile: PropTypes.bool.isRequired,
}

export default Nav
