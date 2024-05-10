import './Gameboard.css';
import { Card } from '../Card/Card';
import { useState, useEffect } from 'react';

let didInit = false;
const list = [1, 10, 15, 99, 5, 35, 7, 27, 145];

export function Gameboard({ score, setScore }) {
  const [pokemon, setPokemon] = useState([]);
  const [prevCards, setPrevCards] = useState([]);

  console.log(!prevCards.includes('1'));

  function shuffle(cards) {
    const shuffledCards = [...cards];
    shuffledCards.sort(() => Math.random() - 0.5);
    setPokemon(shuffledCards);
  }

  function handleClick({ currentTarget }) {
    // Psuedo Code:
    // If (card's id is not in previous cards)
    //     Add card's id to previous cards
    //     incement score
    //     shuffle cards
    // Else
    //     end game and check high score

    const id = currentTarget.dataset.name;
    console.log(id);
    if (!prevCards.includes(id)) {
      // add pokemon to previous cards
      const tempArray = [...prevCards];
      tempArray.push(id);
      setPrevCards(tempArray);

      // increment score
      const tempScore = { ...score };
      tempScore.score++;
      setScore(tempScore);

      // shuffle cards
      shuffle(pokemon);
    } else {
      alert('game over');
      if (score.score > score.highScore) {
        const tempScore = { ...score };
        tempScore.highScore++;
        setScore(tempScore);
      }
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

    if (!didInit) {
      didInit = true;
      console.log('fetching data...');
      fetchData(list);
    }

    // Clean up function
    return () => (didInit = false);
  }, []);

  return (
    <div id='gameboard-container'>
      <p>Gameboard</p>
      <p>Score: {score.score}</p>
      <p>High Score: {score.highScore}</p>
      <div
        style={{ display: 'flex', gap: '10px', height: '1rem', margin: '1rem' }}
      >
        {prevCards.map((card, index) => (
          <p key={index}>{card}</p>
        ))}
      </div>
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
