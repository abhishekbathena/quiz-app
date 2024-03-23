// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home'; // Correct the import path
import Quiz from './quiz'; // Correct the import path
import Result from './result'; // Correct the import path
import Answers from './answers';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz/:subject" element={<Quiz />} />
          <Route path="/result/:score/:totalQuestions/:subject/:selectedOptions" element={<Result />} />
          <Route path="/ans/:subject/:selectedOptions" element={<Answers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
