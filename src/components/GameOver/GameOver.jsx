import './GameOver.css';

export function GameOver({ gameState, setGameState, score, setScore }) {
  function resetGame() {
    setScore({
      score: 0,
      highScore: gameState.win ? 0 : score.highScore,
    });

    setGameState({
      win: false,
      active: gameState.win ? 'new-game' : 'game',
    });
  }
  return (
    <div>
      <p>{gameState.win ? 'You win!' : 'Game over...'}</p>
      <button onClick={resetGame}>
        {gameState.win ? 'Play Again' : 'Try Again'}
      </button>
    </div>
  );
}
