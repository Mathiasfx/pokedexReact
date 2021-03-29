import styled from 'styled-components'

//colores
export const colors = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
}


//Versiones Mobile y Desktop
export const desktopStartWidth = 814;
export const mobile = `@media (max-width: ${desktopStartWidth}px)`;

//styles Layout CardPokemon
export const Layout = styled.div`
display:flex;
flex-wrap: wrap;
justify-content: space-between;
margin:auto;
`;

//styles Card Pokemon
export const ContenedorPokemon = styled.div`
display:flex;
justify-content:center;
flex-direction: column;
align-items:center;
border-radius: 0.5rem;
flex:none;
width:23.5%;
height:30%;
background-color: #f8f8f8;
margin-bottom: 2%;
box-shadow: 2px 2px 5px #999;
cursor: pointer;

${mobile}{
    width:100%
}

&& p{
    margin:0;
}
&& h4 {
    margin:0;
    font-size: 1.2rem;
    font-weight:bold;
}
`;

//styles Nombre
export const CardNombre = styled.div`
width:100%;
background-color: white;
text-align: center;
border-bottom-left-radius:0.5rem;
border-bottom-right-radius:0.5rem;
`;

//styles contenedor form
export const ContenedorForm = styled.div`
display:flex;
justify-content:center;
align-items:center;
`;

//styles Buscador
export const FormularioPokemon = styled.form`
margin:1rem;
margin-top:3rem;
display:flex;
width:50%;
justify-content:center;
align-items:center;
flex-direction: row;
text-align:center;
`;

//Styles Detalles Card
export const DetalleCard = styled.div`
margin:1rem;
padding:1rem;
display:flex;
align-items:center;
justify-content:center;
background-color: white;
position:fixed;
bottom:0;
border-radius: 1rem;
width:100%;
height:500px;
box-shadow: 2px 2px 5px #999;

${mobile}{
    height:90vh;
}

&& h2 {
    font-size: 35px;
    font-weight:bold;
    margin:0;
}
&& span {
    font-size: 30px;
    font-weight:lighter;
    padding-left:2rem;
    margin:0;
}

&& img {
   padding:2rem;
}

&& .detalle {
    text-align:left;
}


`;

export const CardType = styled.div`
 display: flex;
flex-wrap: wrap;
justify-content:center;
align-items:center;
width:5rem;
height:2rem;
border-radius:0.6rem;
background-color: ${props => props.color ? `${colors[props.color]}` : '#242424'};

&& p {
    color: #fff;
    font-weight:bold;
    margin:0;
}


`;

export const ContenedorBotones = styled.div`
display:flex;
justify-content:space-between;
height:50px;
width:100%;

`;

export const ButtonContinue = styled.button`
background-color:transparent;
outline:none;
border:0.5px solid gray;
`;