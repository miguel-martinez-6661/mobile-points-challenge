import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './product-details-screen-styles';
import { useProductDetails } from './use-product-details';

import { Button, Card, Text } from '../../components';
import { strings } from '../../constants/strings';
import { Colors } from '../../constants/colors';
import { formatDate, formatNumber } from '../../helpers';

export const ProductDetailsScreen = () => {
  const { selectedProduct, goBack } = useProductDetails();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text largeText bold>
          {selectedProduct?.product as string}
        </Text>
      </View>
      <View style={styles.detailsContainer}>
        <Card styles={styles.imageContainer} color={Colors.background}>
          <Image
            source={{ uri: selectedProduct?.image }}
            style={styles.detailsImage}
          />
        </Card>

        <Text subTitle bold color={Colors.textTertiary} styles={styles.section}>
          {`${strings.Details.productDetails}:`}
        </Text>
        <Text title bold styles={styles.section}>
          {`${strings.Details.purchasedOn} ${formatDate(
            new Date(selectedProduct?.createdAt || new Date()),
          )}`}
        </Text>
        <Text subTitle bold color={Colors.textTertiary} styles={styles.section}>
          {`${strings.Details.purchasePointsEarned}:`}
        </Text>
        <Text largeText bold styles={styles.section}>
          {`${formatNumber(selectedProduct?.points || 0)} ${
            strings.Details.points
          }`}
        </Text>
        <Button title={strings.Details.acceptButton} onPress={goBack} />
      </View>
    </View>
  );
};
