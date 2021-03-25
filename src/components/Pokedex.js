import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { DataContext } from '../context/DataContext';
import CardPokemon from './CardPokemon';
import { Layout } from '../styled/styles'
import Buscador from './Buscador';
import { Spinner, Button } from 'react-bootstrap'



const Pokedex = () => {

    //datos desde el context
    const { data, cargando, paginaSiguiente, paginaAnterior, anteriorURL } = useContext(DataContext);



    return (
        <div>
            {cargando ? <div className='d-flex flex-column justify-content-center full-width mb-4 mt-4' ><Spinner animation="border" size="lg" /> Cargando...</div> : (
                <Container>
                    <Buscador />
                    <div className='d-flex justify-content-around mt-4 mb-4'>
                        {anteriorURL ? <Button onClick={paginaAnterior} variant="info">Anterior</Button> : null}

                        <Button onClick={paginaSiguiente} variant="info">Siguiente</Button>
                    </div>
                    <Layout>
                        {data.map((pokemon, index) => {
                            return <CardPokemon key={index} pokemon={pokemon} />
                        })}
                    </Layout>
                </Container>
            )
            }

        </div>
    );
}

export default Pokedex;