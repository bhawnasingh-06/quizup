import React,{useContext} from 'react';
import questionContext from '../context/questions/questionContext';


const QuestionItem = (props) => {
    const context = useContext(questionContext);
    const {deleteQuestion}=context;
    const { question , updateQuestion} = props;
    return (
        <div className="col-md-3">
           
            <div className="card text-dark bg-white mb-3" style={{maxWidth: '18rem'}}>
                <div className="card-header">{question.questiondesc}</div>
                <div className="card-body">
                    <h6 className="card-title">{`Option 1: ${question.option1}`}</h6>
                    <h6 className="card-title">{`Option 2:${question.option2}`}</h6>
                    <h6 className="card-title">{`Option 3:${question.option3}`}</h6>
                    <h6 className="card-title">{`Option 4:${question.option4}`}</h6>
                    <h5 className="card-text">{`Correct Answer:${question.correctanswer}`}</h5>
                    <i className="fas fa-trash-alt mx-3" onClick={()=>{deleteQuestion(question._id);}}></i>
                    <i className="fas fa-edit" onClick={()=>{updateQuestion(question)}}></i>
                </div>
            </div>

        </div>
        )
};

export default QuestionItem;