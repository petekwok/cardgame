import React, { useState, } from 'react';
import './App.css';
import Board from './components/Board';
import ScoreCard from './components/ScoreCard';

function App() {
  const [userSelect, setUserSelect] = useState(null);

  return (
    <div className = "app">
      <Board handleOnClick={(clickObject) => setUserSelect(clickObject)} />
      <ScoreCard userSelect={userSelect} />
    </div>
  );
}

export default App;
