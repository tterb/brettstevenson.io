import React from 'react'
import Image from 'gatsby-image'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import PropTypes from 'prop-types'

const Wrapper = styled.a`
  width: 100%;
  ${tw`shadow-lg relative no-underline rounded-lg text-white`};
  background: ${props => props.bg};
  border: none;
  transform: translateY(0);
  transition: all 400ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
  &:hover {
    color: #fff;
    transform: translateY(-5px);
  }
`

const Mask = styled.div`
  width: 100%;
  ${tw`relative rounded-lg px-8 pt-3 pb-8 md:pt-8 pb-16 text-white`};
  background: rgba(0,0,0,0.35);
  min-height: 225px;
  max-height: 100%;
  transform: translateY(0);
  transition: all 400ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  opacity: 0;
  &:hover {
    /* transform: translateY(-5px); */
    opacity: 1;
  }
`

const Title = styled.div`
  ${tw`text-white uppercase text-2xl md:text-3xl xl:text-4xl tracking-wide font-sans pb-4`};
  font-weight: 600;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  /* transform: translateY(-100px); */
  transition: all 350ms ease-in-out;
  opacity: 0;
  &:hover {
    transform: translateY(0px);
    opacity: 1;
  }
`
const Text = styled.div`
  ${tw`opacity-75 font-sans text-sm md:text-base pb-8`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  /* transform: translateY(100px); */
  transition: all 400ms ease-in-out;
  opacity: 0;
  &:hover {
    color: #fff;
    transform: translateY(0px);
    opacity: 1;
  }
`

class ProjectsCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    location.href = this.props.project.link
  }
  
  render() {
    return (
      <Wrapper target="_blank" rel="noopener noreferrer" onClick={this.handleClick}>
      <div className="project-card">
          <Image alt={this.props.project.title}
            css={{ top: 0, left: 0, right: 0, bottom: 0 }} 
            style={{ position: `absolute` }} 
            fixed={this.props.project.image.fixed}/>
          <Mask className="mask">
            <Title className="title">{this.props.project.title}</Title>
            <Text className="desc">{this.props.project.description.childMarkdownRemark.excerpt}</Text>
          </Mask>
        </div>
      </Wrapper>
    )
  }
}

export default ProjectsCard
