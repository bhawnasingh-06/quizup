import React, { useState } from "react";
import QuestionContext from './questionContext';
const QuestionState = (props) => {

  const host = "http://localhost:5000"
  const questionsInitial =[]
  const [questions, setQuestions] = useState(questionsInitial);

  // Get all Questions
  const getQuestion = async () => {
    // API Call 
    const response = await fetch(`${host}/api/questions/fetchallquestions`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });
    const json = await response.json() 
    setQuestions(json)
  }



  //Add a question
  const addQuestion = async (questiondesc,option1,option2,option3,option4,correctanswer) => {
    //API call
    const response = await fetch(`${host}/api/questions/addquestion`, {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },

      body: JSON.stringify({questiondesc,option1,option2,option3,option4,correctanswer})
    });
    const question = await response.json();
    setQuestions(questions.concat(question))

  }


  //Delete a note
  const deleteQuestion = async (id) => {

    const response = await fetch(`${host}/api/questions/deletequestion/${id}`, {
      method: 'DELETE',

      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },

      //body: JSON.stringify({title,description,tag})
    });
    const json = response.json();
    console.log(json);

    const newQuestions = questions.filter((question) => { return question._id !== id })
    setQuestions(newQuestions);
  }


  //Edit a note
  const editQuestion = async (id, questiondesc,option1,option2,option3,option4,correctanswer) => {
    //API call
    const response = await fetch(`${host}/api/questions/updatequestion/${id}`, {
      method: 'PUT',

      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },

      body: JSON.stringify({questiondesc,option1,option2,option3,option4,correctanswer})
    });
    const json = response.json();
    console.log(json);

    let newQuestion=JSON.parse(JSON.stringify(questions));
    //Logic to edit a note
    for (let index = 0; index < newQuestion.length; index++) {
      const element = newQuestion[index];
      if (element._id === id) {
        newQuestion[index].questiondesc = questiondesc;
        newQuestion[index].option1 = option1;
        newQuestion[index].option2 = option2;
        newQuestion[index].option3 = option3;
        newQuestion[index].option4 = option4;
        newQuestion[index].correctanswer = correctanswer;
        
        break;
      }
    }
    setQuestions(newQuestion);
  }
  return (
    
    <QuestionContext.Provider value={{questions, addQuestion, deleteQuestion, editQuestion,getQuestion }}>
      {props.children}
    </QuestionContext.Provider>
  )
}
export default QuestionState; 