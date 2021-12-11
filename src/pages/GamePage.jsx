import React, { useState } from 'react';
import { generateBoard } from '../components/helpers';

const GamePage = () => {
  const row = 6;
  const column = 7;

  const [board, setBoard] = useState(generateBoard(row, column));

  const clickHandler = (i) => {
    console.log('You have clicked on me' + i);
  };

  return (
    <div>
      <h1>here the game displays</h1>
      {board.map((row, i) => (
        <div key={`row${i}`} className='flex board'>
          {row.map((cell, j) => (
            <div
              key={`column${j}`}
              className='nullCell'
              onClick={() => clickHandler(j)}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GamePage;
