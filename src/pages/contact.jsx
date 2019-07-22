import React from 'react'
import { Parallax } from 'react-spring/renderprops-addons'
// Components
import Layout from '../components/Layout'
import Nav from '../components/Nav'
import Header from '../components/Header'
import ContactForm from '../components/ContactForm'
// Elements
import Content from '../elements/Content'
import { BigTitle } from '../elements/Titles'
// Views
import Footer from '../views/Footer'
// Hooks
import { isMobile } from '../hooks/WindowDimensions'
// Styles
import '../styles/contact.scss'

const ContactPage = () => {
  let pageHeight = 1.35
  const mobile = isMobile()
  return (
    <>
      <Layout />
      <Parallax pages={pageHeight}>
        <Nav mobile={mobile} />
        <Header offset={0.05} factor={0.4} speed={0.7}>
          <BigTitle>Say<br/>Hello<span className='accent'>.</span></BigTitle>
        </Header>
        <Content offset={0.5} factor={0.5} speed={0.6} style={{padding: `14rem !important`}}>
          <ContactForm />
        </Content>
        <Footer offset={1.025} factor={0.5} />
      </Parallax>
    </>
  )
}

export default ContactPage
