/* eslint-disable no-unused-vars */
// Render Prop
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Textarea } from '@chakra-ui/react';
import { Center } from '@chakra-ui/react';

const Contact = () => (
    <Center>
    <div >
    
    <h4 className='ms-5 '>Submit a Request</h4>
    <br />
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        message:'',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
        
        <Form className='contactForm'>
        <label htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" placeholder="Jane" />

        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" placeholder="Doe" />

        <label htmlFor="email">Your Email Address</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <label htmlFor="message">Message</label>
        <Textarea
          id="message"
          name="message"
          textArea=""
          type="text"
        />
        <button type="submit">Submit</button>
      </Form>
      
     
    </Formik>
   
  </div>
  </Center>
);

export default Contact;


