import styled from 'styled-components'

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