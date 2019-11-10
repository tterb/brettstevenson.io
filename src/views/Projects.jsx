import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { useTrail } from 'react-spring'
import tw from 'tailwind.macro'
import styled from 'styled-components'
// Elements
import { DividerMiddle } from '../elements/Dividers'
import { Title } from '../elements/Titles'
import Content from '../elements/Content'
import Inner from '../elements/Inner'
// Components
import ProjectCard from '../components/ProjectCard'
import Cube from '../components/Cube'
// Hooks
import useWindowDimensions from '../hooks/WindowDimensions'


const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`}
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const Projects = ({ offset, factor }) => {
  let divOffset = offset
  if (typeof window !== 'undefined') {
    const { height, width } = useWindowDimensions()
    if (width <= 600) {
      factor *= 1.25
      divOffset = offset - (offset * 0.175)
    }
  }
  const colors = ['linear-gradient(to right, #7f7fd5, #86a8ef)', 'linear-gradient(to right, #83a0e8, #76bef6)']
  const data = useStaticQuery(projectQuery)
  const projects = data.allMdx.edges
  const trail = useTrail(projects.length, {
    from: { top: '100rem' },
    to: { top: '-0.75rem' },
  })
  return (
    <>
      <DividerMiddle
        bg='linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)'
        offset={divOffset - 0.2}
        factor={factor}
        speed={0.35}
      />
      <Content offset={offset - 0.005} factor={1.75} speed={0.45}>
        <Inner>
          <Cube />
          <Title>Projects</Title>
          <ProjectsWrapper>
            {trail.map((style, index) => (
              <ProjectCard
                key={index}
                project={projects[index].node.frontmatter}
                bg={colors[index % colors.length]}
                style={style} />
            ))}
          </ProjectsWrapper>
        </Inner>
      </Content>
    </>
  )
}

Projects.propTypes = {
  offset: PropTypes.number.isRequired,
  factor: PropTypes.number,
}

export default Projects

const projectQuery = graphql`
  query ProjectQuery {
    allMdx(
      filter: { fields: { sourceInstanceName: { eq: "projects" } } }
      sort: { fields: [frontmatter___key], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            link
            github
            languages
          }
        }
      }
    }
  }
`
