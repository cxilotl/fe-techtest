import React from 'react';
import renderer from 'react-test-renderer';
import NumberBox from '../../../src/components/numberBox/NumberBox';

describe('NumberBox', () => {
  const labelValue = 1;

  it('Snapshot - Default button', () => {
    const component = renderer.create(<NumberBox numBoxLabel={ labelValue }/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Snapshot - Selected button', () => {
    const isSelected = true;
    const component = renderer.create(<NumberBox numBoxLabel={ labelValue } isSelected={ isSelected } />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});