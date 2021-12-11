import React, { useState } from 'react';
import { generateBoard } from '../components/helpers';

const GamePage = () => {
  const row = 6;
  const column = 7;

  const [board, setBoard] = useState(generateBoard(row, column));
  const [currentTurn, setCurrentTurn] = useState('red');

  const clickHandler = (column) => {
    const newBoard = [...board];
    for (let i = 1; i <= row; i++) {
      if (newBoard[row - i][column] === null) {
        newBoard[row - i][column] = currentTurn;
        if (currentTurn === 'red') {
          setCurrentTurn('yellow');
        } else {
          setCurrentTurn('red');
        }
        break;
      }
    }

    setBoard(newBoard);
  };

  return (
    <div>
      <h1>It is {currentTurn}'s turn </h1>

      {board.map((row, rowNumber) => (
        <div key={`row${rowNumber}`} className='flex board'>
          {row.map((cell, columnNumber) => (
            <div
              key={`column${columnNumber}`}
              className={cell ? cell : 'nullCell'}
              onClick={() => clickHandler(columnNumber)}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GamePage;
