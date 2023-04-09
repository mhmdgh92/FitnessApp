import React, { useEffect } from 'react';
import { AppView, AppImage, AppIcon, HomeItem, AppText, TouchableView, CategoryItem } from '../../common';
import { getThemeColor } from '../../common/utils/colors';
import { CustomHeader } from '../../components';
import SplashScreen from 'react-native-splash-screen';

const Workouts = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);


  return (
    <AppView flex centerX>
      {false && <AppImage width={100} height={100} style={{ position: 'absolute' }}
        source={require('../../assets/imgs/samples/0.jpg')} />}

      <CustomHeader title='Workouts'/>

      <CategoryItem title='Quick' subTitle='Simple and quick workouts'
        IMG={require('../../assets/imgs/training1.jpg')} WorkoutsType={0} />

      <CategoryItem title='Advanced' subTitle='Advanced workouts for specific levels'
        IMG={require('../../assets/imgs/training7.jpg')} WorkoutsType={1}/>

    </AppView>
  );
};

export default Workouts;