import React from 'react'
// import * as ReactBootstrap from "react-bootstrap";
import {Button, Form, } from "react-bootstrap"
import './Resetpass.css'

function Reasetpass() {
  return (
    <div className='Reset'>
      <Form>
        <h1><center>Reset Password</center></h1>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Password</Form.Label>
        <Form.Control type="Password" placeholder="Enter password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
     
      <Button href="Login" variant="dark" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default Reasetpass
