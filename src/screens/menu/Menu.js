import React from 'react';
import { Linking } from 'react-native'
import { ScrollableContainer } from '../../components/';
import Item from '../../components/menu/Item';
import { AppNavigation, AppView, AppImage } from '../../common';
import { AuthRepo } from '../../repo';
import { share } from '../../utils/Share';
const authRepo = new AuthRepo();
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../actions/types';

const Menu = () => {
  const dispatch = useDispatch();

  const logout = async () => {
    dispatch({ type: LOGOUT });
    await new AuthRepo().logoutPrincipalUser();
    AppNavigation.navigateToAuth();
  };


  return (
    <ScrollableContainer header={false}>


      <AppImage center resizeMode="contain" marginTop={15} height={15} width={85}
        source={require('../../assets/imgs/logo.png')}></AppImage>

      <AppView marginTop={25} />

      <Item
        onPress={() => AppNavigation.navigateToHome()}
        title={'Home'} name="home" type="ant"
      />

      {/*
      <HomeItem title={'Blog'} subTitle={'Informative Posts & News'} iconName={'post-outline'} iconType={'material-community'} />
      <HomeItem title={'Quotes'} subTitle={'Best motivational gym quotes'} iconName={'comment-quotes'} iconType={'foundation'} />
      */}


      <Item
        onPress={() => AppNavigation.push({ name: 'workouts' })}
        title={'Workouts'} name="calendar" type="ant"
      />
      <Item
        onPress={() => AppNavigation.push({ name: 'trainings' })}
        title={'Trainings'} name="weight-lifter" type="material-community"
      />
      <Item
        onPress={() => share("https://play.google.com/store/apps/details?id=com.mhmdgh.fitnessapp")}
        title={'Share'} name="sharealt" type="ant"
      />

      <Item
        onPress={() => AppNavigation.push({ name: 'aboutus' })}
        title={'About'} name="page" type="foundation"
      />

      <Item
        onPress={() => Linking.openURL('mailto:mohammedghabyen@gmail.com')}
        title={'Contact'} name="mail" type="ant"
      />
      <Item
        onPress={() => logout()}
        title={'Logout'} name="logout" type="ant"
      />

    </ScrollableContainer>
  );
};

export default Menu;
