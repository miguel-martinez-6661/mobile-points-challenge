import React from 'react';
import { View } from 'react-native';
import { styles } from './home-screen-styles';
import { useHome } from './use-home';

import { LoadingIndicator, Text } from '../../components';
import { strings } from '../../constants/strings';
import { formatNumber } from '../../helpers';
import { ButtonSection } from './button-section';
import { ProductList } from './product-list';
import { PointsCard } from './points-card';

const DEFAULT_USER_NAME = 'Ruben Rodriguez';
const DEFAULT_POINTS_SUFFIX = 'pts';

export const HomeScreen = () => {
  const {
    products,
    isLoading,
    totalPoints,
    handlePressItem,
    currentDataMonth,
    handleFilterChange,
    showFiltersButtons,
  } = useHome();

  return (
    <>
      {isLoading && <LoadingIndicator />}
      <View style={styles.container}>
        <Text title bold>
          {strings.Home.greetings}
        </Text>
        <Text subTitle>{DEFAULT_USER_NAME}</Text>
        <PointsCard
          month={currentDataMonth}
          totalPoints={`${formatNumber(totalPoints)} ${DEFAULT_POINTS_SUFFIX}`}
        />
        <ProductList data={products} onItemPress={handlePressItem} />
        <ButtonSection
          showFiltersButtons={showFiltersButtons}
          onFilterChange={handleFilterChange}
        />
      </View>
    </>
  );
};
