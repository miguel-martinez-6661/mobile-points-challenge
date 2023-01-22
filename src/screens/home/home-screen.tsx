import React from 'react';
import { FlatList, View } from 'react-native';

import { styles } from './home-screen-styles';
import { ProductsListItem } from './products-list-item';
import { FilterTypes, useHome } from './use-home';

import { Button, Card, Text } from '../../components';
import { Colors } from '../../constants/colors';
import { strings } from '../../constants/strings';
import { formatNumber } from '../../helpers';

const DEFAULT_USER_NAME = 'Ruben Rodriguez';
const DEFAULT_POINTS_SUFFIX = 'pts';

export const HomeScreen = () => {
  const {
    products,
    totalPoints,
    handlePressItem,
    currentDataMonth,
    handleFilterChange,
    showFiltersButtons,
  } = useHome();

  return (
    <View style={styles.container}>
      <Text title bold>
        {strings.Home.greetings}
      </Text>
      <Text subTitle>{DEFAULT_USER_NAME}</Text>
      <View style={styles.section}>
        <Text subTitle bold color={Colors.textTertiary}>
          {strings.Home.yourPoints}
        </Text>

        <View style={[styles.section, styles.monthsPointsContainer]}>
          <Card>
            <Text
              color={Colors.textSecondary}
              styles={styles.currentDataMonthLabel}
              title
              bold>
              {currentDataMonth}
            </Text>
            <View style={styles.totalPointsContainer}>
              <Text xLargeText bold color={Colors.textSecondary}>
                {`${formatNumber(totalPoints)} ${DEFAULT_POINTS_SUFFIX}`}
              </Text>
            </View>
          </Card>
        </View>
      </View>
      <View style={styles.section}>
        <Text subTitle bold color={Colors.textTertiary}>
          {strings.Home.yourPointsFlow}
        </Text>
        <View style={styles.section}>
          <FlatList
            data={products}
            renderItem={({ item }) => (
              <ProductsListItem item={item} onPress={handlePressItem} />
            )}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.productsListContainer}
            style={styles.productsList}
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        {showFiltersButtons ? (
          <Button
            title={strings.Home.allButton}
            onPress={() => handleFilterChange(FilterTypes.ALL)}
          />
        ) : (
          <>
            <Button
              title={strings.Home.earnedPointsButton}
              onPress={() => handleFilterChange(FilterTypes.BY_EARNED_POINTS)}
              flex
            />
            <Button
              title={strings.Home.redeemedPointsButton}
              onPress={() => handleFilterChange(FilterTypes.BY_REDEEMED_POINTS)}
              flex
            />
          </>
        )}
      </View>
    </View>
  );
};
