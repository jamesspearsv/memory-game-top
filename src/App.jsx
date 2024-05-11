// ** STATIC IMPORTS **//
import './App.css';
import { GameOver } from './components/GameOver/GameOver';
import { Gameboard } from './components/Gameboard/Gameboard';
import { NewGame } from './components/NewGame/NewGame';
import { Scoreboard } from './components/Scoreboard/Scoreboard';

// ** COMPONENT & REACT IMPORTS **//
import { useState } from 'react';

function App() {
  const [score, setScore] = useState({
    score: 0,
    highScore: 0,
  });

  const [gameState, setGameState] = useState({
    win: false,
    active: 'new-game',
  });

  return (
    <div id='app'>
      {gameState.active === 'new-game' && (
        <NewGame setGameState={setGameState} />
      )}
      {gameState.active === 'game' && (
        <>
          <Scoreboard score={score} />
          <Gameboard
            score={score}
            setScore={setScore}
            setGameState={setGameState}
          />
        </>
      )}
      {gameState.active === 'game-over' && (
        <GameOver
          score={score}
          setScore={setScore}
          gameState={gameState}
          setGameState={setGameState}
        />
      )}
    </div>
  );
}

export default App;
