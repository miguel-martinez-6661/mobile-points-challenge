import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RouteNames } from '../constants/route-names';
import { DetailsScreen, HomeScreen } from '../screens';
import { AppNavigationParamList } from '../types';

const Stack = createNativeStackNavigator<AppNavigationParamList>();

export const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={RouteNames.Home} component={HomeScreen} />
      <Stack.Screen name={RouteNames.Details} component={DetailsScreen} />
    </Stack.Navigator>
  );
};
