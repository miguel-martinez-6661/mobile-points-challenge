import React, { useState } from 'react';
import { Image as RNImage, View } from 'react-native';
import { ImageIcon } from '../../../assets/icons';
import { styles } from './image-styles';

interface ImagesProps {
  source: string;
  style?: any;
}

export const Image = ({ source, style }: ImagesProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && (
        <View style={styles.imagePlaceholder}>
          <ImageIcon width={'50%'} height="50%" />
        </View>
      )}

      {source && (
        <RNImage
          source={{ uri: source }}
          onLoad={() => setIsLoaded(true)}
          style={style}
        />
      )}
    </>
  );
};
