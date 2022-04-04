import React ,{ useEffect }from 'react'
import './css/topics.css'
import calendar from './photos/pictures/calendar.jpg'
import time from './photos/pictures/time.png'
import logarithm from './photos/pictures/logarithm.jpg'
import numbers from './photos/pictures/numbers.jpg'
import percentage from './photos/pictures/percentage.jpg'
import probability from './photos/pictures/probability.png'
import RatioandProportion from './photos/pictures/RatioandProportion.jpg'
import simpleinterest from './photos/pictures/SimpleInterest.png'
import AOS from "aos";
import "aos/dist/aos.css";
const Topics = () => {
    useEffect(() => {
        AOS.init({
          duration: 2000,
        });
      }, []);
    return (
        <div className="container-fluid" id="topics">
            <div className="heading">
                <h1>Our Top Topics</h1>
                <h5>Test your skills with our top topics like average, percentage, time, number, distance, simple interest etc. with a variaty of questions set for beginners and seniors alike!</h5>
            </div>
            <div className="img-area">
                <div className="single-img"><img src={calendar} alt="" /></div>
                <div className="single-img"><img src={time} alt="" /></div>
                <div className="single-img"><img src={logarithm} alt="" /></div>
                <div className="single-img"><img src={numbers} alt="" /></div>
                <div className="single-img"><img src={percentage} alt="" /></div>
                <div className="single-img"><img src={probability} alt="" /></div>
                <div className="single-img"><img src={RatioandProportion} alt="" /></div>
                <div className="single-img"><img src={simpleinterest} alt="" /></div>
            </div>
        </div>

    )
}

export default Topics