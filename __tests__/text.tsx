import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { Text } from '../src/components';
import { Colors } from '../src/constants/colors';

describe('Testing <Text> component', () => {
  it('should mount component correctly', () => {
    const textComponent = renderer.create(<Text>Test</Text>).toJSON();
    expect(textComponent).toMatchSnapshot();
  });

  it('should render with "title" props', () => {
    const textComponent = renderer.create(<Text title>Test</Text>).toJSON();
    expect(textComponent).toMatchSnapshot();
  });

  it('should render with "subTitle" props', () => {
    const textComponent = renderer.create(<Text subTitle>Test</Text>).toJSON();
    expect(textComponent).toMatchSnapshot();
  });

  it('should render with "largeText" props', () => {
    const textComponent = renderer.create(<Text largeText>Test</Text>).toJSON();
    expect(textComponent).toMatchSnapshot();
  });

  it('should support color changing by passing a color code as prop', () => {
    const textPrimaryComponent = renderer
      .create(<Text color={Colors.textPrimary}>Test</Text>)
      .toJSON();

    const textSecondaryComponent = renderer
      .create(<Text color={Colors.textSecondary}>Test</Text>)
      .toJSON();

    const textTertiaryComponent = renderer
      .create(<Text color={Colors.textTertiary}>Test</Text>)
      .toJSON();

    expect(textPrimaryComponent).toMatchSnapshot();
    expect(textSecondaryComponent).toMatchSnapshot();
    expect(textTertiaryComponent).toMatchSnapshot();
  });

  it('should support custom styles by receiving a style objects as a prop', () => {
    const textComponent = renderer
      .create(<Text styles={{ fontSize: 14 }}>Test</Text>)
      .toJSON();
    expect(textComponent).toMatchSnapshot();
  });
});
