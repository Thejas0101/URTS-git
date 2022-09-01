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
  // var trnum = 0;


  function ticketamountcalculation()
  {  
    //   Axios.get("http://localhost:3002/GetTicketAmount",{ 
    // })
    // .then((response) => {
    //   console.log(response);
    //   // ticketcost = response.data.cost
    //   // console.log(response.data);
    //   // setTotalticketamount(ticketcost * numberoftickets);
      
    //   // console.log(totalticketamount)
    // });
    
    var x = document.getElementById("select01").selectedIndex;
    var pass = document.getElementById("passengers").value;
    var y = document.getElementById("select01").options;
    var sum = document.getElementById("total");

    var n = y[x].index;	
    var price =0;
    if(n=== 0)
    {
    price = 0;
    }
    else if(n===1)
    {
    price = 200;
    }
    else if(n ===2)
    {
    price = 200;
    }
    else if(n ===3)
    {
    price = 50;
    }
    else if(n ===4)
    {
    price = 50;
    }
    else if(n ===5)
    {
    price = 150;
    }
    else if(n ===6)
    {
    price = 150;
    }
    else if(n ===7)
    {
    price = 80;
    }
    else if(n ===8)
    {
    price = 80;
    }
    
    var tot = price*pass
    sum.innerText=tot;
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
          <Form.Label>Train : .</Form.Label>
            <select id="select01">
             <option >Choose option</option>
             <option >Yeshwanthpur-Vasco</option>
             <option >Vasco-Yeshwanthpur</option>
             <option >Majestic-Tumkur</option>
             <option >Tumkur-Majestic</option>
             <option >Yeshwanthpur-Mangalore</option>
             <option >Mangalore-Yeshwanthpur</option>
             <option >Yeshwanthpur-Hassan</option>
             <option >Hassan-Yeshwanthpur</option>
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
          {/* <select required type="number" onChange={(event) => setNumberoftickets(event.target.value)}>
             <option value="" hidden>No. of tickets</option>
             <option value="1">01</option>
             
          </select> */}
          <input type="number" min = "1" id= "passengers" ></input>
        </Form.Group>

       
        
        <Button variant="primary" onClick={ticketamountcalculation} >
          Calculate
        </Button>
        <br></br>
        <br></br>

        <label>total amount :- </label>
         <label required type='number' id="total" placeholder='Total amount'
        >0</label>
        <br></br>
        <br></br>
        <Button href='Payment' variant="primary" type="submit"  onClick={addTicketBookingReacord}>
          Book Now
        </Button>
       
      </Form></center> 
      </div>
      </div>
      </div>
      
    )
    function handleSelect(){
      if (document.getElementById("select01"))
      {
        var trnum = document.getElementById("select01").selectedIndex;
        console.log([trnum].index);
      }
      
    }
  

  }
  
  export default Adminlog
  