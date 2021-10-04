import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ getPhoto }) => {
  return (
    <button type="button" onClick={getPhoto} className="Button">
      Load more
    </button>
  );
};

export default Button;

Button.propTypes = {
  getPhoto: PropTypes.func.isRequired,
};
