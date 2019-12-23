import React from 'react';
import PropTypes from 'prop-types';
import NumberBox from '../numberBox/NumberBox';
import cssStyles from './NumbersGrid.css';
import cssItemStyles from './NumbersGridItem.css';

const NumbersGridItem = ({ children }) => {
  return (
    <>
      <li className={ cssItemStyles.layout }>
        { children }
      </li>
    </>
  );
};

NumbersGridItem.propTypes = {
  children: PropTypes.node.isRequired,
};

const NumbersGrid = ({ maxNumToDisplay, selectedNum, highlightedNumbers, onNumberClickFn }) => {
  const onClickFn = (clickEvent) => {
    const selectedValue = parseInt(clickEvent.currentTarget.value, 10);
    onNumberClickFn(selectedValue);
  };

  const renderNumberList = (highestNumber, selectedValue, highlightedValues) => {
    let index = 1;
    const numberList = [];
    if (typeof highestNumber === "number" && highestNumber > 0) {
      for (index; index < highestNumber; index++) {
        const keyIndex = `number-id-${index}`;
        const isSelected = (selectedValue)? index === selectedValue : false;
        let isMultiple = false;
        if (!isSelected && highlightedValues.includes(index)) {
          isMultiple = true;
        }
        numberList.push(
          <NumbersGridItem key={ keyIndex }>
            <NumberBox numBoxLabel={ index } isSelected={ isSelected } isHighlighted={ isMultiple } onClickFn={ onClickFn } />
          </NumbersGridItem>
        );
      }
    }
    return numberList;
  };

  return (
    <>
      <ol className={ cssStyles.layout }>
        { renderNumberList(maxNumToDisplay, selectedNum, highlightedNumbers) }
      </ol>
    </>
  );
};

NumbersGrid.propTypes = {
  maxNumToDisplay: PropTypes.number,
  selectedNum: PropTypes.number,
  highlightedNumbers: PropTypes.arrayOf(PropTypes.number),
  onNumberClickFn: PropTypes.func
};

NumbersGrid.defaultProps = {
  maxNumToDisplay: 0,
  selectedNum: 0,
  highlightedNumbers: [],
  onNumberClickFn: () => {}
};

export default NumbersGrid;