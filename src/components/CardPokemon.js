import React from 'react';
import { CardNombre, ContenedorPokemon } from '../styled/styles'


const CardPokemon = ({ pokemon }) => {
    return (
        <ContenedorPokemon>
            <img src={pokemon.sprites.front_default} alt='' />
            <CardNombre>
                <h4>{pokemon.name}</h4>
                <p># {pokemon.id}</p>
            </CardNombre>
        </ContenedorPokemon>
    );
}






export default CardPokemon;