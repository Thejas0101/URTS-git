import React from 'react'
import {Button, Table,} from 'react-bootstrap';
import './Sampleadmin.css'

function Sampleadmin() {
  return (
    <div >
      <div className='ad'>
        <center><h1>Admin Dashboard</h1></center>
        </div>
       <div className='Sad'><center><br></br> <div>
        <Button  href="Users"variant="dark" type="submit">
        Users
      </Button></div>
      <div>
        <br></br>
        <Button  href="Records"variant="dark" type="submit">
        Trainlist
      </Button></div>
      <br></br>
      <div>
      <Button  href="Suggestions"variant="dark" type="submit">
        Suggestions
      </Button></div>
    <br></br>
    
      <div>
      <Button  href="Bookings"variant="dark" type="submit">
        Bookings
      </Button></div>
    <br></br>
      <div>
      <Button  href="Adminlog"variant="dark" type="submit">
        Logout
      </Button></div></center>
      </div>
    </div>
  )
}

export default Sampleadmin
