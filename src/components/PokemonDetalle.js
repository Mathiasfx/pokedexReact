import React, { useContext } from 'react';
import { DetalleCard, CardType, ContenedorBotones, ButtonContinue } from '../styled/styles';
import { DataContext } from '../context/DataContext';
import { PrimeraLetraMayuscula } from '../help/index';
import { Col, Container, Row, Button } from 'react-bootstrap';



const PokemonDetalle = () => {
    //datos desde el context
    const { seleccionado, setSeleccionado, SeleccionarSiguiente, SeleccionarAnterior } = useContext(DataContext);




    return (
        <DetalleCard>
            <Container>
                <ContenedorBotones>
                    <ButtonContinue onClick={(e) => SeleccionarAnterior(e, seleccionado.id - 1)}>#{(seleccionado.id - 1).toString().padStart(3, '0')}</ButtonContinue>
                    <ButtonContinue onClick={(e) => SeleccionarSiguiente(e, seleccionado.id + 1)}>#{(seleccionado.id + 1).toString().padStart(3, '0')}</ButtonContinue>
                </ContenedorBotones>
                <Row>
                    {<Col><img src={seleccionado.sprites.other.dream_world.front_default} height="85%" alt={seleccionado.name} /></Col>}
                    <Col>
                        <div className="d-flex flex-row text-left my-5">
                            <h2>{PrimeraLetraMayuscula(seleccionado.name)}  </h2> <span>#{seleccionado.id.toString().padStart(3, '0')}</span>
                        </div>
                        <Row className="detalle">
                            <Col>
                                <h4>Height</h4>
                                <p>{seleccionado.height} m</p>
                                <h4>Weight</h4>
                                <p>{seleccionado.weight} kg</p>
                            </Col>
                            <Col>
                                <h4>Type</h4>
                                <CardType color={seleccionado.types[0].type.name}><p>{PrimeraLetraMayuscula(seleccionado.types[0].type.name)} </p></CardType>
                                <h4>Abilities</h4>
                                <p>{PrimeraLetraMayuscula(seleccionado.abilities[0].ability.name)} </p>
                            </Col>
                        </Row>
                    </Col>



                </Row>
                <Button onClick={(e) => setSeleccionado({})}>Volver</Button>
            </Container>


        </DetalleCard>
    );
}

export default PokemonDetalle;