import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios' 
import './update.css'

const Update = () => {

    const {id } = useParams();

    const [Train_name, setTrain_name] = useState("")

    const [Train_number, setTrain_number] = useState(0)

    const updatename =() =>{
        axios.put('http://localhost:3001/update',{
            id:id,
            Train_name:Train_name,
            Train_number:Train_number
        }).then((response) => {
            alert ("updated")
        })

    }

  return (
    <div>
        <div className='up'>
        
        <form>
                <div className="form-row">
                    <div className="form-group">
                        <label><b>Train Name:</b>
                            <input type="text" classname="ClientId" onChange={(event)=>{setTrain_name(event.target.value)}}></input>
                        </label>
                    </div>
                    <div className="form-group">
                        <label><b>Train numb:</b>
                            <input type="text" classname="ClientId" onChange={(event)=>{setTrain_number(event.target.value)}}></input>
                        </label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group3">
                        <button onClick={updatename} >Edit</button>
                    </div>
                </div>
            </form>
            </div>
    </div>
  )
}

export default Update