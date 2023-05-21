import PropTypes from 'prop-types';
import React from 'react';

export const Skelletal = ({ children }) => {
  return <div>{children}</div>;
};

Skelletal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
};
