import { useCallback, useMemo, useState } from 'react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { useNavigation } from '@react-navigation/native';

import { AppNavigationProps, Product } from '../../types';
import { getProducts } from '../../controllers/products-controller';
import { RouteNames } from '../../constants/route-names';
import { useFetch } from '../../hooks';

const DEFAULT_MONTH_NAME_FORMAT = 'MMMM';

export enum FilterTypes {
  ALL = 'all',
  BY_EARNED_POINTS = 'earned-points',
  BY_REDEEMED_POINTS = 'spent-points',
}

export const useHome = () => {
  const { navigate } = useNavigation<AppNavigationProps>();
  const [currentFilter, setCurrentFilter] = useState<FilterTypes>(
    FilterTypes.ALL,
  );
  const { data: products, isLoading } = useFetch<Product[]>(getProducts);

  const currentDataMonth = useMemo(() => {
    if (!products || products?.length === 0) {
      return '';
    }
    const currentDataDate = new Date(products[0]?.createdAt);
    return format(currentDataDate, DEFAULT_MONTH_NAME_FORMAT, {
      locale: es,
    });
  }, [products]);

  const totalPoints = useMemo(() => {
    const total = products
      ?.map(product => product.points)
      ?.reduce((a, b) => a + b, 0);

    return total || 0;
  }, [products]);

  const filterProducts = useCallback(() => {
    if (currentFilter === FilterTypes.BY_EARNED_POINTS) {
      return products?.filter(product => !product.is_redemption);
    } else if (currentFilter === FilterTypes.BY_REDEEMED_POINTS) {
      return products?.filter(product => product.is_redemption);
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

  return {
    products: filterProducts(),
    showFiltersButtons: showFiltersButtons(),
    isLoading,
    totalPoints,
    handlePressItem,
    currentDataMonth,
    handleFilterChange,
  };
};
