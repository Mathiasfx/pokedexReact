import swal from 'sweetalert';

export async function getData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                resolve(data);
            })
    })
}

export async function ObtenerPokemon(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                resolve(data);
            })
    })
}

export async function ObtenerBuscado(url) {
    const APIurl = 'https://pokeapi.co/api/v2/pokemon';
    return new Promise((resolve, reject) => {
        console.log(`${APIurl}/${url}`)
        fetch(`${APIurl}/${url}`)
            .then(res => res.json())
            .then(data => {
                resolve(data);
            }).catch((err) => reject(
                swal({
                    title: "ERROR 404 - NO SE ENCONTRO POKEMON",
                    icon: "warning",
                }),
                //recarga la pagina
                setTimeout(function () { window.location.reload() }, 1500)
            ),



            )
    })
}

export async function ObtenerSiguiente(id) {
    const APIurl = 'https://pokeapi.co/api/v2/pokemon';
    return new Promise((resolve, reject) => {
        console.log(`${APIurl}/${id}`)
        fetch(`${APIurl}/${id}`)
            .then(res => res.json())
            .then(data => {
                resolve(data);
            })
    })
}

export async function ObtenerAnterior(id) {
    const APIurl = 'https://pokeapi.co/api/v2/pokemon';
    return new Promise((resolve, reject) => {
        console.log(`${APIurl}/${id}`)
        fetch(`${APIurl}/${id}`)
            .then(res => res.json())
            .then(data => {
                resolve(data);
            })
    })
}