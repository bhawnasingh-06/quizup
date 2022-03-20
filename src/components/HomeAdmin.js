import Questions from "./Questions";

import Slider from "./Slider";
import Quiz from "./Quiz";
import DemoHome from "./DemoHome";

import react , { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
export const HomeAdmin = () => {
  
  return (
    <div>
    <Questions/>
    </div>
    // <>
    // <NavbarMain/>
    // <Header/>
    // <Feature/>
    // <Topics/>
    // <LoginNow/>
    // <Subscribe/>
    // <Footer/> 
    // </>
  )
};

    
export default HomeAdmin;
// const [questions, setQuestions] = useState();
  // const [score, setScore] = useState(0);
  // const fetchQuestions = async () => {
  //   const { data } = await axios.get(
  //     `http://localhost:5000/api/questions/fetchalluserquestions`
  //   );
  //   setQuestions(data);
  // };
//     <NavbarMain/>
    //  <Header/>
    //  <Feature/>
    //  <Topics/>
    //  <LoginNow/>
    //  <Subscribe/>
    //  <Footer/>  

    //    <Router>
    //     <Routes>
    //       <Route
    //         exaxt
    //         path="/"
    //         element={<DemoHome fetchQuestions={fetchQuestions} />}
    //       />
    //       <Route
    //         exact
    //         path="/quiz"
    //         element={
    //           <Quiz
    //             questions={questions}
    //             score={score}
    //             setScore={setScore}
    //             setQuestions={setQuestions}
    //           />
    //         }
    //       />
    //        <Route path="/result">
    //         <Result score={score} />
    //       </Route> 
    //     </Routes>
    //   </Router> 
