import React from 'react';
import { View } from 'react-native';
import { Button } from '../../components';
import { strings } from '../../constants/strings';
import { styles } from './home-screen-styles';
import { FilterTypes } from './use-home';

interface ButtonSectionProps {
  showFiltersButtons: boolean;
  onFilterChange: (filterType: FilterTypes) => void;
}

export const ButtonSection = ({
  showFiltersButtons,
  onFilterChange,
}: ButtonSectionProps) => {
  return (
    <View style={styles.buttonContainer}>
      {showFiltersButtons ? (
        <Button
          title={strings.Home.allButton}
          onPress={() => onFilterChange(FilterTypes.ALL)}
        />
      ) : (
        <>
          <Button
            title={strings.Home.earnedPointsButton}
            onPress={() => onFilterChange(FilterTypes.BY_EARNED_POINTS)}
            flex
          />
          <Button
            title={strings.Home.redeemedPointsButton}
            onPress={() => onFilterChange(FilterTypes.BY_REDEEMED_POINTS)}
            flex
          />
        </>
      )}
    </View>
  );
};
