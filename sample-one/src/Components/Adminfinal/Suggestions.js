import React, {useState, useEffect} from 'react';
import Axios from 'axios'
// import { useNavigate } from 'react-router-dom';
import {Button, Form, } from "react-bootstrap"
import './Suggestions.css'

import {Table,} from 'react-bootstrap';


 const Suggestions = () => {

//   const history = useNavigate();

  const [data, setData] = useState([]);

//   const deleterecord = (e, id) =>{
    
//     Axios.delete(`http://localhost:3001/delete/${id}`).then((response) =>{
//         alert("deleted")
//     })     
//   }

  useEffect(() => {
    Axios.get('http://localhost:3001/getcontact').then((res) => {
        console.log(res);
        setData(res.data);
        console.log(data);
    });
}, );

return(
  <div className='bc'>
    <div className='Sug'>
    <center><h1>User Suggestions</h1></center></div>
    <br></br>
    <Table border={3} striped bordered hover className='bb'>
                <thead className="abc1">
                    <tr>
                    <th> Id</th>
                     
                        <th> E-mail</th>
                     
                        <th> Comments</th>
                        {/* <th>Description</th> */}
                    </tr>
                </thead>
                <tbody>{
                    data.map(clientdata => {
                        return(
                            
                        <tr className="abc">
                            <td>{clientdata.id}</td>
                            <td>{clientdata.email}</td>
                            
                            <td>{clientdata.message}</td>
                            
                            
                                {/* <td> <Button onClick={()=>('/More_details')} variant="dark">More Details..</Button></td> */}
                                {/* <button onClick={(e) => deleterecord(e,clientdata.id)}>Delete</button> */}
                            
                        </tr>
                        )
                    })
                    }
                </tbody>
            </Table>
          
  </div>
)

}


export default Suggestions;