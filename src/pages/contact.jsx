import React from 'react'
// Components
import Layout from '../components/Layout'
import Header from '../components/Header'
import { Form, Input, TextArea, Button } from '../components/Forms'
// Elements
import Content from '../elements/Content'
import Inner from '../elements/Inner'
import { BigTitle } from '../elements/Titles'
// Styles
import '../styles/contact.css'


const ContactPage = () => (
  <Layout>
    <Header>
      <BigTitle>Say<br />Hello<span className='text-accent accent-dot'>.</span></BigTitle>
    </Header>
    <Content className='-mt-28 pb-56 md:pb-36'>
      <Inner>
        <ContactForm />
      </Inner>
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
      <Form className='mt-8 md:w-9/10 xl:w-5/6' name={'contact'} action={'/success'}>
        <Input
          type={'text'}
          name={'name'}
          placeholder={'Name'}
          value={this.state.name}
          onChange={this.handleInputChange}
        />
        <Input
          type={'email'}
          name={'email'}
          placeholder={'Email'}
          value={this.state.email}
          autocomplete={true}
          onChange={this.handleInputChange} 
        />
        <Input
          name={'subject'}
          placeholder={'Subject'}
          value={this.state.subject}
          onChange={this.handleInputChange}
        />
        <TextArea
          name={'message'}
          placeholder={'Message'}
          value={this.state.message}
          onChange={this.handleInputChange}
        />
        <Button value={'Submit'} />
      </Form>
    )
  }
}

export default ContactPage
