import React, {useState, useEffect} from 'react';
import Axios from 'axios'
// import { useNavigate } from 'react-router-dom';
import {Button, Form, } from "react-bootstrap"
import './Users.css'

import {Table,} from 'react-bootstrap';


 const Users = () => {

//   const history = useNavigate();

  const [data, setData] = useState([]);

//   const deleterecord = (e, id) =>{
    
//     Axios.delete(`http://localhost:3001/delete/${id}`).then((response) =>{
//         alert("deleted")
//     })     
//   }

  useEffect(() => {
    Axios.get('http://localhost:3001/getpeople').then((res) => {
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
                        
                        <th> Name</th>
                        <th> Mobile number</th>
                        <th> E-mail</th>
                        <th> Password</th>
                        <th> Confirm password</th>
                        {/* <th>Description</th> */}
                    </tr>
                </thead>
                <tbody>{
                    data.map(clientdata => {
                        return(
                            
                        <tr className="abc">
                            <td>{clientdata.name}</td>
                            <td>{clientdata.mobilenum}</td>
                            <td>{clientdata.email}</td>
                            <td>{clientdata.password}</td>
                            <td>{clientdata.confirmpassword}</td>
                            
                            
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


export default Users;