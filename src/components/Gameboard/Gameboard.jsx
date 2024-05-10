import './Gameboard.css';
import { Card } from '../Card/Card';
import { useState, useEffect } from 'react';

let didInit = false;
const list = [1, 10, 15, 99, 5, 35, 7, 27, 145];

export function Gameboard() {
  const [pokemon, setPokemon] = useState([]);
  const [prevCards, setPrevCards] = useState([]);

  function shuffle(cards) {
    const shuffledCards = [...cards];
    shuffledCards.sort(() => Math.random() - 0.5);
    setPokemon(shuffledCards);
  }

  function handleClick({ currentTarget }) {
    // Psuedo Code:
    // If (card's id is not in previous cards)
    //     incement score
    //     shuffle cards
    //     Add card's id to previous cards
    // Else
    //     end game and check high score

    shuffle(pokemon);
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
              id: json.name,
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
    return () => console.log('cleaned up');
  }, []);

  return (
    <div id='gameboard-container'>
      <p>Gameboard</p>
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
