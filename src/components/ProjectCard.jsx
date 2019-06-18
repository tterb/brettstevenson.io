import React from 'react'
import Image from 'gatsby-image'
import styled from 'styled-components'
import { animated, useSpring } from 'react-spring'
import tw from 'tailwind.macro'
import PropTypes from 'prop-types'
import PageLink from './PageLink'
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


const Wrapper = styled(animated.div)`
  ${tw`relative block w-full h-full rounded-lg text-white border-none no-underline cursor-pointer shadow-lg px-6 py-4 overflow-hidden`};
  background: ${props => props.bg};
  transition: all 400ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    color: #fff;
  }
`

const Title = styled.div`
  ${tw`text-white uppercase text-2xl md:text-3xl xl:text-4xl tracking-normal font-title font-semibold pt-1 pb-4`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  transition: all 350ms ease-in-out;
`
const Text = styled.div`
  ${tw`font-sans leading-tight text-sm md:text-base xl:text-lg pb-8`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  transition: all 400ms ease-in-out;
`

const Corner = styled.span`
  ${tw`absolute text-xl md:text-2xl px-12 py-2 pt-6`};
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

const calc = (x, y) => [-(y - window.innerHeight/2)/40, (x - window.innerWidth/2)/40, 1.05]
const trans = (x, y, s) => `perspective(1200px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function ProjectsCard(props) {
  const [prop, set] = useSpring(() => ({ 
    xys: [0, 0, 1], config: { mass: 5, tension: 200, friction: 40 } 
  }))
  const project = props.project
  // const hasSite = project.site ? true : false
  const hasRepo = project.github ? true : false
  const link = hasRepo ? project.github : project.site
  
  function handleClick(e) {
    window.open(props.project.link, '_target')
  }
  
  return (
    <Wrapper className='card-wrapper' rel='noopener noreferrer' target='_blank' 
      bg={props.bg} 
      onClick={handleClick}
      onMouseMove={({clientX: x, clientY: y}) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: prop.xys.interpolate(trans) }}>
      <div className='project-card'>
        <Corner>
          <a href={link} target='_blank'>
            { project.github ? <FontAwesomeIcon icon={faGithub}/> : <FontAwesomeIcon icon={faGlobe}/> }
          </a>
        </Corner>
        <Title className='title'>{project.title}</Title>
        <Text className='desc'>{project.description.childMarkdownRemark.excerpt}</Text>
      </div>
    </Wrapper>
  )
}


PageLink.defaultProps = {
  bg: 'linear-gradient(to right, #7f7fd5, #86a8ef)',
}
PageLink.propTypes = {
  project: PropTypes.object.isRequired,
  bg: PropTypes.string,
}

export default ProjectsCard