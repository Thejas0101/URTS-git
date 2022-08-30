import React from 'react'
// import * as ReactBootstrap from "react-bootstrap";
import {Button, Form, } from "react-bootstrap"
import { useState } from 'react'
import './Booktik.css'
import Axios from 'axios'


function Adminlog() {


  const [trainnumber, setTrainnumber]= useState(0);
  const [numberoftickets, setNumberoftickets] = useState("");
  let [ticketcost, setTicketcost] = useState("");
  const [totalticketamount, setTotalticketamount] = useState(0);
  function handleSelect(){
    // document.getElementById("select01")
    // {
    //   var optionID=document.getElementById('1');    
    // }
    // console.log(optionID.value);
  }


  function ticketamountcalculation()
  {  
      Axios.get("http://localhost:3002/GetTicketAmount",{ 
    })
    .then((response) => {
      console.log(response);
      // ticketcost = response.data.cost
      // console.log(response.data);
      // setTotalticketamount(ticketcost * numberoftickets);
      
      // console.log(totalticketamount)
    });
    
    

     
  }


  const addTicketBookingReacord =()=>{
    Axios.post("http://localhost:3001/Ticketbook", {
  
      trainnumber:trainnumber,
      numberoftickets:numberoftickets,
  }).then(() => {
    console.log("Created booked ticket into table")
  });
  
 
    
  };

    return (
      <div id='box3'>
      <div id='Container2'>
      <div className='Admin'>
     <center>  <Form>
          <h1><center>Book Tickets</center></h1>
          <br></br>
        {/* <Form.Group className="mb-3" controlId="formBasicId">
          <Form.Label>Train Number</Form.Label> */}
          {/* <select onChange={(event) => setTrainnumber(event.target.value)}> */}
          <Form.Label>Train</Form.Label>
            <select required name="select01" id="select1" onChange= {handleSelect()}>
             <option value="" hidden>Choose option</option>
             <option id='1' value="12345">Vasco express</option>
             <option id='2'  value="12346">Yeshwanthpur</option>
             <option>Tumkur</option>
             <option>Hassan</option>
             <option>Majestic</option>
          </select>
          {/* <input type='number' placeholder='Train Number' 
        onChange={(e) => setTrainnumber(e.target.value)}></input> */}
      
  
        {/* <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>.TO.</Form.Label>
          <select>
          <option value="" hidden>Choose option</option>
             <option>Vasco</option>
             <option>Yeshwanthpur</option>
             <option>Tumkur</option>
             <option>Hassan</option>
             <option>Majestic</option>
          </select>
        </Form.Group> */}

        <Form.Group className="mb-3" controlId="formBasicId">
          <Form.Label>No. of tickets</Form.Label>
          <select required type="number" onChange={(event) => setNumberoftickets(event.target.value)}>
             <option value="" hidden>No. of tickets</option>
             <option value="1">01</option>
             
          </select>
        </Form.Group>

       
        
        <Button variant="primary" onClick={ticketamountcalculation} >
          Calculate
        </Button>
        <br></br>
        <br></br>
         <Form.Control required type='number' placeholder='Total amount' value={totalticketamount}
        onChange={(event) => setTotalticketamount(event.target.value)}></Form.Control>
        <br></br>
        <Button href='Payment' variant="primary" type="submit"  onClick={addTicketBookingReacord}>
          Book Now
        </Button>
       
      </Form></center> 
      </div>
      </div>
      </div>
      
    )
    

  }
  
  export default Adminlog
  