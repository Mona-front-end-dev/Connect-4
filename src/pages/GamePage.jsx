import React, { useState } from 'react';
import { generateBoard, isPlayerWinner } from '../components/helpers';

const GamePage = () => {
  const row = 6;
  const column = 7;

  const [board, setBoard] = useState(generateBoard(row, column));
  const [currentTurn, setCurrentTurn] = useState('red');
  const [isWinner, setIsWinner] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);

  const clickHandler = (column) => {
    if (isWinner) return;

    const newBoard = [...board];
    for (let i = 1; i <= row; i++) {
      if (newBoard[row - i][column] === null) {
        newBoard[row - i][column] = currentTurn;

        if (isPlayerWinner(board, { row: row - i, column: column })) {
          setIsWinner(true);
          return;
        }

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

  const resetGame = () => {
    setBoard(generateBoard(row, column));
    setCurrentTurn('red');
    setIsWinner(false);
  };

  const startGame = () => {
    setIsGameStarted(true);
  }


  return (
    <div>
    {
      isGameStarted ? <div>
          <h2>{isWinner ? `${currentTurn} won! 🎉 `: `▶️ Turn to ${currentTurn}`}</h2>
          <div className='wrapper'>
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

          <button onClick={() => resetGame()}>Reset the game</button>
        </div>
        :
        <div>
          <h1 className="mainHeader">Welcome to Connct-4</h1>
          <button onClick={startGame}>start</button>
        </div>
    }
        </div>
  );
};

export default GamePage;
