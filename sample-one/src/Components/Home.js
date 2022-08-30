import React from 'react'
// import Record from './Record'

import Trains from './Images/Trains.jpg'
import './Home.css'
// import { Button } from 'react-bootstrap'

// import clientbg from './Components/Images/clientbg.jpg'

function Home() {
  return (
    <div className="Home">
      <img src={Trains} className="Home-Bg" />
      <h1 className='HomeTitle'>Welcome to Railway  Management System</h1>
    </div>
   
   
  )
}

export default Home
