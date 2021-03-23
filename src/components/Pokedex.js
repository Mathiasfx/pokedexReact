import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { DataContext } from '../context/DataContext';
import CardPokemon from './CardPokemon';



const Pokedex = () => {

    //datos desde el context
    const { data, cargando } = useContext(DataContext);

    return (
        <div>
            {cargando ? <h1>Cargando.....</h1> : (
                <Container>
                    <div>
                        {data.map((pokemon, index) => {
                            return <CardPokemon key={index} pokemon={pokemon}/>
                        })}
                    </div>
                </Container>
            )
            }

        </div>
    );
}

export default Pokedex;