import React from 'react'
import { graphql } from 'gatsby'
import tw from 'tailwind.macro'
import { colors } from '../../tailwind'
import styled from 'styled-components'
import { Parallax } from 'react-spring/renderprops-addons'
// Components
import Layout from '../components/Layout'
import Header from '../components/Header'
import InlinePost from '../components/InlinePost'
import PageLink from '../components/PageLink'
// Elements
import Content from '../elements/Content'
import Inner from '../elements/Inner'
import { Divider } from '../elements/Dividers'
import { BigTitle, Title } from '../elements/Titles'
// Views
import Footer from '../views/Footer'


const ArchiveTitle = styled(Title)`
  ${tw`ml-0`}
  margin-left: 0 !important;
`

const ArchiveList = styled.ul`
  ${tw`list-reset`}
`

const ArchivePage = ({ pageContext, data }) => {
  require('../styles/tags.scss')
  const { tag } = pageContext
  const posts = data.allMdx.edges
  return (
    <Layout pages={1.8}>
      <Header offset={0} factor={0.4}>
        <BigTitle>Archive<span className='accent'>.</span></BigTitle>
      </Header>
      <Divider
        bg='linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)'
        clipPath='polygon(0 16%, 100% 4%, 100% 82%, 0 94%)'
        speed={0.2}
        offset={0.275}
        factor={1.25}
      />
      <Content offset={0.375} factor={1.05} speed={0.25} className='tags-content pt-0'>
        <Inner>
          <ArchiveList className='archive-list'>
            {posts.map(({ node }) => {
              return (
                <InlinePost node={node} />
              )
            })}
          </ArchiveList>
          <div className='back-blog-btn'>
            <PageLink direction='right' to='/blog' className='back-blog btn'>Back to Blog</PageLink>
          </div>
        </Inner>
      </Content>
      <Footer offset={1.5} factor={0.5} />
    </Layout>
  )
}

export default ArchivePage

export const archiveQuery = graphql`
  query {
    allMdx(
      filter: { fields: { sourceInstanceName: { eq: "posts" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 100
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMM, YYYY")
            description
          }
        }
      }
    }
  }
`
