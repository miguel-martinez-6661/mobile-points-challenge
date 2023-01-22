import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { styles } from './home-screen-styles';
import { Product } from '../../types';
import { Text } from '../../components';
import { Colors } from '../../constants/colors';
import { formatDate, formatNumber } from '../../helpers';

interface ProductsListItemProps {
  item: Product;
  onPress?: (item: Product) => void;
}

export const ProductsListItem = ({ item, onPress }: ProductsListItemProps) => {
  return (
    <TouchableOpacity
      style={styles.productsListItem}
      onPress={() => onPress?.(item)}>
      <Image
        source={{ uri: item.image }}
        style={styles.productsListItemImage}
      />
      <View style={styles.productsListItemName}>
        <Text subTitle bold>
          {item.product}
        </Text>
        <Text color={Colors.textTertiary}>
          {formatDate(new Date(item.createdAt))}
        </Text>
      </View>
      <View style={styles.productsListItemPoints}>
        <Text
          color={item.is_redemption ? Colors.error : Colors.success}
          subTitle
          bold>
          {item.is_redemption ? '-' : '+'}
        </Text>
        <Text subTitle bold styles={styles.productsListItemPointLabel}>
          {formatNumber(item.points)}
        </Text>
        <Text subTitle bold>
          {'>'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
