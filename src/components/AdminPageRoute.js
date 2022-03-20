import React from 'react'
import Navbar from './Navbar';
import HomeAdmin from './HomeAdmin';
import QuestionState from '../context/questions/QuestionState';
import Login from './Login';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
const AdminPageRoute = () => {
  return (
    <>
      <QuestionState>
         
          <Navbar/>
          <div >
          <div className="container my-3" >
            <Routes>
              <Route exact path="/admin" element={<HomeAdmin/>} />
              <Route exact path="/adminlogin" element={<Login/>} />

              {/* <Route exact path="/"> <home/></Route> */}

            </Routes>
          </div>
          </div>
          
      </QuestionState>
      </>
  )
}

export default AdminPageRoute