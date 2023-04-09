import React, { useCallback, useEffect } from 'react';
import { AppText, AppView, AppImage, TouchableView, AppNavigation } from '..';
import { getThemeColor } from '../utils/colors';

const ProgItem = (props) => {
  const {
    item
  } = props;

  const OnClick = useCallback(() => {
    AppNavigation.push({
      name: 'programDetails',
      passProps: {
        item: item,
      },
    })
  }, []);

  return (
    <TouchableView
      onPress={() => OnClick()}
      width={100}
      height={30}
      center
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
      <AppView
        style={{ position: 'absolute', bottom: 0, opacity: 0.4 }} backgroundColor='black' width={100}
        height={12.5} />

      <AppView
        style={{ position: 'absolute', bottom: 0 }} width={90}
        height={12} >
        <AppText size={6} color={getThemeColor('3')}>Wegiht Loss</AppText>
        <AppText marginTop={2} bold size={7} color={getThemeColor('4')}>{item.name}</AppText>
        <AppText marginTop={2} size={6} color={'silver'}>{item.duration}</AppText>
      </AppView>
    </TouchableView>
  );
};

export default ProgItem;
