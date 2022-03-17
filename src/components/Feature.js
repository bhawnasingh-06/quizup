import React from 'react'
import Featurebox from './FeatureBox'
import quizfeature1 from './photos/quizfeature1.jpg'
import quizfeature2 from './photos/quizfeature2.png'
import quizfeature3 from './photos/quizfeature3.webp'
import quizfeature4 from './photos/result.jpg'// 
import './css/features.css'
const Feature = () => {
  return (
    <div id="features">
        <h1>Why online quizzes are the better option?</h1>
        <div className="a-container">
            <Featurebox image={quizfeature1} title='Learn with fun' content="Not only are quizzes fun for students,but also a sneaky form of learning as they don't feel like a traditional activity."/>
            <Featurebox image={quizfeature2} title='No time wasted' content='QuizUp includes a built-in timer to keep participants on task and give everyone the same amount of time to respond.'/>
            <Featurebox image={quizfeature3} title="Improves your aptitude" content='Solving the mental puzzles can be one of the best ways to tickle your brain cells and keep them active. '/>
            <Featurebox image={quizfeature4} title='Get instant results' content='QuizUp gives you an instant result after you complete a quiz which can help you determine how you performed.'/>
            
        </div>
    </div>
  )
}

export default Feature