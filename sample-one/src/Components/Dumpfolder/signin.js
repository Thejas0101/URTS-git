import React from 'react'
import {Button, Form, } from "react-bootstrap"
import './signin.css'

function Signin() {
  return (
<div id='box1'>
<div id='Contain'>
    <div className='Signin'>
      <Form>
        <h1><center> LOGIN</center></h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        {/* <Form.Check type="checkbox" label="Check me out" /> */}
      </Form.Group>
      <Button  href="Home"variant="primary" type="submit">
        Login
      </Button>
      <br></br>
      <br></br>
      <p>Admin?<a href='Sampleadmin'>Admin</a></p>

      <p>Forgetten password? <a href="Forgetpass">Reset it</a></p>
      <p>New Here? <a href="Signup">SignUp</a></p>
    </Form>
    </div>
    </div>
    </div>
  )
}

export default Signin
