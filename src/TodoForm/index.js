import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoForm () {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    //consumir el estado
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);
    //crear las funciones de los botones de cancelar y añadir
    const onCancel = () => {
        setOpenModal(false)
    };

    const onChange = (event) => {
        //entrar al elemento que se modifico y agarrar su nuevo valor
        setNewTodoValue(event.target.value);
    };

    const onSubmit = (event) => {
        //consultar como funciona el preventDefault
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false)
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Crea un nuevo TODO</label>
            <textarea
                value = {newTodoValue}
                onChange={onChange}
                placeholder="Cortar la cebolla para la cena"
            />
            <div className="buttonContainer">
                <button
                    onClick={onCancel}
                    type="button"
                    className="TodoForm-button buttonCancel"
                >
                    Cancelar
                </button>

                <button
                    type="submit"
                    className="TodoForm-button buttonCreate"
                    onChange={onChange}
                >
                    Añadir
                </button>
            </div>

        </form>
    )
}

export { TodoForm };