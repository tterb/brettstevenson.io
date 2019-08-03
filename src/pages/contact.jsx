import React from 'react'
import { Parallax } from 'react-spring/renderprops-addons'
// Components
import Layout from '../components/Layout'
import Header from '../components/Header'
import ContactForm from '../components/ContactForm'
// Elements
import Content from '../elements/Content'
import { BigTitle } from '../elements/Titles'
// Views
import Footer from '../views/Footer'
// Styles
import '../styles/contact.scss'

const ContactPage = () => (
  <Layout pages={1.35}>
    <Header offset={0.02} factor={0.4} speed={0.7}>
      <BigTitle>Say<br/>Hello<span className='accent'>.</span></BigTitle>
    </Header>
    <Content offset={0.5} factor={0.5} speed={0.6} style={{padding: `14rem !important`}}>
      <ContactForm />
    </Content>
  </Layout>
)

export default ContactPage
