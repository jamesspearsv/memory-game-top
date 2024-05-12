import './Gameboard.css';
import { Card } from '../Card/Card';
import { useState, useEffect } from 'react';

const levels = [
  [1, 2, 3, 4, 5, 6],
  [1, 10, 15, 99, 5, 35, 7, 27, 145],
  [1, 10, 15, 99, 5, 35, 7, 27, 145, 25, 167, 123],
];

export function Gameboard({ score, setScore, gameState, setGameState }) {
  const [pokemon, setPokemon] = useState([]);
  const [prevCards, setPrevCards] = useState([]);

  function shuffle(cards) {
    const shuffledCards = [...cards];
    shuffledCards.sort(() => Math.random() - 0.5);
    setPokemon(shuffledCards);
  }

  function handleClick({ currentTarget }) {
    const id = currentTarget.dataset.name;
    if (!prevCards.includes(id)) {
      // add pokemon to previous cards
      const tempArray = [...prevCards];
      tempArray.push(id);
      setPrevCards(tempArray);

      // increment score
      setScore((score) => ({ ...score, score: score.score + 1 }));

      // shuffle cards
      shuffle(pokemon);
    } else {
      const tempScore = { ...score };
      // Check if score is a high score
      if (tempScore.score > tempScore.highScore) {
        // set new high score
        tempScore.highScore = tempScore.score;
      }

      // reset score and go to game over screen
      tempScore.score = 0;
      setScore(tempScore);
      setGameState({ ...gameState, active: 'game-over' });
    }
  }

  useEffect(() => {
    async function fetchData(ids) {
      // Create an array of fetch promises to use in Promise.all()
      const promises = ids.map((id) => {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      });

      // Resolve array of promises
      Promise.all(promises)
        .then((responses) => {
          return Promise.all(responses.map((response) => response.json()));
        })
        .then((jsons) => {
          let pokemon = [];
          jsons.forEach((json) => {
            const p = {
              name: json.name,
              id: json.id,
              sprite: json.sprites.front_default,
            };

            pokemon.push(p);
          });

          shuffle(pokemon);
        });
    }

    fetchData(levels[gameState.level - 1]);

    // Clean up function
    return () => null;
  }, [gameState.levels]);

  useEffect(() => {
    function checkWin() {
      if (prevCards.length > 0 && prevCards.length === pokemon.length) {
        return true;
      }
      return false;
    }

    if (checkWin()) {
      setGameState({ ...gameState, win: true, active: 'game-over' });
    }
  });

  return (
    <div id='gameboard-container'>
      <div id='gameboard'>
        {pokemon.map((p) => (
          <Card
            pokemon={p}
            key={p.id}
            shuffle={shuffle}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}
