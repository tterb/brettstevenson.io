import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { animated, useSpring } from '@react-spring/web'
import get from 'lodash/get'
// Icons
import { Globe} from '@styled-icons/fa-solid'
import { Github } from '@styled-icons/fa-brands'


const cornerStyle = {
  right: '-2.65rem',
  boxShadow: 'inset 0 -1px 3px rgba(0,0,0,0.15)',
}

const iconStyle = {
  filter: 'drop-shadow(0 1px 1.5px rgba(0,0,0,0.45))',
}

const titleStyle = {
  textShadow: '0 2px 4px rgba(0,0,0,0.25)',
}

const descriptionStyle = {
  lineHeight: '1.3',
  textShadow: '0 2px 10px rgba(0,0,0,0.3)',
}

const calc = (x, y) => [-(y - window.innerHeight / 2) / 40, (x - window.innerWidth / 2) / 40, 1.05]
const trans = (x, y, s) => `perspective(1200px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function ProjectsCard(props) {
  const [prop, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 200, friction: 40 },
  }))
  const project = props.project

  const wrapperStyle = {
    background: props.bg,
    transform: prop.xys.interpolate(trans),
    transition: 'all 400ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  }

  return (
    <animated.a
      key={project.id}
      className='card-wrapper group relative block w-9/10 md:w-full h-full rounded-lg text-white border-none no-underline cursor-pointer shadow-lg mx-auto px-6 py-4 overflow-hidden hover:text-white focus:text-white'
      aria-label={`Check out ${project.title}`}
      rel='noopener noreferrer'
      target='_blank'
      href={project.link}
      style={wrapperStyle}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onFocus={() => set({ xys: [0, 0, 1.1] })}
      onBlur={() => set({ xys: [0, 0, 1] })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
    >
      <div className='min-h-36 max-h-50 md:min-h-44 md:max-h-62'>
        <span className='absolute bg-black bg-opacity-5 text-xl md:text-xl -top-4 px-12 py-2 pt-6 transform rotate-45 transition-all duration-300 ease-in-out' style={cornerStyle}>
          <div
            className='text-white transition-all duration-500 ease-in-out transform group-hover:-rotate-45 group-focus:-rotate-45'
          >
            {project.github ?
              <Github
                className='fill-white opacity-90 transition-all duration-300 ease-in-out transform group-hover:opacity-100 group-focus:opacity-100'
                size='1em'
                style={iconStyle}
              />
            : <Globe
                className='fill-white transition-all duration-300 ease-in-out transform group-hover:opacity-100 group-focus:opacity-100'
                size='1em'
                style={iconStyle}
              />
            }
          </div>
        </span>
        <div className='font-title font-semibold text-white uppercase leading-tight w-5/6 md:w-9/10 text-xl md:text-2xl xl:text-3xl tracking-normal p-0 pb-2 sm:pb-4 transition-all duration-300 ease-in-out' style={titleStyle}>
          {project.title}
        </div>
        <span className='desc font-sans text-white text-sm text-opacity-95 leading-tight pt-0 pb-4 sm:block sm:text-base md:pt-0 md:pb-8 transition-all duration-300 ease-in-out' style={descriptionStyle}>
          {project.description}
        </span>
      </div>
    </animated.a>
  )
}
ProjectsCard.defaultProps = {
  bg: 'linear-gradient(to right, #7f7fd5, #86a8ef)',
}
ProjectsCard.propTypes = {
  project: PropTypes.shape({
    github: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
  bg: PropTypes.string.isRequired,
}

export default ProjectsCard
