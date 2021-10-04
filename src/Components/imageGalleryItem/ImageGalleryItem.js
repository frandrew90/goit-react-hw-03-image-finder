import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ image, largeImg, onPictureOpen }) => {
  // console.log('GalItem', image);
  // console.log('GalItemFunc', onPictureOpen);
  return (
    <li
      className="ImageGalleryItem"
      onClick={() => {
        onPictureOpen(largeImg);
      }}
    >
      <img src={image} alt="#" className="ImageGalleryItem-image" />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
  onPictureOpen: PropTypes.func.isRequired,
};
