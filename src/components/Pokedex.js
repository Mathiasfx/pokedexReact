import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import { DataContext } from '../context/DataContext';
import CardPokemon from './CardPokemon';
import PokemonDetalle from './PokemonDetalle';
import { Layout } from '../styled/styles'
import Buscador from './Buscador';
import { Spinner, Button } from 'react-bootstrap'



const Pokedex = () => {




    //datos desde el context
    const {
        data,
        cargando,
        paginaSiguiente,
        paginaAnterior,
        anteriorURL,
        buscando,
        setBuscando,
        seleccionado
    } = useContext(DataContext);



    return (
        <div>
            {cargando ? <div className='d-flex flex-column justify-content-center full-width mb-4 mt-4' ><Spinner animation="border" size="lg" /> Cargando...</div> : (
                <Container>

                    <Buscador />
                    {buscando ? <Button onClick={(e) => setBuscando('')} className="mb-5 mt-5" variant="warning">Volver</Button> :
                        <div className='d-flex justify-content-around mt-4 mb-4'>
                            {anteriorURL ? <Button onClick={paginaAnterior} variant="info">Anterior</Button> : null}
                            <Button onClick={paginaSiguiente} variant="info">Siguiente</Button>
                        </div>
                    }

                    <Layout>
                        {buscando ? <CardPokemon pokemon={buscando} /> : data.map((pokemon, index) => {
                            return <CardPokemon key={index} pokemon={pokemon} />
                        })}
                    </Layout>


                    <div className='d-flex justify-content-center text-center mt-4 mb-4'>
                        {console.log(seleccionado)}
                        {JSON.stringify(seleccionado) == '{}' ? null : <PokemonDetalle />}

                    </div>


                </Container>
            )
            }

        </div>
    );
}

export default Pokedex;