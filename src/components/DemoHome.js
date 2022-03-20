import React,{useState} from 'react'
import { useNavigate } from "react-router";
const DemoHome = ({fetchQuestions}) => {
  const [error, setError] = useState(false);
    const history = useNavigate();

    const handleSubmit = () => {
          setError(false);
          fetchQuestions();
          history("/quiz");
        
      };
  return (
    <>
    <button onClick={handleSubmit} style={{margin:"10rem"}}>Click me</button>
    </>
  )
}

export default DemoHome