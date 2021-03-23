import { createContext, useState } from "react";

export const DataContext = createContext();

//Consulta a la API
const datafix = {
    nombre: 'fran',
    edad: 32
}


//Componente Provider
export const DataProvider = ({ children }) => {

    const [data, setData] = useState(datafix)


    return (
        <DataContext.Provider value={{
            data,
            setData
        }}>
            {children}
        </DataContext.Provider>
    );
}