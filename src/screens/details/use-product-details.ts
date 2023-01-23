import { useEffect, useState } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { AppNavigationParamList, Product } from '../../types';

export const useProductDetails = () => {
  const { goBack } = useNavigation();
  const { params } = useRoute<RouteProp<AppNavigationParamList>>();
  const [selectedProduct, setSelectedProduct] = useState<Product>();

  useEffect(() => {
    setSelectedProduct(params?.item);
  }, [params]);

  return {
    goBack,
    selectedProduct,
  };
};
