import React from 'react';

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
