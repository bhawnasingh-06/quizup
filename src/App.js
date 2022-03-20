import React, { useState } from "react";
import FirstPage from "./components/FirstPage";
import Navbar from "./components/Navbar";
import HomeAdmin from "./components/HomeAdmin";
import QuestionState from "./context/questions/QuestionState";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import HomeUser from "./components/HomeUser";

function App() {
  const [role, setRole] = useState();
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<FirstPage role={role} setRole={setRole} />}/>
          {role === "Admin" ? (<Route exact path="/admin/*" element={
                <QuestionState>
                  <Navbar />
                  <div>
                    <div className="container my-3">
                      <Routes>
                        <Route exact path="/adminhome" element={<HomeAdmin />} />
                        <Route exact path="/login" element={<Login />} />
                      </Routes>
                    </div>
                  </div>
                </QuestionState>
          }/> ) : ( <Route exact path="/user" element={<HomeUser />} /> )}
        </Routes>
      </Router>
    </>
  );
}

export default App;
