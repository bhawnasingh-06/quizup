import { Button } from "@material-ui/core";
import { useState,useEffect } from "react";
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

  let history = useNavigate();

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
    if (currQues >= (questions.length-1) && selected) {
       history("/result");
    } else if (selected) {
      setCurrQues(currQues + 1);
      setSelected();
    } else setError("Please select an option first");
  };

  const handleQuit = () => {
    setCurrQues(0);
    setQuestions();
    history("/user")
  };
  const [seconds, setSeconds] = useState(120);
  useEffect(() => {
    let interval = null;
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
      if ( seconds === 0) {
      clearInterval(interval);
      history("/result");
    }
    return () => clearInterval(interval);
  }, [ seconds]);

  return (
    <div className="question my-4">
      <h1>Question {currQues + 1} of {questions.length}</h1>
      <div class="timer">
                <div class="time_left_txt">Time Left</div>
                <div class="timer_sec">{seconds} s</div>
            </div>

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
            href="/user"
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
            {currQues === (questions.length-1) ? "Submit" : "Next Question"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuizQuestion;