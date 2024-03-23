// QuizPage.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import questions from './questions';

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [score, setScore] = useState(0);
  const [error, setError] = useState('');
  const nav = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(''));

  const { subject } = useParams();

  const handleOptionChange = (e) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[currentQuestionIndex] = e.target.value;
    setSelectedOptions(updatedOptions);
    setError('');
  };

  const handleNextQuestion = () => {
    if (!selectedOptions[currentQuestionIndex]) {
      setError('Please select an option before proceeding.');
      return;
    }

    const correctAnswer = questions[subject][currentQuestionIndex].correctAnswer;

    if (selectedOptions[currentQuestionIndex] === correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex === questions[subject].length - 1 && selectedOptions[currentQuestionIndex] === correctAnswer) {
      nav(`/result/${score+1}/${questions[subject].length}/${subject}/${JSON.stringify(selectedOptions)}`);
    } 
    else if(currentQuestionIndex === questions[subject].length - 1){
  
        nav(`/result/${score}/${questions[subject].length}/${subject}/${JSON.stringify(selectedOptions)}`);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOptions([...selectedOptions, '']);
    }
  };

  const handleSubmit = () => {
    if (!selectedOptions[currentQuestionIndex]) {
      setError('Please select an option before submitting.');
      return;
    }

    const correctAnswer = questions[subject][currentQuestionIndex].correctAnswer;
    if (currentQuestionIndex === questions[subject].length - 1 && selectedOptions[currentQuestionIndex] === correctAnswer) {
        nav(`/result/${score+1}/${questions[subject].length}/${subject}/${JSON.stringify(selectedOptions)}`);
      } 
      else {
    
          nav(`/result/${score}/${questions[subject].length}/${subject}/${JSON.stringify(selectedOptions)}`);
      } 
  };

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center",justifyItems:"center" }}>
        <h2>{questions[subject][currentQuestionIndex].question}</h2>
        <form>
          {questions[subject][currentQuestionIndex].options.map((option, index) => (
            <div key={index} style={{ alignItems: 'center' }}>
              <label>
                <input
                  type="radio"
                  value={option}
                  checked={selectedOptions[currentQuestionIndex] === option}
                  onChange={handleOptionChange}
                />
                {option}
              </label>
            </div>
          ))}
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <br />
        <button style={{margin:"5px",padding:"5px",border:"1px solid",borderRadius:"10px",paddingLeft:"7px",paddingRight:"7px"}} onClick={handleNextQuestion}>Next</button>
        {currentQuestionIndex === questions[subject].length - 1 && (
          <button style={{margin:"5px",padding:"5px",border:"1px solid",borderRadius:"10px"}} onClick={handleSubmit}>Submit</button>
        )}
       
      </div>
    </div>
  );
}

export default Quiz;
