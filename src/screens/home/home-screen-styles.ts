import { Platform, StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import { Colors } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: Platform.select({
      ios: 40,
      android: 0,
    }),
  },
  section: {
    marginTop: 20,
  },
  monthsPointsContainer: {
    alignItems: 'center',
  },
  currentDataMonthLabel: {
    textTransform: 'capitalize',
  },
  totalPointsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: moderateScale(5),
  },
  buttonContainer: {
    backgroundColor: Colors.defaultBackground,
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'absolute',
    paddingTop: 10,
    paddingBottom: verticalScale(25),
    bottom: 0,
    left: 20,
    right: 20,
    zIndex: 2,
  },
  productsList: {
    height: verticalScale(310),
  },
  productsListContainer: {
    padding: 10,
    paddingBottom: '50%',
  },
  productsListItem: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  productsListItemImage: {
    borderRadius: 10,
    width: 55,
    height: 55,
  },
  productsListItemName: {
    flex: 1,
    marginLeft: 10,
  },
  productsListItemPoints: {
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productsListItemPointLabel: {
    marginLeft: -10,
  },
});
