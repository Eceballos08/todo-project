import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext'
//import './App.css';


// const defaultTodos = [
//     { text: 'Cortar pera', completed: true},
//     { text: 'Tomar curso react', completed: false},
//     { text: 'Sacar a Guffi', completed: true},
//     { text: 'Llorar porque si', completed: false},
//   ];

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }
  
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
    );
}

export default App;
