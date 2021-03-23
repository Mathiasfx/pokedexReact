import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';


const Pokedex = () => {

    //datos desde el context
    const { data } = useContext(DataContext);

    return (
        <div>
            <h3>Pokedex</h3>
            <pre>   {JSON.stringify(data, null, 2)}</pre>

        </div>
    );
}

export default Pokedex;