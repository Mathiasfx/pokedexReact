import Pokedex from "./components/Pokedex";
import Container from 'react-bootstrap/Container'
import React from 'react';
import { DataProvider } from "./context/DataContext";



function App() {
  return (
    <DataProvider>
      <Container >

        <Pokedex />

      </Container>
    </DataProvider>
  );
}

export default App;
