// ** STATIC IMPORTS **//
import './App.css';
import { Gameboard } from './components/Gameboard/Gameboard';
import { data } from './js/testData';

// ** COMPONENT & REACT IMPORTS **//
import { useState } from 'react';

function App() {
  const [score, setScore] = useState({
    score: 0,
    highScore: 0,
  });

  const [gameState, setGameState] = useState('game');

  return (
    <>
      <select
        name='game-state'
        id='game-state'
        onChange={({ target }) => {
          setGameState(target.value);
        }}
      >
        <option value='new-game'>New Game</option>
        <option value='game' selected>
          Game
        </option>
        <option value='game-over'>Game Over</option>
      </select>
      <div id='app'>
        {gameState === 'game' && (
          <Gameboard score={score} setScore={setScore} />
        )}
        {gameState === 'new-game' && <p>New Game</p>}
        {gameState === 'game-over' && <p>Game Over</p>}
      </div>
    </>
  );
}

export default App;
