import React, { useState } from 'react';
import PropTypes from "prop-types";
import NumbersGrid from '../components/numbersGrid/NumbersGrid';

const getMultiplesList = (multiplier, maxNum) => {
  let multiple = 1;
  const multiplesList = [];
  if (multiplier > 0 && maxNum >= multiplier) {
    while (multiple < maxNum + 1) {
      const rest = multiple % multiplier;
      if (rest === 0) {
        multiplesList.push(multiple);
      }
      multiple++;
    }
  }
  return multiplesList
};

const MultiplicationGrid = ({ highestMultiplierNumber }) => {
  const [ multiplier, setMultiplier ] = useState(0);
  const multiples = getMultiplesList(multiplier, highestMultiplierNumber);

  const onNumberSelectedFn = (selectedValue) => {
    if (selectedValue === multiplier) {
      setMultiplier(0);
    } else {
      setMultiplier(selectedValue);
    }
  };

  return (
    <>
      <NumbersGrid
        maxNumToDisplay={ highestMultiplierNumber }
        selectedNum={ multiplier }
        highlightedNumbers={ multiples }
        onNumberClickFn={ onNumberSelectedFn }
      />
    </>
  );
};

MultiplicationGrid.propTypes = {
  highestMultiplierNumber: PropTypes.number
};

MultiplicationGrid.defaultProps = {
  highestMultiplierNumber: 0
};

export default MultiplicationGrid;