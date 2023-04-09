import React, { useCallback, useEffect } from 'react';
import { AppText, AppView, AppImage, TouchableView, AppNavigation } from '..';
import { getThemeColor } from '../utils/colors';

const CategoryItem = (props) => {
  const {
    title, subTitle, IMG, NavMenu, WorkoutsType
  } = props;

  return (
    <TouchableView centerY onPress={() => AppNavigation.push({
      name: 'category',
      passProps: {
        WorkoutsType: WorkoutsType,
      },
    })} marginHorizontal={props.marginHorizontal}
      margin={3} elevation={3} borderRadius={20} height={32.5} width={90}>
      <AppImage center marginTop={-3} borderRadius={20} backgroundColor='white'
        height={23} width={90}
        source={IMG}>
      </AppImage>
      <AppText margin={1} numberOfLines={1} size={8} center bold color={getThemeColor('1')}>  {title}</AppText>
      <AppText margin={1} size={6} center color={getThemeColor('1')} >   {subTitle}</AppText>
    </TouchableView>
  );
};

export default CategoryItem;
