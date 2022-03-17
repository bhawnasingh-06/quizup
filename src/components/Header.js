import React, { useEffect } from "react";
import "./css/header.css";
import Button from "./Button";
import "./css/button.css";
import MainImage from './photos/picture.jpg'
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);
  return (
    <>
      <section id="header">
        <div className="container header">
          <div className="header-left" data-aos="fade-right">
            <h1>
              <span>Welcome to QuizUp</span>
              <h2>A platform to test</h2>
              <h2>your aptitude skills.</h2>
            </h1>
            <p className="u-text-small">
              QuizUp is an online learning platform to test your aptitude skills with a wide range of questions from various topics such as time , ratio and proportion , percentage, probability, logarithms, numbers, simple interest and many more.
            </p>
            <div className="header-cta">
              <Button text={"Get Started"} btnClass={"btn-light"} href={"#"} />
              <Button text={"How It Works"} btnClass={"btn-light"} href={"#"} />
            </div>
          </div>
          <div className="header-right" data-aos="fade-left">
            <img src={MainImage} alt="quiz" />
          </div>
        </div>
      </section>
      <div className="container-fluid shadow mb-5" style={{ background: "#104f57", height: "130px" }}>
        <h2 style={{
          padding: "1.5rem 0rem 0rem 7rem",
          fontSize: " 2.2rem", fontFamily: "Roboto", color: "white"
        }}>Want to test your aptitude skills now!</h2>
        <h4 style={{
          padding: "0rem 0rem 0rem 7rem",
          fontSize: " 1.4rem", fontFamily: "Roboto", color: "white"
        }}>Take a quick quiz and get the instant results.</h4>
        <button style={{
          padding: "0.5rem 1.8rem",
          margin: "-5rem 4rem 0rem 70rem"
        }} type="button" class="btn btn-light shadow mb-4 bg-white rounded">SIGN UP NOW</button>
      </div>
    </>
  );
};

export default Header;