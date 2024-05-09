import './Gameboard.css';
import { Card } from '../Card/Card';
import { useState, useEffect } from 'react';
import { data } from '../../js/testData';

let didInit = false;
const url = 'https://pokeapi.co/api/v2/pokemon/?limit=9';

export function Gameboard({ cardInfo }) {
  useEffect(() => {
    if (!didInit) {
      didInit = true;
      console.log('fetching data...');

      fetch(url)
        .then((request) => request.json())
        .then((data) => setCards(data.results));

      // Clean up function
      return () => console.log('cleaned up');
    }
  }, []);

  return (
    <div id='gameboard-container'>
      <p>Gameboard</p>
      <div id='gameboard'>
        {data.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}
