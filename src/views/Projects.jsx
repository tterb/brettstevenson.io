import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { colors } from '../../tailwind'
import PropTypes from 'prop-types'
// Elements
import { DividerMiddle } from '../elements/Dividers'
import { Title } from '../elements/Titles'
import Content from '../elements/Content'
import Inner from '../elements/Inner'
// Components
import ProjectCard from '../components/ProjectCard'
import Cube from '../components/Cube'

import { UpDown, UpDownWide } from '../styles/animations'


const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

class Projects extends React.Component {
  render() {
    return (
      <>
        <DividerMiddle
          bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
          speed={0.15}
          offset={`${this.props.offset-0.5}`}
          factor={2.3}
        />
        <Content speed={0.25} offset={`${this.props.offset-0.25}`} factor={1.75}></Content>
      </>
    )
  }
}

Projects.propTypes = {
  offset: PropTypes.number.isRequired,
}

export default Projects