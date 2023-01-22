import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Product } from './product';
import { RouteNames } from '../constants/route-names';

export type AppNavigationParamList = {
  [RouteNames.Home]: undefined;
  [RouteNames.Details]: { item: Product };
};

export type AppNavigationProps =
  NativeStackNavigationProp<AppNavigationParamList>;
