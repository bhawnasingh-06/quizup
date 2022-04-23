import React, { useEffect,useState } from "react";
import "./css/subscribe.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Subscribe = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  
  return (
    <section id="subscribe">
      <div className="container" data-aos="fade-up" >
        <h1 style={{marginBottom:"4rem"}}><i>Thanks for visiting QuizUp!</i></h1>
        <h3>Hope you had a good experience playing quiz with QuizUp and you got to learn something new :)</h3>
      </div>
    </section>
  );
};

export default Subscribe;
