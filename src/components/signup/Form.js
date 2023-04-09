import React, { useState } from 'react';
import {
  AppView,
  AppText,
  AppButton,
  AppSpinner,
  AppIcon,
  AppNavigation,
} from '../../common';
import { getThemeColor } from '../../common/utils/colors';
import Field from '../Field';
import TouchableView from '../../common/TouchableAniamtedView';

const Form = ({ injectFormProps, isSubmitting, handleSubmit, onSkip }) => {
  const [istermsAccepted, setIsTermsAccepted] = useState(false);

  return (
    <AppView width={90} marginTop={15} centerX paddingBottom={5}>
      <Field
        color={getThemeColor('4')}
        elevation={0}
        {...injectFormProps('username')}
        placeholder={'user name'}
        leftItems={
          <AppIcon name="user" type="ant" color={getThemeColor('4')} marginLeft={5} />
        }
      />
      <Field
        color={getThemeColor('4')}
        {...injectFormProps('email')}
        elevation={0}
        placeholder={'email'}
        leftItems={
          <AppIcon name="email" type="fontisto" color={getThemeColor('4')} marginLeft={5} />
        }
      />

      <Field
        color={getThemeColor('4')}
        {...injectFormProps('mobile')}
        elevation={0}
        placeholder={'mobile'}
        leftItems={
          <AppIcon name="mobile1" type="ant" color={getThemeColor('4')} marginLeft={5} />
        }
      />

      <Field
        color={getThemeColor('4')}
        {...injectFormProps('password')}
        elevation={0}
        placeholder={'password'}
        secure={true}
        showSecureEye
        leftItems={
          <AppIcon name="lock" type="evil" color={getThemeColor('4')} marginLeft={5} />
        }
      />

      <AppButton
        onPress={() => {
          if (!isSubmitting) {
            handleSubmit();
          }
        }}
        stretch
        backgroundColor={getThemeColor('4')}
        marginTop={10}
        height={7}
        borderRadius={50}
        processing={isSubmitting}>
        {isSubmitting ? (
          <AppSpinner color={getThemeColor('2')} />
        ) : (
            <AppText color={getThemeColor('2')} size={7}>
              {'Sign in'}
            </AppText>
          )}
      </AppButton>

      <AppButton
        onPress={() => {
          if (!isSubmitting) {
            AppNavigation.navigateToRegister();
          }
        }}
        stretch
        backgroundColor='transparent'
        borderWidth={1}
        borderColor={getThemeColor('4')}
        marginTop={10}
        height={7}
        borderRadius={50}
      >
        <AppText color={getThemeColor('4')} size={7}>
          {'Create new account'}
        </AppText>
      </AppButton>

      <AppView row spaceBetween marginTop={30} width={80} height={5}>

        <AppText color={getThemeColor('4')} size={7} onPress={() => {
          if (!isSubmitting) {
            onSkip();
          }
        }}>
          {'Skip'}
        </AppText>

        <AppText color={getThemeColor('4')} size={7}>
          {'Forget Password?'}
        </AppText>

      </AppView>

    </AppView>
  );
};

export default Form;
