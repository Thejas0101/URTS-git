import React, {useState} from 'react'
// import * as ReactBootstrap from "react-bootstrap";
import {Button, Form, } from "react-bootstrap";
import Axios  from 'axios';

import './Contact.css'



function Contact() {

  const [id] = useState(0);
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");



const add = () => {
  console.log("reaching here")
  Axios.post('http://localhost:3001/message', {
      id: id,
      email: email ,
      message: message
  }).then(() => {
      console.log(' message Successfully sent.')
  }); 
}




  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };


    return (
      <div id='box4'>
      <div id='Container3'>
    <div className='Contact'>
       <h1>CONTACT US</h1>
     <Form noValidate validated={validated} onSubmit={handleSubmit}>
     
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label >Email address</Form.Label>
        <Form.Control onChange={(event) => {setEmail(event.target.value)}} type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicComments">
        <Form.Label >Comments</Form.Label>
        <Form.Control onChange={(event) => {setMessage(event.target.value)}}  as="textarea" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Button onClick={add}  variant="primary" type="submit">
        Submit
      </Button>
     
    </Form>     
    </div>
    </div>
    </div>
  )
}

export default Contact;
