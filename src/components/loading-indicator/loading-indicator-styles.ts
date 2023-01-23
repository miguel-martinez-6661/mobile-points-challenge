import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 2,
  },
  loadingIndicator: {
    justifyContent: 'space-evenly',
    backgroundColor: Colors.background,
    height: '12%',
    padding: 10,
    borderRadius: 10,
  },
});
