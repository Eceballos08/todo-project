import React from 'react';
import "./CreateTodoButton.css"

function CreateTodoButton(props) {
    /*Cuando no necesito repeir la funcion
    const onClickButton = () => {
        alert('Aqui se deberia abrir el modal');
    };
    En el button: onClick={onClicButton}
    */
   /*Cuando quiero reutilizar la funcion */
    const onClickButton = () => {
        //funcion que devuelve el estado anterior a nuestra actualización, esto es para que la ventana modal se cierre y se abra
       props.setOpenModal(preState => !preState);
    };

    return (
        <button className="CreateTodoButton"
                onClick={onClickButton}
        >
            +
        </button>
        
    );
}

export { CreateTodoButton };