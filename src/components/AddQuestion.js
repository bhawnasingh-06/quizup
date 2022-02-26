import React, { useContext, useState } from 'react';
import questionContext from '../context/questions/questionContext';


const AddQuestion = () => {
  const context = useContext(questionContext);
  const { addQuestion} = context;

  const [question, setQuestion] = useState({ questiondesc: "", option1: "",option2: "",option3: "",option4: "" , correctanswer: "" });
  const handleClick = (e) => {
    e.preventDefault();
    addQuestion(question.questiondesc, question.option1,question.option2,question.option3,question.option4, question.correctanswer);
    setQuestion({questiondesc: "", option1: "",option2: "",option3: "",option4: "" , correctanswer: ""});
    //props.showAlert("Added Successfully!","success");
  }
  const onchange = (e) => {
    setQuestion({ ...question, [e.target.name]: e.target.value })
  }
  return (
    <div className="container ">
      <h2>Add a question</h2>
      <form>
      <div className="mb-3">
          <label htmlFor="questiondesc" className="form-label">Write question here</label>
          <input type="text" className="form-control" id="questiondesc" name="questiondesc" onChange={onchange}value={question.questiondesc} />
        </div>
        <div className="mb-3">
          <label htmlFor="option1" className="form-label">Option 1</label>
          <input type="text" className="form-control" id="option1" name="option1"  onChange={onchange}value={question.option1} />
        </div>
        <div className="mb-3">
          <label htmlFor="option2" className="form-label">Option 2</label>
          <input type="text" className="form-control" id="option2" name="option2"  onChange={onchange}value={question.option2} />
        </div>
        <div className="mb-3">
          <label htmlFor="option3" className="form-label">Option 3</label>
          <input type="text" className="form-control" id="option3" name="option3"  onChange={onchange}value={question.option3} />
        </div>
        <div className="mb-3">
          <label htmlFor="option4" className="form-label">Option 4</label>
          <input type="text" className="form-control" id="option4" name="option4"  onChange={onchange}value={question.option4} />
        </div>
        <div className="mb-3">
          <label htmlFor="correctanswer" className="form-label">Correct Answer</label>
          <input type="text" className="form-control" id="correctanswer" name="correctanswer" onChange={onchange}value={question.correctanswer} />
        </div>
        
        <button type="submit" className="btn btn-dark" onClick={handleClick}>Add Question</button>
      </form>
    </div>
  )
};

export default AddQuestion;
