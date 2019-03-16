import React from 'react'
import Image from 'gatsby-image'
import styled from 'styled-components'
import { animated, useSpring } from 'react-spring/hooks.js'
import tw from 'tailwind.macro'
import PropTypes from 'prop-types'

const Wrapper = styled(animated.a)`
  ${tw`relative w-full rounded-lg text-white border-none no-underline cursor-pointer shadow-lg px-6 py-4 overflow-hidden`};
  background: ${props => props.bg};
  transition: all 400ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    color: #fff;
  }
`

const Title = styled.div`
  ${tw`text-white uppercase text-2xl md:text-3xl xl:text-4xl tracking-normal font-sans pb-4`};
  font-weight: 600;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  /* transform: translateY(-100px); */
  transition: all 350ms ease-in-out;
`
const Text = styled.div`
  ${tw`font-sans text-sm md:text-base pb-8`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  /* transform: translateY(100px); */
  transition: all 400ms ease-in-out;
`

const calc = (x, y) => [-(y - window.innerHeight/2)/40, (x - window.innerWidth/2)/40, 1.05]
const trans = (x, y, s) => `perspective(1200px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function ProjectsCard(props) {
    const [prop, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 200, friction: 40 } }))
    
    function handleClick(e) {
      location.href = props.project.link
    }
    
    return (
      <Wrapper className='card-wrapper' target="_blank" rel="noopener noreferrer" bg={props.bg} onClick={handleClick}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: prop.xys.interpolate(trans) }} >
        <div className="project-card">
          <Title className="title">{props.project.title}</Title>
          <Text className="desc">{props.project.description.childMarkdownRemark.excerpt}</Text>
        </div>
      </Wrapper>
    )
}

export default ProjectsCard
