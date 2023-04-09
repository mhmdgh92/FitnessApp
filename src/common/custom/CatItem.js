import React, { useCallback, useEffect } from 'react';
import { AppText, AppView, AppImage, TouchableView, AppNavigation } from '..';
import { getThemeColor } from '../utils/colors';

const CatItem = (props) => {
  const {
    item
  } = props;

  const OnClick = useCallback(() => {

    AppNavigation.push({
      name: 'programs',
      passProps: {
        item: item,
      },
    })
  }, []);

  return (
    <TouchableView
      onPress={() => OnClick()}
      center
      width={100}
      height={30}
      marginTop={2}
      backgroundColor='black'
    >
      <AppImage
        source={{ uri: item.photo_url }}
        resizeMode="stretch"
        center
        width={100}
        height={30}
        style={{ position: 'absolute', opacity: 0.4 }}
      />
      <AppView centerX
        style={{ position: 'absolute', bottom: 0, opacity: 0.4 }} backgroundColor='black' width={100} height={7.5} />
      <AppText bold size={10} style={{ position: 'absolute', bottom: '5%' }}
        color={getThemeColor('4')}>{item.name}</AppText>
    </TouchableView>
  );
};

export default CatItem;
