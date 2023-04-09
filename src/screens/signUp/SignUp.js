import React, { useEffect, useCallback } from 'react';
import { AppView, AppScrollView, AppImage, AppText, AppNavigation, AppForm } from '../../common';
import SplashScreen from 'react-native-splash-screen';
import { } from '../../components';
import Form from '../../components/signup/Form';
import { AuthValidation } from '../../validation';
import { AuthRepo } from '../../repo';
import { getThemeColor } from '../../common/utils/colors';
const authRepo = new AuthRepo();
const authValidation = new AuthValidation();

const SignUp = () => {

  useEffect(() => {
    SplashScreen.hide();
    console.log('useEffect Sign Up');
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
      let Samplevalues = { "username": "asdasd", "email":"sample@gmail.com" ,"mobile":"123456789",
"password": "123123","lang":"en" };
    await authRepo.signIn(Samplevalues);
  }, []);

  return (
    <AppView flex centerX backgroundColor={getThemeColor('1')}>

      <AppImage  center style={{opacity:0.1,position:'absolute'}} resizeMode="stretch" flex
        source={require('../../assets/imgs/signback.jpg')}></AppImage>
      <AppImage center resizeMode="contain" marginTop={30} height={15} width={70}
        source={require('../../assets/imgs/logo.png')}></AppImage>

      <AppForm
        validationSchema={authValidation.signIn}
        schema={{
          username: 'asdasd',
          email: 'sample@gmail.com',
          mobile: '123456789',
          password: '123123'
        }}
        render={renderForm}
        {...{ onSubmit }}
      />
    </AppView>
  );
};

export default SignUp;