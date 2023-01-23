import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Colors } from '../../constants/colors';
import { Text } from '../text/text';
import { styles } from './loading-indicator-styles';

export const LoadingIndicator = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loadingIndicator}>
        <ActivityIndicator size="large" color={Colors.primary} />
        <Text title>Cargando</Text>
      </View>
    </View>
  );
};
