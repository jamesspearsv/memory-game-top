import './Scoreboard.css';

export function Scoreboard({ score }) {
  return (
    <div id='scoreboard'>
      <div>
        Score<span>{score.score}</span>
      </div>
      <div>
        High Score <span>{score.highScore}</span>
      </div>
    </div>
  );
}
