import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/button.css';

/**
 * @param {string} text
 * @param {string} variant
 * @param {string} color
 * @param {function} onClick
 */
function Button({ text, variant, color, onClick }) {
  const isFilled = variant === 'filled';

  return (
    <button
      className={`custom-button ${isFilled ? 'filled' : 'outlined'}`}
      style={{ '--button-color': color }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['outlined', 'filled']),
  color: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: 'outlined',
  color: '#006F3C',
  onClick: () => {},
};

export default Button;
