import { getDefaultNormalizer } from "@testing-library/dom";
import { createContext, useState, useEffect } from "react";
import { getData, ObtenerPokemon } from '../services/Data';

export const DataContext = createContext();




//Componente Provider
export const DataProvider = ({ children }) => {

    //data Pokemones
    const [data, setData] = useState([])
    const [siguiente, setSiguiente] = useState('');
    const [anterior, setAnterior] = useState('');
    const [cargando, setCargando] = useState(true);

    const endpointUrl = 'https://pokeapi.co/api/v2/pokemon';


    //Cargar Datos de API
    useEffect(() => {
        async function fetchData() {
            let response = await getData(endpointUrl);
            setSiguiente(response.next);
            setAnterior(response.previous);
            await cargarPokemon(response.results);
            setCargando(false);
        }

        fetchData();

    }, []);

    //mapear los datos
    const cargarPokemon = async (data) => {
        let pokemones = await Promise.all(data.map(async pokemon => {
            let pokemonGuardado = await ObtenerPokemon(pokemon.url);
            return pokemonGuardado;
        }))
        setData(pokemones);
    }

    console.log(data);

    return (
        <DataContext.Provider value={{
            data,
            cargando
        }}>
            {children}
        </DataContext.Provider>
    );
}