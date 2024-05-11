import './GameOver.css';

export function GameOver({ gameState, setGameState, score, setScore }) {
  function resetGame() {
    setScore({
      score: 0,
      highScore: gameState.win ? 0 : score.highScore,
    });

    setGameState((gameState) => ({
      level: gameState.win ? gameState.level + 1 : gameState.level,
      win: false,
      active: 'game',
    }));
  }

  let message;
  if (gameState.win) {
    message = (
      <div>
        <p>Congratulations! You beat the memory game!</p>
        <p>Click the butotn below to play again</p>
      </div>
    );
  } else {
    message = (
      <div>
        <p>Looks like you couldn&apos;t click them all this time.</p>
        <p>Wanna try again and beat your high score?</p>
      </div>
    );
  }

  return (
    <div id='game-over-screen' className='game-screen'>
      {message}
      <button className='button' onClick={resetGame}>
        {gameState.win ? 'Play Again' : 'Try Again'}
      </button>
    </div>
  );
}
