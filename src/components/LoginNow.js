import React, { useEffect } from 'react'
import "./css/loginnow.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from 'react-router-dom';


const LoginNow = ({fetchQuestions}) => {
  let navigate = useNavigate();
  const handlelogin =()=>{
    navigate("/login")
  }
  const handlesignup =()=>{
    navigate("/signup")
  }
  const handlestart =()=>{
    fetchQuestions();
    navigate("/quizrules")
  }
  const handlelogout =()=>{
    localStorage.removeItem('token');
    navigate('/');
  }
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="mybox">
      <div className="container mybox" data-aos="fade-up">
        <h2>Try it out now!</h2>
        <p className="u-text-small">
          If you want to test your aptitude skills and improve yourself, create a an account with us or login to the one you already have.
        </p>
        {!localStorage.getItem('token')?<div className="bttn">
          <button onClick={handlelogin} type="button" class="btn btn-light shadow mb-4 bg-white">LOG IN NOW</button>
          <button onClick={handlesignup} type="button" class="btn btn-light shadow mb-4 bg-white">SIGN UP NOW</button>
        </div>:<div className="bttn">
          <button onClick={handlestart} type="button" class="btn btn-light shadow mb-4 bg-white">START THE QUIZ</button>
          <button onClick={handlelogout} type="button" class="btn btn-light shadow mb-4 bg-white">LOG OUT</button>
        </div>}
        
      </div>
    </section>
  );
}

export default LoginNow