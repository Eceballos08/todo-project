import React from 'react';
import { TodoContext } from '../../TodoContext';
import './TodoCounter.css';
import headerBackground from './images/headerBackground.png';

function TodoCounter(){
    const { totalTodos, completedTodos } = React.useContext(TodoContext);
    return (
        <div className="TodoContainer">
            <h1 className="TodoCounterHeader">Tareas completadas </h1>
            <p className="TodoCounter">{completedTodos} de {totalTodos} </p>
        </div>
    );
}

export { TodoCounter };