import Pokedex from "./components/Pokedex";
import ButtonCambiar from "./components/ButtonCambiar";
import Container from 'react-bootstrap/Container'
import React from 'react';
import { DataProvider } from "./context/DataContext";



function App() {
  return (
    <DataProvider>
      <Container className=" d-flex justify-content-center aling-center flex-column text-center mt-4">
        <Pokedex />
        <ButtonCambiar />
      </Container>
    </DataProvider>
  );
}

export default App;
