import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { animated, useSpring } from 'react-spring'
import get from 'lodash/get'
// Icons
import { Globe} from '@styled-icons/fa-solid'
import { Github } from '@styled-icons/fa-brands'


const Card = styled.div`
  &:hover {
    span svg {
      filter: drop-shadow(0 1px 1.5px rgba(0,0,0,0.6));
    }
  }
`

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
  const link = get(project, 'github') ? project.github : project.link

  function handleClick() {
    window.open(props.project.link, '_target')
  }

  const wrapperStyle = {
    background: props.bg,
    transform: prop.xys.interpolate(trans),
    transition: 'all 400ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  }

  return (
    <animated.div
      key={project.id}
      className='card-wrapper group relative block xs:w-9/10 md:w-full h-full rounded-lg text-white border-none no-underline cursor-pointer shadow-lg xs:mx-auto px-6 py-4 overflow-hidden hover:text-white'
      target='_blank'
      rel='noopener noreferrer'
      style={wrapperStyle}
      onClick={handleClick}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
    >
      <div className='min-h-8 max-h-50 sm:min-h-36 md:min-h-44 md:max-h-62'>
        <span className='absolute bg-black bg-opacity-5 text-2xl md:text-2xl -top-4 px-12 py-2 pt-6 transform rotate-45 transition-all duration-300 ease-in-out' style={cornerStyle}>
          <a
            className='transition-all duration-500 ease-in-out transform group-hover:-rotate-45'
            href={link}
            aria-label={project.title}
            target='_blank'
            rel='noopener noreferrer'
          >
            {project.github ?
              <Github
                className='fill-white opacity-80 transition-all duration-300 ease-in-out transform group-hover:-rotate-45 hover:opactity-95'
                size='1em'
                style={iconStyle}
              />
            : <Globe
                className='fill-white transition-all duration-300 ease-in-out transform group-hover:-rotate-45'
                size='1em'
                style={iconStyle}
              />
            }
          </a>
        </span>
        <div className='font-title font-semibold text-white uppercase leading-tight w-9/10 xs:text-3xl xl:text-4xl tracking-normal py-1 sm:pb-4 transition-all duration-300 ease-in-out' style={titleStyle}>
          {project.title}
        </div>
        <span className='desc font-sans text-white text-opacity-95 text-lg leading-tight pt-2 pb-4 lg:text-lg md:pb-8 sm:block sm:text-base sm:pt-0 transition-all duration-400 ease-in-out' style={descriptionStyle}>
          {project.description}
        </span>
      </div>
    </animated.div>
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
