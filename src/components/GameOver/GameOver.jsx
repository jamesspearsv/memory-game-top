import './GameOver.css';

export function GameOver({ gameState, setGameState, score, setScore }) {
  function resetGame(nextScreen) {
    setScore({
      score: 0,
      highScore: gameState.win ? 0 : score.highScore,
    });

    setGameState((gameState) => ({
      level: gameState.win ? gameState.level + 1 : gameState.level,
      win: false,
      active: nextScreen,
    }));
  }

  const data = {
    pageContent: 'null',
    nextScreen: 'game',
    buttonText: 'Play Again',
    pageHeader: 'null',
  };

  if (gameState.win) {
    if (gameState.level === 3) {
      data.pageHeader = 'You Win!';
      data.pageContent = (
        <>
          <p>Congratulations! You beat the memory game!</p>
          <p>Click the butotn below to play again</p>
        </>
      );
      data.nextScreen = 'new-game';
      data.buttonText = 'New Game';
    }

    if (gameState.level < 3) {
      data.pageHeader = 'Level Complete!';
      data.pageContent = (
        <>
          <p>Click the button below to keep playing</p>
        </>
      );
      data.nextScreen = 'game';
      data.buttonText = 'Next Level';
    }
  } else {
    data.pageHeader = 'Game Over...';
    data.pageContent = (
      <>
        <p>Looks like you couldn&apos;t click them all this time.</p>
        <p>Wanna try again and beat your high score?</p>
      </>
    );
    data.nextScreen = 'game';
    data.buttonText = 'Try Again';
  }

  return (
    <div id='game-over-screen' className='game-screen'>
      <div id='page-header'>{data.pageHeader}</div>
      <div id='page-contant'>{data.pageContent}</div>
      <button className='button' onClick={() => resetGame(data.nextScreen)}>
        {data.buttonText}
      </button>
    </div>
  );
}
