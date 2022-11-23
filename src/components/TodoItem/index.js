import React from 'react';
import "./TodoItem.css"

function TodoItem(props) {
    /*arroy function*/
    //Esta es la forma para completar y eliminar manualmente
    /*
    const onComplete = () => {
        alert('Ya completaste el todo' + props.text);
    }

    const onDelete = () => {
        alert('Se ha eliminado' + props.text);
    }*/
    return (
        <li className="TodoItem">
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick={props.onComplete}>OK</span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <span className="Icon Icon-delete"
            onClick={props.onDelete}>X</span>
        </li>
    );
}

export { TodoItem };