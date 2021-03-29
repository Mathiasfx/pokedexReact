import { createContext, useState, useEffect } from "react";
import { getData, ObtenerPokemon, ObtenerBuscado, ObtenerSiguiente, ObtenerAnterior } from '../services/Data';
import swal from 'sweetalert';


export const DataContext = createContext();




//Componente Provider
export const DataProvider = ({ children }) => {

    //data Pokemones
    const [data, setData] = useState([])
    const [siguienteURL, setSiguiente] = useState('');
    const [anteriorURL, setAnterior] = useState('');
    const [cargando, setCargando] = useState(true);
    const [buscando, setBuscando] = useState('');
    const [seleccionado, setSeleccionado] = useState({});
    //enpoint - colocar en el .env
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
        setCargando(true);
        //validar
        if (query.trim() !== '') {
            let data = await ObtenerBuscado(query);
            setBuscando(data);
            setCargando(false);
        } else {
            // Mostrar Error
            swal({
                title: "Debes ingresar un Nombre",
                icon: "warning",
            });
            let response = await getData(endpointUrl);
            setSiguiente(response.next);
            setAnterior(response.previous);
            await cargarPokemon(response.results);
            setCargando(false);
        }
    }

    //Seleccionar Pokemon al hacer click
    const SeleccionarPokemon = async (e, poke) => {
        e.preventDefault();
        let data = await ObtenerBuscado(poke);
        setSeleccionado(data);
    }

    //Seleccionar Siguiente pokemon en detalle
    const SeleccionarSiguiente = async (e, id) => {
        e.preventDefault();
        let data = await ObtenerSiguiente(id);
        setSeleccionado(data);
    }

    //Seleccionar pokemon anterior detalle
    const SeleccionarAnterior = async (e, id) => {
        e.preventDefault();
        let data = await ObtenerAnterior(id);
        setSeleccionado(data);
    }


    //mapear los datos
    const cargarPokemon = async (data) => {
        let pokemones = await Promise.all(data.map(async pokemon => {
            let pokemonGuardado = await ObtenerPokemon(pokemon.url);
            return pokemonGuardado;
        }))
        setData(pokemones);
    }





    return (
        //Provider Context
        <DataContext.Provider value={{
            data,
            cargando,
            paginaSiguiente,
            paginaAnterior,
            anteriorURL,
            Buscar,
            buscando,
            setBuscando,
            seleccionado,
            setSeleccionado,
            SeleccionarPokemon,
            SeleccionarSiguiente,
            SeleccionarAnterior
        }}>
            {children}
        </DataContext.Provider>
    );
}