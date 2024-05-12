import './NewGame.css';

export function NewGame({ gameState, setGameState }) {
  return (
    <div id='new-game-screen' className='game-screen'>
      <p>
        This is a simple memory game. Click on each Pokemon once and only once
        to beat the level. Click any of the cards twice and you lose the game.
        Complete all three levels to win the game.
      </p>
      <br />
      <p>Click the start button below when you are ready to play.</p>
      <button
        className='button'
        onClick={() => {
          setGameState({
            level: 1,
            win: false,
            active: 'game',
          });
        }}
      >
        Start
      </button>
    </div>
  );
}
