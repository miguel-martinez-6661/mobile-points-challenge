import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RouteNames } from '../constants/route-names';
import { DetailsScreen, HomeScreen } from '../screens';

const Stack = createNativeStackNavigator();

export const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen name={RouteNames.Home} component={HomeScreen} />
      <Stack.Screen name={RouteNames.Details} component={DetailsScreen} />
    </Stack.Navigator>
  );
};
