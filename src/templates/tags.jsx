import React from 'react'
import { graphql } from 'gatsby'
import tw from 'tailwind.macro'
import { colors } from '../../tailwind'
import styled from 'styled-components'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { Parallax } from 'react-spring/renderprops-addons'
import PageLink from '../components/PageLink'
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

const TagTitle = styled(Title)`
  ${tw`ml-0`}
  margin-left: 0 !important;
`

const TagList = styled.ul`
  ${tw`list-reset`}
`

class Tags extends React.Component {
  render() {
    const { tag } = this.props.pageContext
    const edges = _.get(this, 'props.data.allContentfulBlogPost.edges')
    return (
      <>
      <Layout />
      <Parallax pages={1.5}>
        <Nav />
        <Header offset={0} factor={0.4}>
          <BigTitle>Tags<span className='accent'>.</span></BigTitle>
        </Header>
        <Divider
          bg='linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)'
          clipPath='polygon(0 16%, 100% 4%, 100% 82%, 0 94%)'
          speed={0.2}
          offset={0.2}
          factor={1.5}
        />
        <Content speed={0.25} offset={0.2} factor={1} style={`padding-top: 0 !important`} className='tags-content'>
          <Inner>
            <TagTitle>{_.upperFirst(tag)}</TagTitle>
            <TagList className='tag-list'>
              {edges.map(({ node }) => {
                return (
                  <InlinePost node={node} />
                )
              })}
            </TagList>
            <div className='all-tags-btn'>
              <PageLink direction='right' to='/tags' className='all-tags btn'>All tags</PageLink>
            </div>
          </Inner>
        </Content>
        <Footer offset={1.2} factor={0.5} />
      </Parallax>
      </>
    )
  }
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
}

export default Tags

export const tagQuery = graphql`
  query TagQuery($tag: String) {
    allContentfulBlogPost(
      limit: 100
      sort: { fields: [publishDate], order: DESC }
      filter: { tags: { in: [$tag] } }
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