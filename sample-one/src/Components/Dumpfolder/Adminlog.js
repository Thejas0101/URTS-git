import React from 'react'
// import * as ReactBootstrap from "react-bootstrap";
import {Button, Form, } from "react-bootstrap"
import './Adminlog.css'

function Adminlog() {
    return (
      <div id='box'>
      <div id='Container'>
      <div className='Admin'>
        <Form>
          <h1><center>Admin Login</center></h1>
        <Form.Group className="mb-3" controlId="formBasicId">
          <Form.Label>Admin ID</Form.Label>
          <Form.Control type="Id" placeholder="Admin Id" />
         
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Admin Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          {/* <Form.Check type="checkbox" label="Check me out" /> */}
        </Form.Group>
        
        <Button href="Sampleadmin"variant="primary" type="submit">
      
          Login
          
        </Button>   
      
      </Form>
      </div>
      </div>
      </div>
    )
  }
  
  export default Adminlog
  