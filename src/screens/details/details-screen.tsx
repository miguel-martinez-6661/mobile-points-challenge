import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import { styles } from './details-screen-styles';
import { Button, Card, Text } from '../../components';
import { AppNavigationParamList, Product } from '../../types';
import { strings } from '../../constants/strings';
import { Colors } from '../../constants/colors';
import { formatDate } from '../../helpers';

export const DetailsScreen = () => {
  const { goBack } = useNavigation();
  const { params } = useRoute<RouteProp<AppNavigationParamList>>();
  const [selectedProduct, setSelectedProduct] = useState<Product>();

  useEffect(() => {
    setSelectedProduct(params?.item);
  }, [params]);

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

        <Text subTitle bold color={Colors.textTertiary}>
          {`${strings.Details.productDetails}:`}
        </Text>
        <Text title bold>
          {`${strings.Details.purchasedOn} ${formatDate(
            new Date(selectedProduct?.createdAt || new Date()),
          )}`}
        </Text>
        <Text subTitle bold color={Colors.textTertiary}>
          {`${strings.Details.purchasePointsEarned}:`}
        </Text>
        <Text largeText bold>
          {`${selectedProduct?.points} ${strings.Details.points}`}
        </Text>
        <Button title={strings.Details.acceptButton} onPress={goBack} />
      </View>
    </View>
  );
};
