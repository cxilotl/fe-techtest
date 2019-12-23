import React from 'react';
import PropTypes from 'prop-types';
import classNamesConcat from 'classnames';
import cssStyles from './NumberBox.module.scss';

const NumberBox = ({ numBoxLabel, onClickFn, isSelected, isHighlighted }) => {
  const name = `num-button-${numBoxLabel}`;
  let cssClasses = cssStyles.layout;
  if (isSelected) {
    cssClasses = classNamesConcat(cssClasses, cssStyles.isSelected);
  } else if (isHighlighted) {
    cssClasses = classNamesConcat(cssClasses, cssStyles.isHighlighted);
  }
  // console.log('cssClasses: ', cssClasses);
  return (
    <>
      <button type="button" name={ name } className={ cssClasses } onClick={ onClickFn } value={ numBoxLabel }>
        { numBoxLabel }
      </button>
    </>
  );
};

NumberBox.propTypes = {
  numBoxLabel: PropTypes.number,
  isSelected: PropTypes.bool,
  isHighlighted: PropTypes.bool,
  onClickFn: PropTypes.func
};

NumberBox.defaultProps = {
  isSelected: false,
  isHighlighted: false
};

export default NumberBox;