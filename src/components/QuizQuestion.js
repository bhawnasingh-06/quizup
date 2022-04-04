import { Button } from "@material-ui/core";
import { useState } from "react";
import { useNavigate } from "react-router";
import ErrorMessage from "./ErrorMessage"
import "./css/quizQuestion.css";


const QuizQuestion = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  setScore,
  score,
  setQuestions,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

  const history = useNavigate();

  const handleSelect = (i) => {
    if (selected === i && selected === correct) return "select";
    else if (selected === i && selected !== correct) return "wrong";
    else if (i === correct) return "select";
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);
    setError(false);
  };

  const handleNext = () => {
    if (currQues > 3) {
    //   history.push("/result");
    } else if (selected) {
      setCurrQues(currQues + 1);
      setSelected();
    } else setError("Please select an option first");
  };

  const handleQuit = () => {
    setCurrQues(0);
    setQuestions();
  };

  return (
    <div className="question">
      <h1>Question {currQues + 1} :</h1>

      <div className="singleQuestion">
        <h2>{questions[currQues].questiondesc}</h2>
        <div className="options">
           {error && <ErrorMessage>{error}</ErrorMessage>} 
          {options &&
            options.map((i) => (
              <button
                className={`singleOption  ${selected && handleSelect(i)}`}
                key={i}
                onClick={() => handleCheck(i)}
                disabled={selected}
              >
                {i}
              </button>
            ))}
        </div>
        <div className="controls">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            href="/"
            onClick={() => handleQuit()}
          >
            Quit
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            onClick={handleNext}
          >
            {currQues > 3 ? "Submit" : "Next Question"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuizQuestion;

{/* <div className="container mt-sm-5 my-1">
        <div className="question ml-sm-5 pl-sm-5 pt-2">
          <div className="py-2 h5">
            <b> Q1. </b>
          </div>
          <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
            <label className="options">
              option a <input type="radio" name="radio" />
              <span className="checkmark"> </span>
            </label>
            <label className="options">
              option b <input type="radio" name="radio" />
              <span className="checkmark"> </span>
            </label>
            <label className="options">
              option c <input type="radio" name="radio" />
              <span className="checkmark"> </span>
            </label>
            <label className="options">
              option d <input type="radio" name="radio" />
              <span className="checkmark"> </span>
            </label>
          </div>
        </div>
        <div className="d-flex align-items-center pt-3 ">
          <div id="prev">
            <button className="btn btn-primary mx-5"> Previous </button>
          </div>
          <div className="ml-auto mr-sm-5">
            <button className="btn btn-success mx-5"> Next </button>
            <button className="btn btn-success mx-5"> End Quiz </button>
          </div>
        </div>
      </div> */}

