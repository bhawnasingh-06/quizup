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
            <ol className="list-group" type='1'>
              <li className="list-group-item">1. The quiz will contain 10 question.</li>
              <li className="list-group-item">2. You will get 2 Minutes to answer all the questions.</li>
              <li className="list-group-item">3. After two minutes, automatically result will be displayed.</li>
              <li className="list-group-item">
              4. You can leave the quiz anytime.
              </li>
              <li className="list-group-item">
              5. Your score will be calculated automatically.
              </li>
              <li className="list-group-item">
              6. There are four options for a question.You have to select any one of them.
              </li>
              <li className="list-group-item">
              7. All questions have a single option correct.
              </li>
            </ol>
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