import React from 'react'
import { Button } from 'react-bootstrap'
import './Successful.css'

function Successful() {
  return (
    <div>
     <center> <div className='suc'>
       <center><h1>YOUR PAYMENT WAS SUCCESSFULL......</h1></center> 
        <br></br>
        <div className='back'>
        <Button href='Home' variant="primary" type="submit" >
          GO BACK TO HOME PAGE
        </Button>
        </div>
      </div></center>
    </div>
  )
}

export default Successful
