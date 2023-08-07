import PropTypes from 'prop-types';
const GifItem = ({title, url, id }) => {
  console.log(title, url);

  return(
    <div className='card'>
      <img src={url } alt={title} />
      <p> {title} </p>
    </div>
  );
};


GifItem.PropTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.any.isRequired,
};
export default GifItem;