import React from 'react'
import { Button, Form, } from "react-bootstrap";
import './Forgetpass.css'
      
     
function Forgetpass() {
  return (
    <div className='pass'>
    <h1><center>Forgotten password</center></h1>
    <form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email-id:</Form.Label>
        <Form.Control type="Email" placeholder="Enter your Email Id" />
      </Form.Group>

      <Button  variant="dark" type="submit">
      
        Send OTP

      </Button>



    </form>
    
    </div>
  )
}

export default Forgetpass
