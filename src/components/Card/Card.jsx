import './Card.css';

export function Card({ card }) {
  return (
    <div className='card' data-id={card.id}>
      <div className='image'></div>
      <p>{card.id}</p>
    </div>
  );
}
