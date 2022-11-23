import React from 'react';
import { TodoContext } from '../../TodoContext';
import "./TodoSearch.css"

function TodoSearch() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext)
        /*forma para agregar estado a nuestros componentes cuando los creamos como funciones*/
   /* const [estado, setState] = React.useState('Juan');
    onChange={() => setState('Enrique'))}*/
    /*Creamos un estado que estamos guardando en la primera variable y una funcion para actualizar ese valir */

    /*Cada vez que el usuario escriba algo en el input de busqueda va a llamar la funcion searchValue para actualizar el estado*/
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return(
        <input
            className="TodoSearch"
            placeholder="Buscar"
            value={searchValue}
            onChange={onSearchValueChange}
            />
    );
}

export { TodoSearch };