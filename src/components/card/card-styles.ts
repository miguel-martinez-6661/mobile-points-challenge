import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { Colors } from '../../constants/colors';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.primary,
    padding: 20,
    borderRadius: 20,
    minWidth: moderateScale(275),
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 15,
  },
});
