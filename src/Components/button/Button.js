import React from 'react';

const Button = ({ getPhoto }) => {
  return (
    <button type="button" onClick={getPhoto} className="Button">
      Load more
    </button>
  );
};

export default Button;
