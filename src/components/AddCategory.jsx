import { useState } from 'react';

function AddCategory() {

  //Manejar el estado de este input

  const [inputvalue, setInputvalue] = useState('star wars');
  const [categories, setCategories] = useState('star wars');

  const onInputChanged = (event) => {
    setInputvalue(event.target.value);
    console.log(event.target.value);
    
  };
  const onSubmint = (event) => {
    event.preventDefault();
    console.log(inputvalue);
  };

  return (
    <form
      onSubmit={(event)=>onSubmint(event)}
    >
        <input
          type='text'
          placeholder='Buscar gifs'
          value={inputvalue}
          onChange={ onInputChanged}
        />

      </form>
      
  );
}

export default AddCategory;