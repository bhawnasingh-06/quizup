import React from "react";
import "./css/result.css";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from 'react-router-dom';


export default function Result(props) {
    let navigate = useNavigate();
    let percent = Math.ceil((props.score / props.questions.length * 100));
    if(percent <= 30 ) {
        var remark = "You need to work hard! 😔"
    } else if( percent>30 &&percent<= 50) {
        var remark = "Better luck next time! 😭"
    } else if (percent>50 && percent<=70) {
        var remark = "You can do better! 😊"
    } else if( percent>71 && percent<=90) {
        var remark = "You did great! 😎"
    } else {
        remark = "You are on fire! 🤗"
    }

    const handleclick =()=>{
        navigate("/feedback")
      }


  return (
    <>
    <div className="well">
        <div className="right" style={{width: 200, height: 200 }}>
      <CircularProgressbar value={percent} text={`${percent}%`} />
      </div>
          <div className="right" style={{marginTop:"2rem" }}>
          <h4> You Got {props.score} out of {props.questions.length} Correct </h4>
          <h1>{percent}% - {remark}</h1>
          </div>
          <hr />
          <div className="our" style={{marginTop:"2rem" }}>
          <div>
          <button onClick={handleclick} className="btn btn-default btn-primary" style={{marginRight:"1rem" }}>Send feedback</button> <a href="/user" className="btn btn-default btn-primary">Take again</a>

          </div>
<h4 style={{marginTop:"2rem" }}> We will be happy to hear your feedback and improve ourselves. </h4>
          </div>
    </div>
        
      
    </>
  )
}