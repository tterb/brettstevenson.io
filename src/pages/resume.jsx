import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import tw from 'tailwind.macro'
import styled from 'styled-components'
// Components
import Layout from '../components/Layout'


const Wrapper = styled.div`
  ${tw`w-full mt-0`};
  height: 100vh;
`

class Resume extends React.Component {
  render() {
    const resume = get(this, 'props.data.contentfulDocument.pdf')
    return (
      <>
        <Layout />
        <Wrapper>
          <object class="pdf-container" data={resume.file.url} width="100%" height="100%" type='application/pdf'/>
        </Wrapper>
      </>
    )
  }
}

export default Resume

export const resumeQuery = graphql`
  query ResumeQuery {
    contentfulDocument( title: { eq: "Resume" }) {
      title
      publishDate
      pdf {
        file {
          url
        }
      }
    }
  }
`