import React from 'react';
import renderer from 'react-test-renderer';
import NumbersGrid from '../../../src/components/numbersGrid/NumbersGrid';

describe('NumbersGrid', () => {
  it('snapshot', () => {
    const maxOfNumbers = 5;
    const component = renderer.create(<NumbersGrid maxNumToDisplay={maxOfNumbers} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});