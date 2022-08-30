import React, {useState, useEffect} from 'react';
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';
import {Table,} from 'react-bootstrap';
import './Records.css'

 const Records = () => {

  const history = useNavigate();

  const [data, setData] = useState([]);

  const deleterecord = (e, id) =>{
    
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) =>{
        alert("deleted")
    })     
  }

  useEffect(() => {
    Axios.get('http://localhost:3001/get').then((res) => {
        console.log(res);
        setData(res.data);
        console.log(data);
    });
}, );

return(
  <div >
    <Table border={3} striped bordered hover className='cc'>
                <thead className="abc1">
                    <tr>
                        
                        <th> Id</th>
                        <th> Train_name</th>
                        <th> Train_number</th>
                        <th> From_Train</th>
                        <th> To_Train</th>
                        <th>Action</th>
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
                            <td>
                                <button variant="dark" onClick={() => history(`/update/${clientdata.id}`)}>Edit</button>
                                <button onClick={(e) => deleterecord(e,clientdata.id)}>Delete</button>
                            </td>
                        </tr>
                        )
                    })
                    }
                </tbody>
            </Table>
  </div>
)

}


export default Records;