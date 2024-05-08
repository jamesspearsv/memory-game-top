import './Gameboard.css';
import { Card } from '../Card/Card';
import { useEffect } from 'react';
import { data } from '../../js/testData';

export function Gameboard({ cardInfo }) {
  const cards = cardInfo.map((info) => <Card key={info.id} />);

  useEffect(() => {
    console.log('fetching data...');
    fetch('https://emojihub.yurace.pro/api/random')
      .then((req) => req.json())
      .then((data) => console.log(data));

    // Clean up function
    return () => console.log('cleaned up');
  }, []);

  return (
    <div id='gameboard-container'>
      <p>Gameboard</p>
      <div id='gameboard'>
        {cardInfo.map((info) => (
          <Card key={info.id} info={info} />
        ))}
      </div>
    </div>
  );
}
