import React, { useState, useEffect } from 'react';

function ScoreCard(props) {
  const [userSelected, setUserSelected] = useState([]);
  const [bestScore, setBestScore] = useState(0);

  const headings = [
    'Fungdy',
    'Baba',
    'Mummy',
    'Mama',
    'Yeye',
    'Porpor',
    'Gonggong',
    'Gorgor',
    'Jeje',
    'Kaykay',
    'Bengbeng',
    'Yummy',
  ];

  useEffect(() => {

    if(!Boolean(props.userSelect)) return;

    if(!userSelected.includes(props.userSelect.selIndex))
      setUserSelected([...userSelected,props.userSelect.selIndex]);
    else {
      setBestScore(Math.max(bestScore,userSelected.length));
      setUserSelected([]);      
      alert(`You lose! You selected ${headings[props.userSelect.selIndex]} twice!`);
    }

  },[props.userSelect])

  return (
    <div className="scoreCard">
      <p>Current Score: {userSelected.length}</p>
      <p>Best Score: {bestScore}</p>
    </div>
  );
}

export default ScoreCard;
