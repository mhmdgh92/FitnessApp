import React, { useCallback, useEffect } from 'react';
import { AppText, AppView, AppImage, TouchableView, AppNavigation } from '..';
import { getThemeColor } from '../utils/colors';

const CategoryItem = (props) => {
  const {
    item
  } = props;

  return (
    <TouchableView centerY onPress={() => AppNavigation.push({
      name: 'exerciseDetails',
      passProps: {
        item: item,
      },
    })} marginHorizontal={props.marginHorizontal}
      margin={3} elevation={3} borderRadius={20} height={32.5} width={90}>
      <AppImage center marginTop={-3} borderRadius={20} backgroundColor='white'
        height={23} width={90}
        source={{ uri: item.photo_url }}>
      </AppImage>
      <AppText margin={2} numberOfLines={1} size={8} center bold color={getThemeColor('1')}>  {item.name}</AppText>
    </TouchableView>
  );
};

export default CategoryItem;
