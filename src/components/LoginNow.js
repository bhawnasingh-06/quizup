import React, { useEffect } from 'react'
import "./css/loginnow.css";
import AOS from "aos";
import "aos/dist/aos.css";

const LoginNow = () => {
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
        <div className="bttn">
          <button type="button" class="btn btn-light shadow mb-4 bg-white">LOG IN NOW</button>
          <button type="button" class="btn btn-light shadow mb-4 bg-white">SIGN UP NOW</button>
        </div>
      </div>
    </section>
  );
}

export default LoginNow