import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
// Styles
import { buttonClickAnimation, scrollArrowAnimation } from 'styles/animations'


const Wrapper = styled(Link)`
    right: 4vw;
    bottom: 10vh;
`

const Button = styled.div`
    &.animated {
        ${buttonClickAnimation('2s')};
        .arrow {
            ${scrollArrowAnimation('2s')};
        }
    }
`

const Arrow = styled.span`
    border-radius: 0;
    .arrow-top::before,
    .arrow-top::after {
        content: '';
        position: relative;
        display: block;
        background: #677486;
        width: 22px;
        height: 6px;
        border-radius: 2px;
    }
    .arrow-top::after {
        width: 6px;
        height: 22px;
        top: -6px;
    }
    .arrow-base {
        width: 6px;
        border-radius: 2px;
    }
`

const ScrollTop = ({ location, visible }) => {

    const [animationClass, setAnimationClass] = useState('')

    const topPath = location.pathname.substr(-1) === '/' ? `${location.pathname}#top` : `${location.pathname}/#top`

    return (
        <Wrapper
            className='group fixed hidden md:block text-center w-14 h-14 rounded-full transition-all duration-300 ease-in-out cursor-pointer'
            aria-label='Scroll to top'
            to={topPath}
        >
            <Button
                className={`flex bg-white items-center justify-center w-full h-full rounded-full overflow-hidden cursor-pointer shadow-md group-hover:shadow-lg group-focus:shadow-lg transition-all duration-200 ease-in-out${animationClass}`}
                onClick={() => setAnimationClass(' animated')}
                onAnimationEnd={() => setAnimationClass('')}
            >
                <Arrow className='arrow flex relative items-center justify-center w-full h-full top-0.5 opacity-60 transition-opacity duration-200 ease-in-out group-hover:opacity-100 group-focus:opacity-100'>
                    <span className='arrow-top block relative w-8 h-8 top-1 transform rotate-45' />
                    <span className='arrow-base absolute block bg-base-600 h-7' />
                </Arrow>
            </Button>
        </Wrapper>
    )
}
ScrollTop.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
        hash: PropTypes.string,
    }).isRequired,
    visible: PropTypes.bool.isRequired,
}

export default ScrollTop
