import React from 'react'
import './css/navbarmain.css';
import "./css/button.css";
import { Button } from 'bootstrap';
import { Link } from 'react-router-dom';
const Navbar = () => {



  return (
    
      <nav className="navi shadow mb-4 bg-white rounded">
        <div className="navi-menu flexi-row">
            <div className="navi-brand">
                <a href="/" className="text-gray"><strong><i>QUIZUP</i></strong></a>
            </div>
            <div className="togggle-collapsse">
                <div className="togggle-icons">
                    <i className="fas fa-bars"></i>
                </div>
            </div>
            <div>
            <ul className="navi-items">
                    <li className="navi-link">
                    <a href="#mainheader">Home</a>
                        
                      
                    </li>
                    <li className="navi-link">
                    <a href="#feature">About</a>

                   
                    </li>
                    <li className="navi-link">
                        <a href="#mybox">Quiz</a>
                    </li>
                    <li className="navi-link">
                        <a href="#topic">Know More</a>
                    </li>
                    <li className="navi-link">
                        <a href="#contact">Contact Us</a>
                    </li>
                </ul>
            </div>
            <div className="social text-gray">
                
               < Link to="/account">< i className="fas fa-user-alt" ></i> </Link>
                	
            </div>
        </div>
    </nav>




      
  
  )
}

export default Navbar