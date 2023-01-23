import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { Button } from '../src/components';

describe('Testing <Button> component', () => {
  it('should mount component correctly', () => {
    const buttonComponent = renderer
      .create(<Button title="Test Button" />)
      .toJSON();
    expect(buttonComponent).toMatchSnapshot();
  });

  it('should mount component correctly and support an onPress event', () => {
    const onPressEvent = jest.fn();
    const buttonComponent = renderer.create(
      <Button title="Test Button" onPress={onPressEvent} />,
    );
    buttonComponent.root.findByType(Button).props.onPress();
    expect(onPressEvent).toHaveBeenCalled();
  });
});
