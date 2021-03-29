import React, { useContext, useState } from 'react';
import { DataContext } from '../context/DataContext';
import { ContenedorForm, FormularioPokemon } from '../styled/styles';
import { Button, Form } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons';



const Buscador = () => {

    const [busqueda, setBusqueda] = useState('');

    //datos desde el context
    const { Buscar } = useContext(DataContext);

    return (
        <ContenedorForm>
            <FormularioPokemon>
                <Form.Control onChange={(e) => { e.preventDefault(); setBusqueda(e.target.value) }} type="text" placeholder="Buscar Pokemon....." />
                <Button onClick={(e) => { e.preventDefault(); Buscar(busqueda.toLowerCase()) }} variant="secondary" className="ml-2"><Icon.Search /></Button>
            </FormularioPokemon>
        </ContenedorForm>



    );
}

export default Buscador;