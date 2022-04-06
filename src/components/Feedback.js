import React from "react";
import "./css/feedback.css";

export default function Feedback() {
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
      <div className="form-check mb-4">
        <input name="feedback" type="radio" />
        <label className="ml-3"> Very good </label>
      </div>
      <div className="form-check mb-4">
        <input name="feedback" type="radio" />
        <label className="ml-3"> Good </label>
      </div>
      <div className="form-check mb-4">
        <input name="feedback" type="radio" />
        <label className="ml-3"> Mediocre </label>
      </div>
      <div className="form-check mb-4">
        <input name="feedback" type="radio" />
        <label className="ml-3"> Bad </label>
      </div>
      <div className="form-check mb-4">
        <input name="feedback" type="radio" />
        <label className="ml-3"> Very Bad </label>
      </div>
      <div className="text-center" />
      <div className="modal-footer">
        
        <div style={{margin:"auto"}}>
        <a href="/" className="btn btn-primary" >
          
          Send <i className="fa fa-paper-plane"> </i>
        </a>
        <a href="/" className="btn btn-outline-primary" data_dismiss="modal" >
          
          Cancel
        </a>
        </div>
      </div>
    </>
  );
}