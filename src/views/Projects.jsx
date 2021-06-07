import React from 'react'
import PropTypes from 'prop-types'
import { useTrail } from 'react-spring'
// Elements
import { DividerMiddle } from 'elements/Dividers'
import { SectionTitle } from 'elements/Titles'
import Content from 'elements/Content'
import Inner from 'elements/Inner'
// Components
import ProjectCard from 'components/ProjectCard'
import Cube from 'components/Cube'
// Hooks
import useWindowDimensions from 'hooks/WindowDimensions'


const Projects = ({  id, projects, isMobile }) => {
  const win = useWindowDimensions()
  const colors = win.width < 650 ? [
    'linear-gradient(to right, #7f7fd5, #76bef6)'
  ] : [
    'linear-gradient(to right, #7f7fd5, #86a8ef)',
    'linear-gradient(to right, #83a0e8, #76bef6)',
  ]
  const projectCount = isMobile ? projects.length - 2 : projects.length
  const clipPath = win.width < 650 ? 'polygon(0 0, 100% 7%, 100% 100%, 0 93%)' : 'polygon(0 0, 100% 10%, 100% 100%, 0 90%)'

  const trail = useTrail(projectCount, {
    from: { top: '100rem' },
    to: { top: '-0.75rem' },
  })
  return (
    <DividerMiddle
      className='flex relative bg-gradient-to-r from-indigo-600 to-blue-500 w-full h-full min-h-400 md:min-h-320 mt-28'
      clipPath={clipPath}
    >
      <Content id={id}>
        <Inner>
          <div className='section-title flex items-baseline'>
            <Cube color='red' />
            <SectionTitle>Projects</SectionTitle>
          </div>
          <div className='grid grid-cols-1 gap-8 justify-between mt-8 md:grid-cols-2 md:gap-12 xl:gap-16'>
            {trail.map((style, index) => (
              <ProjectCard
                key={projects[index].id}
                project={projects[index].frontmatter}
                bg={colors[index % colors.length]}
                style={style}
              />
            ))}
            {isMobile ?
              <ProjectCard
                project={{
                  title: 'More..',
                  description: 'You can see what else I\'ve been building on GitHub',
                  github: 'https://github.com/tterb'
                }}
                bg={colors[0]}
              />
            : null}
          </div>
        </Inner>
      </Content>
    </DividerMiddle>
  )
}
Projects.propTypes = {
  id: PropTypes.string.isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        github: PropTypes.string,
        link: PropTypes.string,
        languages: PropTypes.arrayOf(PropTypes.string),
      }).isRequired,
    }).isRequired,
  ).isRequired,
  isMobile: PropTypes.bool.isRequired,
}

export default Projects
