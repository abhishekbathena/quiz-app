import React from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import questions from './questions';
const Answers = () => {
    const {  subject,selectedOptions } = useParams();
    const pselectedOptions = JSON.parse(selectedOptions);
  return (
    <div>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        {questions[subject].map((question, index) => (
          <div key={index}>
            <h3>{question.question}</h3>
            <ul>
            {question.options.map((option, optionIndex) => (
                <li key={optionIndex} style={{ color: pselectedOptions && (pselectedOptions[index] === option && (option !== question.correctAnswer)) ? 'red' : (option === question.correctAnswer ? 'green' : 'black') }}>
                  {option}
                </li>
              ))}
            </ul>
      
          </div>
        ))}
      </div>
    </div>
  )
}

export default Answers