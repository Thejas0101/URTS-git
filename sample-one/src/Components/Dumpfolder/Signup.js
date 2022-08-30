import React, { useState } from 'react'
import Axios  from 'axios';
import { Button } from '@mui/material'


// import { Button, Form,  } from "react-bootstrap";
import './Signup.css'


export const Signup = () => {

// const [id] = useState(0);
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [mobilenum, setMobilenum] = useState("");
const [password, setPassword] = useState(0);
const [confirmpassword, setConfirmpassword] = useState("");

const add = () => {
  console.log("reaching here")
  Axios.post('http://localhost:3001/usercreate', {
   
      // id: id,
      name: name,
      email: email,
      mobilenum : mobilenum,
      password: password,
      confirmpassword: confirmpassword
  }).then(() => {
      console.log('Successfully created client record.')
  }); 
}


  return (
    <form >
<div className='Signup'>
  <div id='box2'>
    <div id='Container1'>
    <form Validate>
       <h1>Register here</h1>
  <br></br>
    {/* <label>
      Username
    </label> */}
    <input type="text" required onChange={(event) => {setName(event.target.value)}}  placeholder='Username'></input><br></br>
    <br></br>
    {/* <label>
      Mobile_number
    </label> */}
    <input type="number" required onChange={(event) => {setMobilenum(event.target.value)}}  placeholder='Mobile_number'></input><br></br>
   <br></br>
    {/* <label>
      Email
    </label> */}
    <input type="text" required   onChange={(event) => {setEmail(event.target.value)}}  placeholder='Email'></input><br></br>
    <br></br>
    {/* <label>
      Password
    </label> */}
    <input type="password" required onChange={(event) => {setPassword(event.target.value)}}  placeholder='password'></input><br></br>
    <br></br>
    {/* <label>
      Confirm Password
    </label> */}
    <input type="password" required  onChange={(event) => {setConfirmpassword(event.target.value)}}  placeholder='Confirm password'></input><br></br>
    <br></br>
    <Button type='Submit'  variant="contained" onClick={add}>  Register </Button>
    </form>
 
 
 
   
    </div>
  </div>   

</div>
</form>















//     <div id='box2'>
//     <div id='Container1'>
//     <div className='Signup' >
//       <Form>
//         <h1><center>Register Here</center></h1>
//         {/* <div>
//         <label>Name</label>
//         <input onClick={(event) => {setName(event.target.value)}} placeholder="Your Name"></input>
//         </div> */}


//       <Form.Group className="mb-3" controlId="formBasicName">
//         <Form.Label>Name:</Form.Label>
//         <Form.Control type="Name" onClick={(event) => {setName(event.target.value)}} placeholder="Your Name" />
//       </Form.Group>
// {/* <div>
//       <label>Email</label>
//       <input onClick={(event) => {setEmail(event.target.value)}}  placeholder="Email-id"></input>
//       </div> */}


//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email-id</Form.Label>
//         <Form.Control type="Email"  onClick={(event) => {setEmail(event.target.value)}}  placeholder="Email-id" />
//       </Form.Group>


//       {/* <div>
//         <label>Mobile number</label>
//         <input onClick={(event) => {setMobile_number(event.target.value)}}  placeholder="Mobile number" ></input>
//       </div> */}

      
//       <Form.Group className="mb-3" controlId="formBasicMobilenumber">
//         <Form.Label>Moblie Number</Form.Label>
//         <Form.Control type="Mobilenumber" onClick={(event) => {setMobile_number(event.target.value)}}  placeholder="Mobile number" />
//       </Form.Group>


//       {/* <div>
//         <label>password</label>
//         <input onClick={(event) => {setPassword(event.target.value)}}  placeholder="Password"></input>
//       </div> */}

//        <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password"  onClick={(event) => {setPassword(event.target.value)}}  placeholder="Password" />
//       </Form.Group>


//       {/* <div>
//         <label>Confirm password</label>
//         <input onClick={(event) => {setConfirm_password(event.target.value)}}  placeholder="Confirm Password"></input>
//       </div> */}
      
      
//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Confirm password</Form.Label>
//         <Form.Control type="password"  onClick={(event) => {setConfirm_password(event.target.value)}}  placeholder="Confirm Password" />
//       </Form.Group>

//       <Button onClick={addClientRecord} variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//     </div>
//     </div>
//     </div>

  )
}

export default Signup
