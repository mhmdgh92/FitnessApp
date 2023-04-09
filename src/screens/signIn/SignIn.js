import React, { useEffect, useCallback } from 'react';
import { AppView, AppScrollView, AppImage, AppText, AppNavigation, AppForm } from '../../common';
import SplashScreen from 'react-native-splash-screen';
import { } from '../../components';
import Form from '../../components/signin/Form';
import { AuthValidation } from '../../validation';
import { AuthRepo } from '../../repo';
import { getThemeColor } from '../../common/utils/colors';
const authRepo = new AuthRepo();
const authValidation = new AuthValidation();

const SignIn = () => {

  useEffect(() => {
    SplashScreen.hide();
    console.log('useEffect Sign in');
  }, []);

  const renderForm = useCallback(props => {
    return <Form {...props} onSkip={onSkip} />;
  }, []);

  const onSubmit = useCallback(async (values, { setSubmitting }) => {
    console.log('values:' + JSON.stringify(values));
    await authRepo.signIn(values);
    setTimeout(() => {
      setSubmitting(false);
    }, 200);

  }, []);

  const onSkip = useCallback(async () => {
    let Samplevalues = { "username": "asdasd", "password": "123123" };
    await authRepo.signIn(Samplevalues);
  }, []);

  return (
    <AppView flex centerX backgroundColor={getThemeColor('1')}>

      <AppImage center style={{ opacity: 0.1, position: 'absolute' }} resizeMode="stretch" flex
        source={require('../../assets/imgs/signback.jpg')}></AppImage>
      <AppImage center resizeMode="contain" marginTop={30} height={15} width={70}
        source={require('../../assets/imgs/logo.png')}></AppImage>
      <AppForm
        validationSchema={authValidation.signIn}
        schema={{
          username: 'asdasd',
          password: '123123',
        }}
        render={renderForm}
        {...{ onSubmit }}
      />
    </AppView>
  );
};

export default SignIn;