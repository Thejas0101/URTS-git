import React from 'react'
import {Table,} from 'react-bootstrap';
import'./History.css'

function History() {
  return (
    
    <div className='hi'>
      <center><h1>Booking History</h1></center>
       <Table border={3} striped bordered hover className='his'>
                <thead className="abc1">
                    <tr>
                        
                        
                        <th> Train name</th>
                        <th> Train number</th>
                        <th> From</th>
                        <th> To</th>
                        <th> No. of tickets</th>
                        <th> Total price</th>
                        
                    </tr>
                </thead>
                <thead>
                  <td>Vasco Express</td>
                  <td>12345</td>
                  <td>Yeshwanthpur</td>
                  <td>Vasco</td>
                  <td>04</td>
                  <td>800</td>
                </thead>
                
                
                
                
                
                </Table>
    </div>
  )
}

export default History
