import { getDefaultNormalizer } from "@testing-library/dom";
import { createContext, useState, useEffect } from "react";
import { getData, ObtenerPokemon } from '../services/Data';


export const DataContext = createContext();




//Componente Provider
export const DataProvider = ({ children }) => {

    //data Pokemones
    const [data, setData] = useState([])
    const [siguienteURL, setSiguiente] = useState('');
    const [anteriorURL, setAnterior] = useState('');
    const [cargando, setCargando] = useState(true);
    const [buscando, setBuscando] = useState('');

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

    //Paginador
    const paginaSiguiente = async () => {
        setCargando(true);
        let data = await getData(siguienteURL);
        await cargarPokemon(data.results);
        setSiguiente(data.next);
        setAnterior(data.previous);
        setCargando(false);
    }
    const paginaAnterior = async () => {
        if (!anteriorURL) return;
        setCargando(true);
        let data = await getData(anteriorURL);
        await cargarPokemon(data.results);
        setSiguiente(data.next);
        setAnterior(data.previous);
        setCargando(false);
    }
    // fin Paginador

    //Buscador
    const Buscar = async (query) => {
        console.log(query);

    }


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
            cargando,
            paginaSiguiente,
            paginaAnterior,
            anteriorURL,
            Buscar
        }}>
            {children}
        </DataContext.Provider>
    );
}