import React from "react"
import { graphql } from 'gatsby'
import tw from 'tailwind.macro'
import { accent } from '../../tailwind'
import styled from 'styled-components'
import PropTypes from "prop-types"
import { Parallax } from 'react-spring/renderprops-addons'
// Components
import Layout from '../components/Layout'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Search from '../components/Search'
// Elements
import Content from '../elements/Content'
import { BigTitle } from '../elements/Titles'
// Views
import Footer from '../views/Footer'

const SearchPage = (props) => {
  const { data } = props;
  return (
    <>
    <Layout />
    <Parallax pages={1.5}>
      <Nav />
      <Header offset={0.05} factor={0.4} speed={0.7}>
        <BigTitle>Search<span className='accent'>.</span></BigTitle>
      </Header>
      <Content offset={0.455} factor={0.5} speed={0.6}>
        <Search algolia={data.site.siteMetadata.algolia} />
      </Content>
      <Footer offset={1.2} factor={0.5} />
    </Parallax>
    </>
  )
}

SearchPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default SearchPage

//eslint-disable-next-line no-undef
export const query = graphql`
  query AlgoliaQuery {
    site {
      siteMetadata {
        algolia {
          appId
          searchOnlyApiKey
          indexName
        }
      }
    }
  }
`