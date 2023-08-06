import { useState } from 'react';
import AddCategory from './components/AddCategory';

function GifExpertApp() {

  //hooks para mantener el stado// siempre inicilaizarlo
  const [categories, setCategories] = useState(['One Punch', 'Goku']);
  console.log(categories);

  const listCategories = ['Valorant'];
  const onAddCategory = () => {
    setCategories([...categories, listCategories]);
    //setCategories( categ=>[...cat, 'Valorant'])

    
  };


  return (
    <>
      {/* titulo  */}
      <h1>GifExpertApp</h1>

      <AddCategory setCategories={ setCategories} />

      {/* input */}

    <button onClick={onAddCategory}>Agregar</button>
      {/* listado de items ======================*/}

      <ol>
        {categories.map(category => {
          return <li key={category}>{category} </li>;
        })}
        

        
      </ol>
    </>
  );
}

export default GifExpertApp;
