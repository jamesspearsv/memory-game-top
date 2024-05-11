import './NewGame.css';

export function NewGame({ gameState, setGameState }) {
  return (
    <div id='new-game-menu'>
      <h1>Memory Game!</h1>
      <p>
        This is a simple memory game. Click on each Pokemon once and only once.
      </p>
      <p>
        See if you can click them all without clicking any one twice. Click any
        of the cards twice and you lose the game. Click them all once and you
        win!
      </p>
      <button
        onClick={() => {
          const temp = { ...gameState, active: 'game' };
          setGameState(temp);
        }}
      >
        Start
      </button>
    </div>
  );
}
