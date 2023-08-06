import PropTypes from 'prop-types';

import { useState } from 'react';




function AddCategory({onNewCategory}) {

  //Manejar el estado de este input

  const [inputvalue, setInputvalue] = useState('star wars');

  const onInputChanged = (event) => {
    setInputvalue(event.target.value);
    console.log(event.target.value);
    
  };
  const onSubmint = (event) => {
    event.preventDefault();

    if (inputvalue.trim().length <= 1) return;// evitar insertar datos vacio o de 1 caracter
    console.log(inputvalue);

    onNewCategory(inputvalue.trim());
    setInputvalue(''); //limpia el input despues de agragar un elemento
  };

  return (
    <form
      onSubmit={onSubmint}>
        <input
          type='text'
          placeholder='Buscar gifs'
          value={inputvalue}
          onChange={ onInputChanged}
        />

      </form>
      
  );
}
//validacion de las props
AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};

export default AddCategory;