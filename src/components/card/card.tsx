import React from 'react';
import { View, ViewStyle } from 'react-native';
import { Colors } from '../../constants/colors';
import { styles as componentStyle } from './card-styles';

interface CardProps {
  children: React.ReactNode;
  styles?: ViewStyle | ViewStyle[];
  color?: string;
}

export const Card = ({
  children,
  color = Colors.primary,
  styles = {},
}: CardProps) => {
  return (
    <View style={[componentStyle.card, { backgroundColor: color }, styles]}>
      {children}
    </View>
  );
};
