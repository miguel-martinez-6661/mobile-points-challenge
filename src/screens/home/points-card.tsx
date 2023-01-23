import React from 'react';
import { View } from 'react-native';
import { styles } from './home-screen-styles';
import { Card, Text } from '../../components';
import { Colors } from '../../constants/colors';
import { strings } from '../../constants/strings';

interface PointsCardProps {
  month: string;
  totalPoints: string;
}

export const PointsCard = ({ month, totalPoints }: PointsCardProps) => {
  return (
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
            {month}
          </Text>
          <View style={styles.totalPointsContainer}>
            <Text xLargeText bold color={Colors.textSecondary}>
              {totalPoints}
            </Text>
          </View>
        </Card>
      </View>
    </View>
  );
};
