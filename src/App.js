
import React,{useState} from 'react';
import FirstPage from "./components/FirstPage"
import Navbar from './components/Navbar';
import HomeAdmin from './components/HomeAdmin';
import QuestionState from './context/questions/QuestionState';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './components/Login';
import HomeUser from './components/HomeUser';
import AdminPageRoute from './components/AdminPageRoute';


// import your route components too

function App() {
  const [role,setRole]=useState();
  return (
    <>
    <Router>
    <Routes>
     <Route exact path ="/" element={<FirstPage role={role} setRole={setRole}/>}/> 
     {role==="Admin"?<Route exact path="/adminhome/*" element={<AdminPageRoute/>}/>: <Route exact path="/user" element={<HomeUser/>} />}
    </Routes>
    </Router>
    
    
    </>
  )
}

export default App;
