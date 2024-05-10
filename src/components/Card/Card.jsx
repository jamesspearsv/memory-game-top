import './Card.css';

export function Card({ pokemon, handleClick }) {
  return (
    <div
      className='card'
      data-id={pokemon.id}
      data-name={pokemon.name}
      onClick={handleClick}
    >
      <div className='image'>
        <img src={pokemon.sprite} alt='' />
        <p>{pokemon.name}</p>
      </div>
    </div>
  );
}
