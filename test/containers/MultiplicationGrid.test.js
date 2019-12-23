import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, render, fireEvent, waitForElement } from '@testing-library/react';
import MultiplicationGrid from '../../src/containers/MultiplicationGrid';

describe('MultiplicationGrid', () => {
  const maxNumber = 25;

  it('snapshot', () => {
    const component = renderer.create(<MultiplicationGrid highestMultiplierNumber={ maxNumber } />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('Given a list of numbers for which we want to know the multiples of a selected number within the list, it', () => {
    let highestNum = 25;

    afterEach(cleanup);

    it('Should render an unselected list of buttons', () => {
      const { container } = render(
        <MultiplicationGrid highestMultiplierNumber={ maxNumber } />
      );
      const buttons = container.querySelectorAll('button');
      expect(buttons.length).toEqual(highestNum - 1);
    });

    it('Should render a non highlighted list of buttons, when no specific number was chosen', () => {
      const { container } = render(
        <MultiplicationGrid highestMultiplierNumber={ maxNumber } />
      );
      const highlightedButtons = container.querySelectorAll('button.isHighlighted');
      expect(highlightedButtons.length).toEqual(0);
    });

    it('Should render a highlighted list of buttons when a specific number is selected', async () => {
      const { container, getByText } = render(
        <MultiplicationGrid highestMultiplierNumber={ maxNumber }  />
      );

      // Selecting the multiplier button and clicking on it
      const clickedButton = getByText('5');
      fireEvent.click(clickedButton);

      // Checking the multiplier has been selected in the app
      const selectedButtons = await waitForElement(() => container.querySelectorAll('.isSelected'), { container });
      expect(selectedButtons.length).toEqual(1);
      expect(parseInt(selectedButtons[0].value, 10)).toEqual(5);

      // Checking that the multiples have been highlighted
      const multiplesHighlightedButtons = await waitForElement(() => container.querySelectorAll('.isHighlighted'), { container });
      expect(multiplesHighlightedButtons.length).toEqual(3);
      expect(parseInt(multiplesHighlightedButtons[0].value, 10)).toEqual(10);
      expect(parseInt(multiplesHighlightedButtons[1].value, 10)).toEqual(15);
      expect(parseInt(multiplesHighlightedButtons[2].value, 10)).toEqual(20);
    });
  });
});