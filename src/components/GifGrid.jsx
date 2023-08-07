import { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { getGifs } from '../helpers/getGifs';
import GifItem from './GifItem';


const GifGrid = ({ category }) => {

  const [images, setImages] = useState([]);

  const getImges = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };

  useEffect(() => {
    getImges();
  },[]);

  return (
    <>
      <h3>{category}</h3>
      <div className=' card-grid'>
        {
          images.map((image) => (
            <GifItem
              key={image.id}
              {...image}

            ></GifItem>
          ))
        }
      
      </div>
      
    </>
  );
};

//validacion de las props
GifGrid.propTypes = {
  category: PropTypes.array.isRequired,
};

export default GifGrid;
