import React from 'react';

const data = {
    nombre: 'Pedro',
    edad: 88
}


const BottonCambiar = ({ setData }) => {
    return (
        <div>
            <button className="btn btn-primary"
                onClick={() => setData(data)}
            > Cambiar Data</button>
        </div>
    );
}

export default BottonCambiar;