import './Card.css';

export function Card({ info }) {
  return (
    <div className='card' data-id={info.id}>
      <div className='image'></div>
      <p>{info.value}</p>
    </div>
  );
}
