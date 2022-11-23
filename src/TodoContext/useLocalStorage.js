import React from 'react';

function useLocalStorage(itemName, initialValue) {
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    /*Array de TODOs con su estado inicial*/
    const [item, setItem] = React.useState(initialValue);

    React.useEffect(() => {
      //Permite poner un tiempo para que nuestro codigo no se ejectute sino hasta ese tiempo
      setTimeout(() => {
        //establecer todo lo relacionado con el localStorage
        try {
          //llamar a localStorage para recibir algun elemento
        const localStorageItem = localStorage.getItem(itemName);
        //creacion del primer array cuando los usuarios no han creado nada de TODOs
        let parsedItem;
    
        //si no existe informacion osea si los usuarios son nuevos
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue; //nuestro estado por defecto es un array vacio
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        
        setItem(parsedItem);
        //cuando ya halla cargado todo llamamos a setLoading
        setLoading(false);
        } catch(error) {
            setError(error);
        }
      }, 1000);
    });
    
    
    //funcion para guardar los nuevos todos en el componente y en el local storage
    const saveItem = (newItem) => {
      try {
        //convertir en un string todos los TODOs
      const stringifiedItem = JSON.stringify(newItem);
      //guardar la informacion en el localstorage
      localStorage.setItem(itemName, stringifiedItem);
      //llamar el array de nuevos todos del jsx
      setItem(newItem);
      } catch (error) {
        setError(error);
      }
    };
    return {
      item,
      saveItem,
      loading,
    };
}

export { useLocalStorage };