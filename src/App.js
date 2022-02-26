import React,{useState} from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';

import QuestionState from './context/questions/QuestionState';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './components/Login';


// import your route components too

function App() {
  
  return (
    <>
      <QuestionState>
        <Router>
          <Navbar />
          <div >
          <div className="container my-3" >
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route exact path="/login" element={<Login/>} />

              {/* <Route exact path="/"> <home/></Route> */}

            </Routes>
          </div>
          </div>
        </Router>
      </QuestionState>
    </>
  )
}

export default App;
