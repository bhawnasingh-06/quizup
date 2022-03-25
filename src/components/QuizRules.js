import React from "react";
import "./css/quizrules.css";
import { useNavigate } from 'react-router-dom';

export default function Guidelines() {
    let navigate = useNavigate();
    const handleclick =()=>{
        navigate("/quiz")
      }
  return (
    <>
      <div className="callout">
        <div className="callout-header">GUIDELINES</div>
        <div className="callout-container">
          <p>
            <ul className="list-group">
              <li className="list-group-item">The quiz will contain 20 question.</li>
              <li className="list-group-item">
                You can leave the quiz anytime.
              </li>
              <li className="list-group-item">
                Your score will be calculated automatically.
              </li>
              <li className="list-group-item">
                There are four options for a question.
              </li>
              <li className="list-group-item">
                All questions have a single option correct.
              </li>
            </ul>
          </p>
        </div>
        <div className="modal-footer">
          <button  onClick={handleclick} className="btn btn-secondary">
            START QUIZ <i className="fa fa-paper-plane"> </i>
          </button>
        </div>
      </div>
    </>
  );
}