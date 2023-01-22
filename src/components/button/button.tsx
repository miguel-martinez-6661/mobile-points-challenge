import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from '../text/text';
import { Colors } from '../../constants/colors';
import { styles } from './button-styles';

interface ButtonProps {
  title: string;
  flex?: boolean;
  onPress?: () => void;
}

export const Button = ({ title, onPress, flex = false }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, flex && styles.flexButton]}
      onPress={onPress}>
      <Text subTitle bold color={Colors.textSecondary}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
