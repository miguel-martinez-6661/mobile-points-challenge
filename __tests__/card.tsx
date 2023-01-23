import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { Card, Text } from '../src/components';
import { Colors } from '../src/constants/colors';

describe('Testing <Card> component', () => {
  it('should mount component correctly', () => {
    const cardComponent = renderer.create(
      <Card>
        <Text>Test</Text>
      </Card>,
    );
    expect(cardComponent).toMatchSnapshot();
  });

  it('should support custom styles by receiving a style objects as a prop', () => {
    const cardComponent = renderer
      .create(
        <Card styles={{ width: 50 }}>
          <Text>Test</Text>
        </Card>,
      )
      .toJSON();
    expect(cardComponent).toMatchSnapshot();
  });

  it('should be able to change background color by receiving a color as a prop', () => {
    const cardComponent = renderer
      .create(
        <Card color={Colors.secondary}>
          <Text>Test</Text>
        </Card>,
      )
      .toJSON();
    expect(cardComponent).toMatchSnapshot();
  });
});
