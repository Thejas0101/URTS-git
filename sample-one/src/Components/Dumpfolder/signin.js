import React from "react";
import { Button, Form } from "react-bootstrap";
import "./signin.css";
import {useState} from 'react'
import Axios from 'axios'

function UserSignin() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [notfound, setNotFound] =useState("");

  const userLogin = () => {
    console.log(email, password);
    Axios.post("http://localhost:3001/Login", {
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
          window.location.replace("http://localhost:3000/Home");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("invalid email or password")
      });
  };


  return (
    <div id="box1">
      <div id="Contain">
        <div className="Signin">
          <Form>
            <h1>
              <center> LOGIN</center>
            </h1>
{/* Email Address */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control onChange={(event) => {setEmail(event.target.value)}} required type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
{/* Password*/}
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control required type="password" placeholder="Password"
              onChange={(event) => {setPassword(event.target.value)}} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              {/* <Form.Check type="checkbox" label="Check me out" /> */}
            </Form.Group>
            <Button  variant="primary"  onClick={userLogin}>
              Login
            </Button>
            <br></br>
            <br></br>
            <p>
              Admin?<a href="Sampleadmin">Admin</a>
            </p>

            <p>
              Forgetten password? <a href="Forgetpass">Reset it</a>
            </p>
            <p>
              New Here? <a href="Signup">SignUp</a>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default UserSignin;
