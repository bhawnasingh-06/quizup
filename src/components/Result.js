import React from "react";
import "./result.css";


export default function Result() {
  return (
    <>
      <div id="myModal" className="modal fade" role="dialog" />
      <div className="modal-dialog" />
      <div className="modal-content" />
      <div className="modal-header">
        <h3> RESULT </h3>
      </div>
      <br/>

      <div class="form-group">
    <label for="exampleInputresult"><h2>Correct</h2></label>
    <input type="result" class="form-control" id="exampleInputresult" placeholder="" style={{width:"500px"}}/>
  </div>

  <div class="form-group">
    <label for="exampleInputresult"><h2>Wrong</h2></label>
    <input type="result" class="form-control" id="exampleInputresult" placeholder="" style={{width:"500px"}}/>
  </div>


  <div class="form-group">
    <label for="exampleInputresult"><h2>Score</h2></label>
    <input type="result" class="form-control" id="exampleInputresult" placeholder="" style={{width:"500px"}}/>
  </div>
    <br/>
    
      <div className="container">
        <button className="btn btn-outline-success mx-5" type="submit">
          Give Feedback
        </button>
      </div>
    </>
  );
}
