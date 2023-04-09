import React, { useEffect } from 'react';
import { AppView, AppImage, AppIcon, HomeItem } from '../../common';
import { getThemeColor } from '../../common/utils/colors';
import { CustomHeader, ScrollableContainer } from '../../components';
import SplashScreen from 'react-native-splash-screen';

const Home = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);


  return (
    <ScrollableContainer header={false} flex centerX>
      <CustomHeader showMenu title='Home' hideRight />
      <HomeItem title={'Workouts'} subTitle={'Training Programs'}
        backIMG={require('../../assets/imgs/training1.jpg')} />
      <HomeItem title={'Trainings'} subTitle={'Video Guides'}
        backIMG={require('../../assets/imgs/training2.jpg')} />
    </ScrollableContainer>
  );
};

export default Home;