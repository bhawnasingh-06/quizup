import React from 'react'
import './css/navbarmain.css';
const Navbar = () => {
  return (
    
      <nav className="navi shadow mb-4 bg-white rounded">
        <div className="navi-menu flexi-row">
            <div className="navi-brand">
                <a href="#" className="text-gray"><strong><i>QUIZUP</i></strong></a>
            </div>
            <div className="togggle-collapsse">
                <div className="togggle-icons">
                    <i className="fas fa-bars"></i>
                </div>
            </div>
            <div>
                <ul className="navi-items">
                    <li className="navi-link">
                        <a href="#header">Home</a>
                    </li>
                    <li className="navi-link">
                        <a href="#features">About</a>
                    </li>
                    <li className="navi-link">
                        <a href="#topics">Quiz Topics</a>
                    </li>
                    <li className="navi-link">
                        <a href="#footer">Contact Us</a>
                    </li>
                </ul>
            </div>
            <div className="social text-gray">
                <a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></a>
                <a href="https://www.twitter.com/" target="_blank"><i className="fab fa-twitter"></i></a>
                <a href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube"></i></a>
            </div>
        </div>
    </nav>

      
  
  )
}

export default Navbar