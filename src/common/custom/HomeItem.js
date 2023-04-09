import React from 'react';
import { AppImage, AppText, TouchableView,AppNavigation } from '..';
import { getThemeColor } from '../utils/colors';
const HomeItem = (props) => {

  const {
    title, subTitle, backIMG
  } = props;
  return (
    <TouchableView
      onPress={() => AppNavigation.push({
        name: title.toLowerCase()
      })}
      center
      width={100}
      height={35}
      marginTop={1}
      backgroundColor='black'
    >
      <AppImage
        source={backIMG}
        resizeMode="stretch"
        center
        width={100}
        height={35}
        style={{ position: 'absolute', opacity: 0.4 }}
      >
      </AppImage>
      <AppText bold size={10} color={'white'}>{title}</AppText>
      <AppText size={8} color={getThemeColor('3')}>{subTitle}</AppText>
    </TouchableView>
  )
}

export default HomeItem;
