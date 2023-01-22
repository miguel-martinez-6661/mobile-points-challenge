import React, { useMemo } from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import { Colors } from '../../constants/colors';
import { styles as componentStyle } from './text-styles';

interface TextProps {
  children: string | number;
  title?: boolean;
  subTitle?: boolean;
  largeText?: boolean;
  xLargeText?: boolean;
  color?: string;
  bold?: boolean;
  styles?: RNTextProps | any;
}

export const Text = ({
  children,
  title,
  subTitle,
  largeText,
  xLargeText,
  bold = false,
  color = Colors.textPrimary,
  styles,
}: TextProps) => {
  const textStyle = useMemo(() => {
    return {
      ...componentStyle.text,
      ...(title && componentStyle.title),
      ...(subTitle && componentStyle.subTitle),
      ...(largeText && componentStyle.largeText),
      ...(xLargeText && componentStyle.xLargeText),
      ...(bold && componentStyle.bold),
      color,
      ...styles,
    };
  }, [title, subTitle, largeText, xLargeText, bold, color, styles]);

  return <RNText style={textStyle}>{children}</RNText>;
};
