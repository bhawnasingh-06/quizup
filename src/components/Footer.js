import React from "react";
import "./css/footer.css";
import logo from "./photos/logo.png";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section id="footer">
      <div className="mycontainer footer">
        <div className="footer-box">
          <h4>Useful Links</h4>
          <div className="footer-links">
            <a href="/">&bull; Support</a>
            <a href="/">&bull; Home</a>
            <a href="/">&bull; About</a>
            <a href="/">&bull; Learn</a>
            <a href="/">&bull; Take Quiz</a>
            <a href="/">&bull; Know More</a>
          </div>
        </div>
        <div className="footer-box" >
          <h4>Contact Us</h4>
          <div className="footer-contact" id="contact">
            <p>
              <FaMapMarkerAlt /> &nbsp; Address: India.
            </p>
            <p>
              <FaPhoneAlt /> &nbsp; Phone: +1234 5678 9123.
            </p>
            <p>
              <FaFax /> &nbsp; Fax: +12345678901
            </p>
            <p>
              <FaEnvelope /> &nbsp; Email: info@quizup.com
            </p>
            <p>
              <FaGlobe /> &nbsp; Website: www.quizup.com
            </p>
          </div>
        </div>
        <div className="footer-box">
          <img src={logo} alt="logo" style={{borderRadius:"35px"}}/>
          <p className="u-text-small">&copy; Copyright 2022. QuizUp.com</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;