import { CircularProgress } from "@material-ui/core";
import { useEffect, useState} from "react";
import QuizQuestion from "./QuizQuestion";
import "./css/quiz.css";
const Quiz = ({questions, score, setScore, setQuestions }) => {  
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.option1,questions[currQues]?.option2,questions[currQues]?.option3,questions[currQues]?.option4
        ])
    );
  }, [currQues, questions]);

  console.log(questions);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="quiz">
      <span className="subtitle">Welcome UserName</span>
      {questions ? (
        <>
          <QuizQuestion
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correctanswer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>
  );
};

export default Quiz;
