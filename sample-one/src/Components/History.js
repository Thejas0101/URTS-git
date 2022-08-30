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
                        
                    </tr>
                </thead>
                <thead>
                  <td>Vasco Express</td>
                  <td>12345</td>
                  <td>Yeshwanthpur</td>
                  <td>Vasco</td>
                </thead>
                
                
                
                
                
                </Table>
    </div>
  )
}

export default History
