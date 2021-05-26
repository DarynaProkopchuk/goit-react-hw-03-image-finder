import React from 'react';
import PropTypes from 'prop-types';
import './Button.module.css';

const Button = ({ children, onClick, ...allyProps }) => (
    <button type="button" className="Button" onClick={onClick} {...allyProps}>Загрузить еще...
    {children}
  </button>
);

Button.defaultProps = {
  onClick: () => null,
  children: null,
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

export default Button;

