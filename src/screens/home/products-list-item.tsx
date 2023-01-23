import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { styles } from './home-screen-styles';
import { Product } from '../../types';
import { Text, Image } from '../../components';
import { Colors } from '../../constants/colors';
import { formatDate, formatNumber } from '../../helpers';

interface ProductsListItemProps {
  item: Product;
  onPress?: (item: Product) => void;
}

const PLUS = '+';
const MINUS = '-';

export const ProductsListItem = ({ item, onPress }: ProductsListItemProps) => {
  return (
    <TouchableOpacity
      style={styles.productsListItem}
      onPress={() => onPress?.(item)}>
      <View style={styles.productsListItemImageContainer}>
        <Image source={item.image} style={styles.productsListItemImage} />
      </View>
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
          {item.is_redemption ? MINUS : PLUS}
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
