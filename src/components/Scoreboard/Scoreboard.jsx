import './Scoreboard.css';

export function Scoreboard({ score, gameState }) {
  return (
    <div id='scoreboard-container'>
      <div id='level'>Level {gameState.level}</div>
      <div id='scoreboard'>
        <div className='score'>
          <div>Score</div>
          <div className='score-count'>{score.score}</div>
        </div>
        <div className='score'>
          <div>High Score</div>
          <div className='score-count'>{score.highScore}</div>
        </div>
      </div>
    </div>
  );
}
