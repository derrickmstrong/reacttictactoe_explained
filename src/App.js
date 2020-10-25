import React, { useState, useEffect } from 'react';
import Square from './Components/Square';

const App = () => {
  // Represents game board
  const initialState = ['', '', '', '', '', '', '', '', ''],
  // Represents current state of game
   [gameState, setGameState] = useState(initialState),
   // Represents player turn
   [isXTurn, setIsXTurn] = useState(false);

   // On every square click check the status of the Square based on its index ie. gameState(index)
  const onSquareClick = (index) => {
    // Create array using current gameState
    let strings = Array.from(gameState);
    // In the index of the square that has been clicked determine if it is and X or O (First player will be 'O')
    strings[index] = isXTurn ? 'X' : 'O';
    // Update gameState based on which square was clicked
    setGameState(strings);
    // Update player turn with toggle
    setIsXTurn(!isXTurn);
  };

  // Upon loading page and every time the gameState changes
  useEffect(() => {
    // Assign 'winner' variable to checkWinner function that checks if the player has won
    const winner = checkWinner();
    // If player has won then 
    if (winner) {
      // Alert player as winner
      alert(`${winner} has won!`);
      // Reset game back to clear board
      setGameState(initialState);
    }
    // Return a cleanup function
    return () => {};
  }, 
  // Watch/Update page whenever the gameState changes
  [gameState]);

  // Check for a winner
  const checkWinner = () => {
    // Create an array of arrays that shows all possible combinations that can lead to victory
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    // Loop through the combinations 
    for (let i = 0; i < lines.length; i++) {
      // Each combination will be assigned a line during the loop
      const [a, b, c] = lines[i];
      // If the gameState for the 3 square combination equals one of the winning combinations then
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        // Return that (lines) combination as true and winner
        return gameState[a];
      }
    }
    // Otherwise return nothing
    return null;
  };

  return (
    <div className='app-header'>
      <p className='heading-text'>React Tic Tac Toe</p>
      <div className='row'>
        {/* Each of the 9 Square components are separate and holds its own gameState. When the Square has been clicked then we check the onSquareClick function to manupulate its gameState */}
        <Square
          className='b-bottom-right'
          state={gameState[0]}
          onClick={() => onSquareClick(0)}
        />
        <Square
          className='b-bottom-right'
          state={gameState[1]}
          onClick={() => onSquareClick(1)}
        />
        <Square
          className='b-bottom'
          state={gameState[2]}
          onClick={() => onSquareClick(2)}
        />
      </div>
      <div className='row'>
        <Square
          className='b-bottom-right'
          state={gameState[3]}
          onClick={() => onSquareClick(3)}
        />
        <Square
          className='b-bottom-right'
          state={gameState[4]}
          onClick={() => onSquareClick(4)}
        />
        <Square
          className='b-bottom'
          state={gameState[5]}
          onClick={() => onSquareClick(5)}
        />
      </div>
      <div className='row'>
        <Square
          className='b-right'
          state={gameState[6]}
          onClick={() => onSquareClick(6)}
        />
        <Square
          className='b-right'
          state={gameState[7]}
          onClick={() => onSquareClick(7)}
        />
        <Square state={gameState[8]} onClick={() => onSquareClick(8)} />
      </div>
      <button
        className='clear-button'
        onClick={() => {
          setGameState(initialState);
        }}>
        Clear Game
      </button>
    </div>
  );
};

export default App;
