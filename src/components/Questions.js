import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import questionContext from '../context/questions/questionContext';
import QuestionItem from './QuestionItem';
import AddQuestion from "./AddQuestion";
const Questions = (props) => {
  const context = useContext(questionContext);
  const { questions, getQuestion ,editQuestion } = context;
  let navigate = useNavigate();
  useEffect(() => {
    if(localStorage.getItem('token')){
      getQuestion();
    }
    else{
      navigate("/adminlogin");
    }
    
    // eslint-disable-next-line
  }, [])
  const ref = useRef(null);
  const refClose = useRef(null);
  const [question, setQuestion] = useState({ equestiondesc: "", eoption1: "",eoption2: "",eoption3: "",eoption4: "" , ecorrectanswer: "" });
  const updateQuestion = (currentQuestion) => {
    ref.current.click();
    setQuestion({id: currentQuestion._id , equestiondesc: currentQuestion.questiondesc , eoption1: currentQuestion.option1,eoption2: currentQuestion.option2,eoption3: currentQuestion.option3,eoption4: currentQuestion.option4,ecorrectanswer: currentQuestion.correctanswer});
    
  }
  const handleClick = (e) => {
    editQuestion(question.id,question.equestiondesc,question.eoption1,question.eoption2,question.eoption3,question.eoption4,question.ecorrectanswer)
    refClose.current.click();
    props.showAlert("Updated Successfully","success");
  }
  const onchange = (e) => {
    setQuestion({ ...question, [e.target.name]: e.target.value })

  }

  return (
    <>
      <AddQuestion/>
      <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Question</h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="questiondesc" className="form-label">Question</label>
                  <input type="text" className="form-control" id="equestiondesc" name="equestiondesc" value={question.equestiondesc} onChange={onchange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="option1" className="form-label">Option 1</label>
                  <input type="text" className="form-control" id="eoption1" name="eoption1" value={question.eoption1}  onChange={onchange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="option2" className="form-label">Option 2</label>
                  <input type="text" className="form-control" id="eoption2" name="eoption2" value={question.eoption2}  onChange={onchange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="option3" className="form-label">Option 3</label>
                  <input type="text" className="form-control" id="eoption3" name="eoption3" value={question.eoption3}  onChange={onchange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="option4" className="form-label">Option 4</label>
                  <input type="text" className="form-control" id="eoption4" name="eoption4" value={question.eoption4}  onChange={onchange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="correctanswer" className="form-label">Correct Answer</label>
                  <input type="text" className="form-control" id="ecorrectanswer" name="ecorrectanswer" value={question.ecorrectanswer} onChange={onchange} required/>
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button type="button" ref={refClose} className="btn btn-dark" data-bs-dismiss="modal">Close</button>
              <button type="button"  onClick={handleClick} className="btn btn-dark">Update Question</button>
            </div>
          </div>
        </div>
      </div>

      <div className=" row my-5 mx-1">
        <h2 >Total Questions</h2>
        <div className="cotainer mx-2">
        {questions.length===0 && 'No questions to display!'}
        </div>

        {questions.map((question) => {
          return <QuestionItem key={question._id} updateQuestion={updateQuestion} question={question} showAlert={props.showAlert}/>
        })}

      </div>
    </>
  )

};

export default Questions;
