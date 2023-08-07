import PropTypes from 'prop-types';
import { useState } from 'react';

export function AddCategory({ onNewCategory }) {
  //Manejar el estado de este input

  const [inputvalue, setInputvalue] = useState('');

  const onInputChanged = ({target}) => {
    setInputvalue(target.value);
  };
  const onSubmint = (event) => {
    event.preventDefault();

    if (inputvalue.trim().length <= 1) return; // evitar insertar datos vacio o de 1 caracter

    setInputvalue(''); //limpia el input despues de agragar un elemento
    onNewCategory(inputvalue.trim());
  };

  return (
    <form onSubmit={onSubmint} aria-label='form'>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputvalue}
        onChange={onInputChanged}
      />
    </form>
  );
}
//validacion de las props
AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};

export default AddCategory;
