import React from 'react';

const CardPokemon = ({ pokemon }) => {
    return (
        <div>
            <img src={pokemon.sprites.front_default} alt='' />
            <h4>{pokemon.name}</h4>
            <p># {pokemon.id}</p>
        </div>
    );
}
export default CardPokemon;