import { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

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
      {/* titulo  */}
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={(event) => onAddCategory(event)} />
      {categories.map((category) => (
        <GifGrid
          key={category}
          category={category} />
      ))}
    </>
  );
}

export default GifExpertApp;
