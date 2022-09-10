import React from 'react'
import {Table,} from 'react-bootstrap';
import'./Booking.css'

function History() {
  return (
    
    <div className='hi'>
      <center><h1>Booking History</h1></center>
       <Table border={3} striped bordered hover className='his'>
                <thead className="abc1">
                    <tr>
                        
                        <th> User</th>
                        <th> Train name</th>
                        <th> Train number</th>
                        <th> From</th>
                        <th> To</th>
                        <th> No. of tickets</th>
                        <th> Total price</th>
                        
                    </tr>
                </thead>
                <thead>
                    <td>thejas</td>
                  <td>Yeshwanthpur express</td>
                  <td>12346</td>
                  <td>Vasco</td>
                  <td>Yeshwanthpur</td>
                  <td>04</td>
                  <td>800</td>
                </thead>
                <thead>
                    <td>paga</td>
                  <td>bangalore express</td>
                  <td>95134</td>
                  <td>Tumkur</td>
                  <td>Majestic</td>
                  <td>06</td>
                  <td>300</td>
                </thead>
                <thead>
                    <td>charan</td>
                  <td>Mangalore intercity</td>
                  <td>42685</td>
                  <td>Yeshwanthpur</td>
                  <td>Mangalore</td>
                  <td>04</td>
                  <td>800</td>
                </thead>
                <thead>
                    <td>thejas</td>
                  <td>Yeshwanthpur express</td>
                  <td>12346</td>
                  <td>Vasco</td>
                  <td>Yeshwanthpur</td>
                  <td>07</td>
                  <td>1400</td>
                </thead>
                <thead>
                    <td>thejas</td>
                  <td>Yeshwanthpur express</td>
                  <td>12346</td>
                  <td>Vasco</td>
                  <td>Yeshwanthpur</td>
                  <td>04</td>
                  <td>800</td>
                </thead>
                <thead>
                    <td>shashi</td>
                  <td>Hassan intercity </td>
                  <td>75316</td>
                  <td>Yeshwanthpur</td>
                  <td>Hassan</td>
                  <td>03</td>
                  <td>360</td>
                </thead>
                <thead>
                    <td>manoj</td>
                  <td>Vasco express</td>
                  <td>12345</td>
                  <td>Yeshwanthpur</td>
                  <td>Vasco</td>
                  <td>08</td>
                  <td>1600</td>
                </thead>
                <thead>
                    <td>thejas</td>
                  <td>Yeshwanthpur express</td>
                  <td>12346</td>
                  <td>Vasco</td>
                  <td>Yeshwanthpur</td>
                  <td>10</td>
                  <td>2000</td>
                </thead>
                <thead>
                    <td>charan</td>
                  <td>Mangalore express</td>
                  <td>12346</td>
                  <td>Yeshwanthpur</td>
                  <td>Mangalore</td>
                  <td>03</td>
                  <td>240</td>
                </thead>
                <thead>
                    <td>thejas</td>
                  <td>Tumkur express</td>
                  <td>95134</td>
                  <td>bangalore</td>
                  <td>tumkur</td>
                  <td>02</td>
                  <td>100</td>
                </thead>
                <thead>
                    <td>milestone</td>
                  <td>Mangalore intercity express</td>
                  <td>45689</td>
                  <td>Yeshwanthpur</td>
                  <td>Mangalore</td>
                  <td>08</td>
                  <td>960</td>
                </thead>
                <thead>
                    <td>Project</td>
                  <td>Yeshwanthpur express</td>
                  <td>12346</td>
                  <td>Vasco</td>
                  <td>Yeshwanthpur</td>
                  <td>04</td>
                  <td>800</td>
                </thead>
                

                
                
                
                
                
                </Table>
    </div>
  )
}

export default History
