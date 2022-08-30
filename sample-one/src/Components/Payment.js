import React from 'react'
import {Button, Form, } from "react-bootstrap"
import './Payment.css'

function Payment() {
  return (
<div id='box5'>
<div id='Container5'>
    <div className='Pay'>
      <Form>
        <h1><center> Payment gateway</center></h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Payment mode</Form.Label>
        <select >
             <option value="" hidden>Mode</option>
             <option>Googlepay</option>
             <option>Phonepay</option>
             <option>Amazonpay</option>
             <option>Paytm</option>
             
          </select>
        {/* <Form.Control type="email" placeholder="Enter email" /> */}
        {/* <Form.Text className="text-muted">
        We'll never share your UPI id or Password with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mobile number</Form.Label>
        <Form.Control type="text" placeholder="Mobile number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        {/* <Form.Check type="checkbox" label="Check me out" /> */}
      </Form.Group>
      <Button  href="Home"variant="primary" type="submit">
        Make payment

      </Button>
      <br></br>
      <br></br>
     

  
    </Form>
    </div>
    </div>
    </div>
  )
}

export default Payment