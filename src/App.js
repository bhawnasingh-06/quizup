import React, { useState } from "react";
import FirstPage from "./components/FirstPage";
import Navbar from "./components/Navbar";
import HomeAdmin from "./components/HomeAdmin";
import QuestionState from "./context/questions/QuestionState";
import LoginUser from "./components/LoginUser"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import HomeUser from "./components/HomeUser";
import Signup from "./components/SignUp";
import Quiz from "./components/Quiz";
import QuizRules from "./components/QuizRules"
import axios from "axios";
import Alert from "./components/Alert";
import PageNotFound from "./components/PageNotFound"
function App() {
  const [role, setRole] = useState();
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);
  const fetchQuestions = async () => {
     const { data } = await axios.get(
       `http://localhost:5000/api/questions/fetchalluserquestions`
     );
     setQuestions(data);
   };
  const [alert,setAlert] = useState(null);
  const showAlert = (message, type)=> {
    setAlert(
      {
        msg:message,
        type: type
      }
    )
    setTimeout(()=>{
      setAlert(null);
    },3000);

  }
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<FirstPage role={role} setRole={setRole} />}/>
          {role === "Admin" ? (<Route exact path="/admin/*" element={
                <QuestionState>
                  <Navbar />
                  <Alert alert={alert}/>
                  <div>
                      <div className="container">
                      <Routes>
                        <Route exact path="/adminhome" element={<HomeAdmin />} />
                        <Route exact path="/login" element={<Login showAlert={showAlert}/>} />
                        <Route path="*" element={<PageNotFound/>} />
                      </Routes>
                      </div>
                  </div>
                </QuestionState>
          }/> ) : ( 
                      <>
                      
                      <Route exact path="/user" element={<HomeUser fetchQuestions={fetchQuestions}/> }/>
                      <Route exact path="/login" element={<LoginUser showAlert={showAlert}/>} />
                      <Route exact path="/signup" element={<Signup showAlert={showAlert}/>} />
                      <Route exact path="quizrules" element={<QuizRules/>}/>
                      <Route exact path="/quiz" element={<Quiz questions={questions} score={score} setScore={setScore}
                       setQuestions={setQuestions} />}/>
                      {/* <Route exact path="/result" element={<Result score={score} />}/> */}
                      <Route path="*" element={<PageNotFound/>} />
                      
                      </>
                      )}
        </Routes>
      </Router>
    </>
  );
}

export default App;
