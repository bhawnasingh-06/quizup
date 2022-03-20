import Questions from "./Questions";
export const HomeAdmin = () => {
  
  return (
    <div>
    <Questions/>
    </div>
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
