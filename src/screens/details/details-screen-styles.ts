import { StyleSheet } from 'react-native';
import { verticalScale } from 'react-native-size-matters';
import { Colors } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    justifyContent: 'flex-end',
    backgroundColor: Colors.secondary,
    minHeight: verticalScale(120),
  },
  detailsContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  imageContainer: {
    padding: 0,
  },
  detailsImage: {
    height: verticalScale(250),
    width: '100%',
    borderRadius: 20,
  },
});
