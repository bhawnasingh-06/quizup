
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import Navbar from './Navbar';

import HomeAdmin from './HomeAdmin';
import Login from './Login';
import QuestionState from '../context/questions/QuestionState';
import HomeUser from "./HomeUser";
import backgroundImage from "./photos/background.png";
const FirstPage = ({role,setRole}) => {
  let navigate = useNavigate();
  const handleRoleAdmin =  ()=>{
    setRole("Admin");
    console.log({role});
    navigate("/adminhome")
  }
  
  const handleRoleUser = ()=>{
    setRole("User");
    console.log({role});
    navigate("/user")
  }
  return (
    <div className="container-fluid" style={{height: "100vh",background: `linear-gradient(to top, rgba(0,0,0,1), rgba(0.1,0.1,0.1,0.5)),url(${backgroundImage}) no-repeat center center/cover`,}}>
      <p  style={{padding:"8rem 0 0 20rem",fontSize: "3.5rem",fontWeight:"bolder",color: "white",zIndex: "2",fontFamily:"sansSerif"}}>
          HEY! WELCOME TO QUIZUP
      </p>
      <p style={{padding:"0 0 0 16rem",fontSize: "3rem",color: "white",zIndex: "2",fontFamily:"sansSerif"}}>
          Please select your role to continue with QuizUP.
      </p>
      
      <button onClick={handleRoleUser} style={{padding: "0.5rem 3rem", margin: "3rem 0 0 32rem",fontSize: "1.5rem",fontFamily:"sansSerif"}} type="button" className="btn btn-light shadow mb-4 bg-white rounded">USER</button>

      <button onClick={handleRoleAdmin} style={{padding: "0.5rem 3rem",margin: "3rem 0 0 4rem",fontSize: "1.5rem",fontFamily:"sansSerif"}} type="button" className="btn btn-light shadow mb-4 bg-white rounded">ADMIN</button>
      
     
    </div>
  );
};

export default FirstPage;
