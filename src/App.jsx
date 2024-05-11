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
    level: 0,
  });

  const [isDarkTheme, setIsDarkTheme] = useState(true);

  return (
    <div id='app' data-theme={isDarkTheme ? 'dark' : 'light'}>
      <div id='header-container'>
        <div id='app-header'>Memory Game</div>
        <button
          className='button'
          id='theme-button'
          onClick={() => {
            setIsDarkTheme((isDarkTheme) => !isDarkTheme);
          }}
        >
          Toggle Theme
        </button>
      </div>
      {gameState.active === 'new-game' && (
        <NewGame gameState={gameState} setGameState={setGameState} />
      )}
      {gameState.active === 'game' && (
        <>
          <Scoreboard score={score} gameState={gameState} />
          <Gameboard
            score={score}
            setScore={setScore}
            gameState={gameState}
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
