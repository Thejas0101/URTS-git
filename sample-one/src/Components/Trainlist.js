import React, {useState, useEffect} from 'react';
import Axios from 'axios'
// import { useNavigate } from 'react-router-dom';
import {Button, Form, } from "react-bootstrap"
import './Trainlist.css'

import {Table,} from 'react-bootstrap';


 const Trainlist = () => {

//   const history = useNavigate();

  const [data, setData] = useState([]);

//   const deleterecord = (e, id) =>{
    
//     Axios.delete(`http://localhost:3001/delete/${id}`).then((response) =>{
//         alert("deleted")
//     })     
//   }

  useEffect(() => {
    Axios.get('http://localhost:3001/get').then((res) => {
        console.log(res);
        setData(res.data);
        console.log(data);
    });
}, );

return(
  <div className='bc'>
    <Table border={3} striped bordered hover className='bb'>
                <thead className="abc1">
                    <tr>
                        
                        <th> Id</th>
                        <th> Train name</th>
                        <th> Train number</th>
                        <th> From</th>
                        <th> To</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>{
                    data.map(clientdata => {
                        return(
                            
                        <tr className="abc">
                            <td>{clientdata.id}</td>
                            <td>{clientdata.Train_name}</td>
                            <td>{clientdata.Train_number}</td>
                            <td>{clientdata.From_Train}</td>
                            <td>{clientdata.To_Train}</td>
                            <td>{clientdata.description}</td>
                            
                                {/* <td> <Button onClick={()=>('/More_details')} variant="dark">More Details..</Button></td> */}
                                {/* <button onClick={(e) => deleterecord(e,clientdata.id)}>Delete</button> */}
                            
                        </tr>
                        )
                    })
                    }
                </tbody>
            </Table>
           <center> <Button  href="Booktik"variant="dark" type="submit">
        Book Ticket
      </Button></center>
  </div>
)

}


export default Trainlist;