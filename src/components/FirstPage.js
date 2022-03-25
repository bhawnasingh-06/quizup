
import React from "react";
import { useNavigate} from "react-router-dom";
import "./css/header.css";
import firstpage from "./photos/firstpage.webp";
import "./css/button.css";
const FirstPage = ({role,setRole}) => {
  let navigate = useNavigate();
  const handleRoleAdmin =  ()=>{
    setRole("Admin");
    console.log({role});
    navigate("/admin/login")
    localStorage.removeItem('token');
  }
  
  const handleRoleUser = ()=>{
    setRole("User");
    console.log({role});
    navigate("/user")
    localStorage.removeItem('token');
  }
  return (
    <section id="header">
        <div className="container header">
          <div className="header-left">
            <h1 style={{fontSize:"2.6rem"}}>
              <span>Welcome to an online learning platform<span style={{color:"#FFDB58"}}>QUIZUP!</span></span>
            </h1>
            <p style={{fontSize:"1.4rem"}}>
              Please select your role to continue with QuizUp.
            </p>
            <div className="header-cta">
            <button onClick={handleRoleUser} type="button" className="btn-grad shadow">USER</button>

            <button onClick={handleRoleAdmin}  type="button" className="btn-grad shadow">ADMIN</button> 
            </div>
          </div>
          <div className="header-right" >
            <img src={firstpage} alt="quiz" style={{maxWidth:"80vh"}} />
          </div>
        </div>
      </section> 
  );
};

export default FirstPage;
