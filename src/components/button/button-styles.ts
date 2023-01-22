import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

export const styles = StyleSheet.create({
  flexButton: {
    flex: 1,
    marginHorizontal: 5,
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    width: '100%',
    borderRadius: 10,
    backgroundColor: Colors.primary,
    padding: 14,
  },
});
