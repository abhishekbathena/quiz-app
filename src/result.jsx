import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import questions from './questions';

const Result = () => {
  const { score, totalQuestions, subject,selectedOptions } = useParams();
  const navigate = useNavigate();


  const viewAns=()=>{
    navigate(`/ans/${subject}/${selectedOptions}`)
  }
  const handleRetakeTest = () => {
    navigate(`/quiz/${subject}`);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>Result</h1>
      <p>Your Score: {score} / {totalQuestions}</p>
      <div style={{display:"flex",justifyContent:"space-between"}}>
      <a style={{ marginTop: "25px", padding: "3px", border: "1px solid", borderRadius: "20px", textDecoration: "none", cursor: "pointer" }} onClick={handleRetakeTest}>Retake Test</a>
      <Link style={{ marginTop: "25px", padding: "3px", border: "1px solid", borderRadius: "20px", textDecoration: "none", cursor: "pointer",color:"black" }} to="/">Go To Home</Link>
      <a  style={{ marginTop: "25px", padding: "3px", border: "1px solid", borderRadius: "20px", textDecoration: "none", cursor: "pointer",color:"black" }} href="" onClick={viewAns}>view answers</a>
      </div>

    </div>
  );
}

export default Result;
