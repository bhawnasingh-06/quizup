import React, { useState } from "react";
import "./css/feedback.css";
export default function Feedback() {
 
  const [msg,setmsg] = useState("");
   const handlesend = async (event) => {
     //API call
      fetch("http://localhost:5000/api/feedback/addfeedback", {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
         'auth-token': localStorage.getItem('token')
       },
      body: JSON.stringify({msg})
     }).then(res => res.json())
     .then(alert("Thank you so much for your feedback :) \n Your feedback has been successfully submitted."),
     setmsg(""),event.target.selectedValue="false")
     
   }
  const onChangeValue= (event)=> {
    setmsg(event.target.value);
  }
  return (
    <>
      <div id="myModal" className="modal fade" role="dialog" />
      <div className="modal-dialog" />
      <div className="modal-content" />
      <div className="modal-header">
        <h3> FEEDBACK </h3>
      </div>
      <div className="modal-body text-center">
        <i className="far fa-file-alt fa-4x mb-3 animated rotateIn icon1"> </i>
        <h3> Your opinion matters </h3>
        <h5>
          Help us improve quiz!
          <strong> Give us your feedback. </strong>
        </h5>
        <hr />
        <h6> Your Rating </h6>
      </div>
      <div onChange={onChangeValue}>
      <div className="form-check mb-4">
        <input name="feedback" type="radio" value="Very good"/>
        <label className="ml-3"> Very good </label>
      </div>
      <div className="form-check mb-4">
        <input name="feedback" type="radio" value="Good"/>
        <label className="ml-3"> Good </label>
      </div>
      <div className="form-check mb-4">
        <input name="feedback" type="radio" value="Mediocre"/>
        <label className="ml-3"> Mediocre </label>
      </div>
      <div className="form-check mb-4">
        <input name="feedback" type="radio" value="Bad"/>
        <label className="ml-3"> Bad </label>
      </div>
      <div className="form-check mb-4">
        <input name="feedback" type="radio" value="Very Bad"/>
        <label className="ml-3"> Very Bad </label>
      </div>
      </div>
      <div className="text-center" />
      <div className="modal-footer">
        
        <div style={{margin:"auto"}}>
        <a onClick={handlesend} className="btn btn-primary" >
          
          Send my feedback <i className="fa fa-paper-plane"> </i>
        </a>
        <a href="/user" className="btn btn-outline-primary" data_dismiss="modal" >
          
          Go back to home page
        </a>
        </div>
      </div>
    </>
  );
}