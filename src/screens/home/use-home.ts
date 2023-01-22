import { useCallback, useEffect, useMemo, useState } from 'react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

import { getProducts } from '../../controllers/products-controller';
import { AppNavigationProps, Product } from '../../types';
import { useNavigation } from '@react-navigation/native';
import { RouteNames } from '../../constants/route-names';

const DEFAULT_MONTH_NAME_FORMAT = 'MMMM';

export enum FilterTypes {
  ALL = 'all',
  BY_EARNED_POINTS = 'earned-points',
  BY_REDEEMED_POINTS = 'spent-points',
}

export const useHome = () => {
  const { navigate } = useNavigation<AppNavigationProps>();
  const [products, setProducts] = useState<Product[]>([]);
  const [currentFilter, setCurrentFilter] = useState<FilterTypes>(
    FilterTypes.ALL,
  );

  const getProductList = async () => {
    const productListData = await getProducts();
    setProducts(productListData);
  };

  const currentDataMonth = useMemo(() => {
    if (products.length === 0) {
      return '';
    }
    return format(new Date(products[0]?.createdAt), DEFAULT_MONTH_NAME_FORMAT, {
      locale: es,
    });
  }, [products]);

  const totalPoints = useMemo(() => {
    const total = products
      .map(product => product.points)
      .reduce((a, b) => a + b, 0);

    return total || 0;
  }, [products]);

  const filterProducts = useCallback(() => {
    if (currentFilter === FilterTypes.BY_EARNED_POINTS) {
      return products.filter(product => !product.is_redemption);
    } else if (currentFilter === FilterTypes.BY_REDEEMED_POINTS) {
      return products.filter(product => product.is_redemption);
    } else {
      return products;
    }
  }, [currentFilter, products]);

  const handleFilterChange = useCallback((filter: FilterTypes) => {
    setCurrentFilter(filter);
  }, []);

  const showFiltersButtons = () => {
    return currentFilter !== FilterTypes.ALL;
  };

  const handlePressItem = useCallback(
    (item: Product) => {
      navigate(RouteNames.Details, { item });
    },
    [navigate],
  );

  useEffect(() => {
    getProductList();
  }, []);

  return {
    products: filterProducts(),
    showFiltersButtons: showFiltersButtons(),
    totalPoints,
    handlePressItem,
    currentDataMonth,
    handleFilterChange,
  };
};
