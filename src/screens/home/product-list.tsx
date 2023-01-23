import React from 'react';
import { FlatList, View } from 'react-native';
import { styles } from './home-screen-styles';
import { ProductsListItem } from './products-list-item';
import { Text } from '../../components';
import { Colors } from '../../constants/colors';
import { strings } from '../../constants/strings';
import { Product } from '../../types';

interface ProductListProps {
  data: Product[] | undefined;
  onItemPress: (item: any) => void;
}

export const ProductList = ({ data, onItemPress }: ProductListProps) => {
  return (
    <View style={styles.section}>
      <Text subTitle bold color={Colors.textTertiary}>
        {strings.Home.yourPointsFlow}
      </Text>
      <View style={styles.section}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <ProductsListItem item={item} onPress={onItemPress} />
          )}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.productsListContainer}
          style={styles.productsList}
        />
      </View>
    </View>
  );
};
