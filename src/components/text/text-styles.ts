import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  text: {
    fontFamily: 'Avenir',
    fontSize: moderateScale(12),
    fontWeight: '400',
  },
  subTitle: { fontFamily: 'Avenir', fontSize: moderateScale(14) },
  title: { fontFamily: 'Avenir', fontSize: moderateScale(18) }, // Figma requires 16 here, but 18 is the closest to the design
  largeText: { fontFamily: 'Avenir', fontSize: moderateScale(24) },
  xLargeText: { fontFamily: 'Avenir', fontSize: moderateScale(32) },
  bold: { fontWeight: '900' }, // Figma requires 800 here, but 900 is the closest to the design
});
