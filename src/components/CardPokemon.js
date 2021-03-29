import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { CardNombre, ContenedorPokemon } from '../styled/styles'


const CardPokemon = ({ pokemon }) => {

    //datos desde el context
    const { SeleccionarPokemon } = useContext(DataContext);
    return (
        <ContenedorPokemon onClick={(e) => SeleccionarPokemon(e, pokemon.name)}>
            <img src={pokemon.sprites.front_default} alt='' />
            <CardNombre>
                <h4>{pokemon.name}</h4>
                <p># {pokemon.id.toString().padStart(3, '0')}</p>
            </CardNombre>
        </ContenedorPokemon>
    );
}






export default CardPokemon;