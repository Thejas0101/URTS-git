import React from 'react'
import {useState} from 'react'
import Axios from 'axios'
// import * as ReactBootstrap from "react-bootstrap";
import {Button, Form, } from "react-bootstrap"
import './Adminlog.css'

function Adminlog() {

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const logintoadmin = () => {
    console.log(email, password);
    Axios.post("http://localhost:3001/Adminlogin", {
      email: email,
      password: password,
    })
      .then((res) => {
        console.log("Successfully sent the cresa.");
        console.log(res);
        if (res.data.token) {
          console.log("Token recieved");
          document.cookie = res.data.token + "; Path=/;";
          console.log(document.cookie);
          window.location.replace("http://localhost:3000/sampleadmin");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("invalid email or password")
      });
  };



    return (


      <div id='box'>
      <div id='Container'>
      <div className='Admin'>
        <Form>
          <h1><center>Admin Login</center></h1>
        <Form.Group className="mb-3" controlId="formBasicId">
          <Form.Label>Admin ID</Form.Label>
          <Form.Control onChange={(event) => {setEmail(event.target.value)}} required type="email" placeholder="Admin Id" />
         
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Admin Password</Form.Label>
          <Form.Control  onChange={(event) => {setPassword(event.target.value)}} required type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          {/* <Form.Check type="checkbox" label="Check me out" /> */}
        </Form.Group>
        
        <Button variant="primary" onClick={logintoadmin}>
      
          Login
          
        </Button>   
      
      </Form>
      </div>
      </div>
      </div>
    )
  }
  
  export default Adminlog
  