import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props) {

    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []);
      //crear array para la ventana modal, se inicia en false porque el modal debe estar cerrado inicialmente
      const [openModal, setOpenModal] = React.useState(false);
      const [searchValue, setSearchValue] = React.useState('');
      //Array de TODOs completados, para eso se filtra el array
      const completedTodos = todos.filter(todo => todo.completed == true).length;
      //cantidad de todos que hemos creado
      const totalTodos = todos.length;
      /*Procedimiento para realizar busquedas y que filtre  */
      let searchedTodos = [];
    
      if (!searchValue.length >= 1) {
        searchedTodos = todos;
      } else {
        /*aca aparece la variable todo en singular, llama a todos los todos pero filtra para ver cuales aparecen y cuales no*/
        searchedTodos = todos.filter(todo => {
          /*Transformar todo a minusculas */
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          /*Definir si cada todo tiene en su texto algo de lo que esta en nuestro filtro de busqueda */
          return todoText.includes(searchText);
        });
      }
    
      /*Metodo para añadir todos */
      const addTodo = (text) => {
        //Crear copia exacta de los todos que ya teniamos
        const newTodos = [...todos];
        //crear un nuevo objeto dentro nuestra nueva lista de todos
        newTodos.push({
          //enviar un nuevo todo, cada TODO tiene 2 parametros 
          completed: false,
          text,
        });
        //actualizar el estado
        saveTodos(newTodos);
        };

      /*Metodo para completar todos */
      const completeTodo = (text) => {
        /*Encontrar la posicion dentro del array que deseo cambiar */
        const todoIndex = todos.findIndex(todo => todo.text == text);
        //Crear copia exacta de los todos que ya teniamos
        const newTodos = [...todos];
        //marcar los TODOs completados
        newTodos[todoIndex].completed = true;
        //actualizar el estado
        saveTodos(newTodos);
        };
    
      /*Metodo para eliminar todos*/
      const deleteTodo = (text) => {
        /*Encontrar la posicion dentro del array que deseo cambiar */
        const todoIndex = todos.findIndex(todo => todo.text == text);
        //Crear copia exacta de los todos que ya teniamos
        const newTodos = [...todos];
        //Splice es para eliminar y funciona asi
        //Splice(establecer la posicion desde donde vamos a empezar a cortar, enviarle cuantos TODOs queremos eliminar
        newTodos.splice(todoIndex, 1);
        //actualizar el estado
        saveTodos(newTodos);
        };
    
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            addTodo,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,

        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };