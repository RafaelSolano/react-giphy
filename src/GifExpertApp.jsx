import { useState } from 'react';
import {AddCategory, GifGrid} from './components';

function GifExpertApp() {
  //hooks para mantener el stado// siempre inicilaizarlo
  const [categories, setCategories] = useState(['One Punch', 'Goku']);
  console.log(categories);

  //funcion
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />
      {categories.map((category) => (
        <GifGrid
          key={category}
          category={category} />
      ))}
    </>
  );
}

export default GifExpertApp;
