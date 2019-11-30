import React from 'react'
import styled from 'styled-components'
import { animated, useSpring } from 'react-spring'
import get from 'lodash/get'
import tw from 'tailwind.macro'
import PropTypes from 'prop-types'
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


const Wrapper = styled(animated.div)`
  ${tw`relative block xs:w-9/10 md:w-full h-full rounded-lg text-white border-none no-underline cursor-pointer shadow-lg xs:mx-auto px-6 py-4 overflow-hidden`}
  background: ${props => props.bg};
  transition: all 400ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    color: #fff;
  }
`

const Card = styled.div`
  min-height: 11rem;
  max-height: 250px;
  &:hover {
    .desc {
      color: rgba(255,255,255,0.95);
    }
    span svg {
      transform: rotate(-45deg);
      filter: drop-shadow(0 1px 1.5px rgba(0,0,0,0.6));
      transition: all 400ms ease-in-out;
    }
  }
  @media screen and (max-width: 700px) {
    min-height: 9rem;
    max-height: 200px;
  }
  @media screen and (max-width: 600px) {
    min-height: 9rem;
    max-height: 200px;
  }
  @media screen and (max-width: 400px) {
    min-height: 2rem;
    max-height: 200px;
  }
`

const Title = styled.div`
  ${tw`font-title font-semibold text-white uppercase w-9/10 xs:text-3xl xl:text-4xl tracking-normal py-1 sm:pb-4`}
  text-shadow: 0 2px 4px rgba(0,0,0,0.25);
  transition: all 350ms ease-in-out;
`
const Text = styled.div`
  ${tw`font-sans text-lg leading-tight pt-2 pb-4 lg:text-lg md:pb-8 sm:block sm:text-base sm:pt-0`}
  line-height: 1.3;
  text-shadow: 0 2px 10px rgba(0,0,0,0.3);
  transition: all 400ms ease-in-out;
`

const Corner = styled.span`
  ${tw`absolute text-2xl md:text-2xl px-12 py-2 pt-6`}
  background: rgba(0,0,0,0.05);
  top: -0.75rem;
  right: -2.65rem;
  box-shadow: inset 0 -1px 3px rgba(0,0,0,0.15);
  transform: rotate(45deg);
  transition: all 350ms ease-in-out;
  a {
    color: rgba(255,255,255,0.85);
    svg {
      fill: rgba(255,255,255,0.85);
      filter: drop-shadow(0 1px 1.5px rgba(0,0,0,0.45));
      transition: all 350ms ease-in-out;
    }
    &:hover svg {
      color: rgba(255,255,255,0.95);
    }
  }
`

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

  return (
    <Wrapper className='card-wrapper'
      target='_blank'
      rel='noopener noreferrer'
      bg={props.bg}
      onClick={handleClick}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: prop.xys.interpolate(trans) }}>
      <Card>
        <Corner>
          <a href={link} aria-label={project.title} target='_blank' rel='noopener noreferrer'>
            { project.github ?
              <FontAwesomeIcon icon={faGithub} />
              : <FontAwesomeIcon icon={faGlobe} />
            }
          </a>
        </Corner>
        <Title>{project.title}</Title>
        <Text className='desc'>{project.description}</Text>
      </Card>
    </Wrapper>
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
