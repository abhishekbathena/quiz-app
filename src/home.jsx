// Home.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./App.css"
const Home = () => {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [isOpen, setIsOpen] = useState(false); // State to track if the select box is open

  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
  };

  const handleSelectClick = () => {
    setIsOpen(true); // Open the select box when it is clicked
  };

  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <h1>Welcome to Quiz App</h1>
      <p>Select a subject to start the quiz:</p>
    
      <div className={`select-box ${isOpen ? 'open' : ''}`} onClick={handleSelectClick}>
        <label htmlFor="select-box1" className="label select-box1">
          <span className="label-desc">{selectedSubject ?selectedSubject :"Select a subject"}</span>
        </label>
        <select id="select-box1" className="select" value={selectedSubject} onChange={handleSubjectChange}>
          <option value="">Select a subject</option>
          <option value="Java">Java</option>
          <option value="Python">Python</option>
          <option value="C++">C++</option>
        </select>
      </div>
      {selectedSubject && <div style={{margin:"5px",padding:"5px",border:"1px solid",borderRadius:"50px"}}> <Link style={{textDecoration:"none"}} to={`/quiz/${selectedSubject}`}>Start Quiz</Link> </div>}
    </div>
  );
}

export default Home;
