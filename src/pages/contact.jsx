import React from 'react'
// Components
import Layout from '../components/Layout'
import Header from '../components/Header'
import { Form, Input, Message, Button } from '../components/Forms'
// Elements
import Content from '../elements/Content'
import { BigTitle } from '../elements/Titles'
// Styles
import '../styles/contact.scss'

const ContactPage = () => (
  <Layout pages={1.35}>
    <Header offset={0.02} factor={0.4} speed={0.7}>
      <BigTitle>Say<br />Hello<span className='accent'>.</span></BigTitle>
    </Header>
    <Content offset={0.5} factor={0.5} speed={0.6} style={{ padding: `14rem !important` }}>
      <ContactForm />
    </Content>
  </Layout>
)

class ContactForm extends React.Component {

  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }

  handleInputChange = (evt) => {
    const target = evt.target
    this.setState({
      [target.name]: target.value,
    })
  }

  render() {
    return (
      <Form name={'contact'} action={'/success'}>
        <Input
          type={'text'}
          name={'name'}
          placeholder={'Name'}
          value={this.state.name}
          onChange={this.handleInputChange} />
        <Input
          type={'email'}
          name={'email'}
          placeholder={'Email'}
          value={this.state.email}
          autocomplete={true}
          onChange={this.handleInputChange} />
        <Input
          name={'subject'}
          placeholder={'Subject'}
          value={this.state.subject}
          onChange={this.handleInputChange} />
        <Message
          name={'message'}
          placeholder={'Message'}
          value={this.state.message}
          onChange={this.handleInputChange} />
        <Button value={'Submit'} />
      </Form>
    )
  }
}

export default ContactPage
