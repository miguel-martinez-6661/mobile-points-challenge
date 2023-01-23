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
    maxHeight: verticalScale(250),
  },
  cardContainer: {
    padding: 0,
    marginBottom: 30,
  },
  detailsImage: {
    height: verticalScale(250),
    maxHeight: verticalScale(250),
    width: '100%',
    borderRadius: 20,
  },
  section: {
    marginBottom: 20,
  },
});
