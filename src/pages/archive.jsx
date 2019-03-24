import React from 'react'
import { graphql } from 'gatsby'
import _ from 'lodash'
import tw from 'tailwind.macro'
import { colors } from '../../tailwind'
import styled from 'styled-components'
import { Parallax } from 'react-spring/renderprops-addons'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
// Components
import Layout from '../components/Layout'
import Nav from '../components/Nav'
import Header from '../components/Header'
import InlinePost from '../components/InlinePost'
// Elements
import Content from '../elements/Content'
import Inner from '../elements/Inner'
import { Divider } from '../elements/Dividers'
import { BigTitle, Title } from '../elements/Titles'
// Views
import Footer from '../views/Footer'
// Styles
import '../styles/tags.scss'

const ArchiveTitle = styled(Title)`
  ${tw`ml-0`}
  margin-left: 0 !important;
`

const ArchiveList = styled.ul`
  ${tw`list-reset`}
`

class ArchivePage extends React.Component {
  render() {
    const { tag } = this.props.pageContext
    const edges = _.get(this, 'props.data.allContentfulBlogPost.edges')
    return (
      <>
      <Layout />
      <Parallax pages={1.8}>
        <Nav />
        <Header offset={0} factor={0.4}>
          <BigTitle>Archive<span className='accent'>.</span></BigTitle>
        </Header>
        <Divider
          bg='linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)'
          clipPath='polygon(0 16%, 100% 4%, 100% 82%, 0 94%)'
          speed={0.2}
          offset={0.2}
          factor={1.25}
        />
        <Content offset={0.3} factor={1.05} speed={0.25} style={`padding-top: 0 !important`} className='tags-content'>
          <Inner>
            <ArchiveList className='archive-list'>
              {edges.map(({ node }) => {
                return (
                  <InlinePost node={node} />
                )
              })}
            </ArchiveList>
            <div className='back-blog-btn'>
              <AniLink cover bg={colors['blue-black']} duration={1} direction='right' to='/tags' className='back-blog btn'>Back to Blog</AniLink>
            </div>
          </Inner>
        </Content>
        <Footer offset={1.5} factor={0.5} />
      </Parallax>
      </>
    )
  }
}

export default ArchivePage

export const archiveQuery = graphql`
  query ArchiveQuery {
    allContentfulBlogPost(
      limit: 100
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "DD MMM, YYYY")
          tags
          description {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 60, truncate: true)
            }
          }
        }
      }
    }
  }
`