import './Card.css';

export function Card({ pokemon, handleClick }) {
  return (
    <div
      className='card'
      data-id={pokemon.id}
      data-name={pokemon.name}
      onClick={handleClick}
    >
      <div className='card-image'>
        <img src={pokemon.sprite} alt='' />
      </div>
      <div className='card-name'>
        <p>{pokemon.name}</p>
      </div>
    </div>
  );
}
