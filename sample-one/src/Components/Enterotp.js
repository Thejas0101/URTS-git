import React from 'react'
import { Button, Form, } from "react-bootstrap";
import './Enterotp.css'
function Enterotp() {
  return (
    <div className='otp'>
    <h1><center>Forgotten password</center></h1>
    <form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter OTP:</Form.Label>
        <Form.Control type="otp" placeholder="Enter OTP" />
      </Form.Group>

     <Button variant="dark" type="submit" >

        Submit OTP
      </Button>



    </form>
    
    </div>
  )
}

export default Enterotp
