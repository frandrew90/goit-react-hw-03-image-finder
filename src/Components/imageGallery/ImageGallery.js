import React from 'react';
import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ gallery, onPictureOpen }) => {
  console.log('ImgG', gallery);

  return (
    <ul className="ImageGallery">
      {gallery.map(hit => (
        <ImageGalleryItem
          key={hit.id}
          image={hit.webformatURL}
          largeImg={hit.largeImageURL}
          onPictureOpen={onPictureOpen}
        />
      ))}

      {/* {gallery.map(image => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          onPictureOpen={onPictureOpen}
        />
      ))} */}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  gallery: PropTypes.array.isRequired,
  onPictureOpen: PropTypes.func.isRequired,
};
