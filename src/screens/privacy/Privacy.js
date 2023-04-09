import React from 'react';
import { AppView, AppImage, AppText } from '../../common';
import { ScrollableContainer } from '../../components';

const Privacy = () => {

  return (
    <ScrollableContainer title={'Privacy & Terms'} paddingHorizontal={10}>
      <AppView stretch center>
        <AppText size={8} marginTop={10} color='darkgrey'>FitAPP is a mobile application
        sample that provide coaching and training services, made
        by me, Mohammed Ghabyen.
</AppText>

        <AppText size={8} marginTop={10} color='darkgrey'>
          This application is developed using React-Native.
</AppText>

        <AppText size={8} marginTop={10} color='darkgrey'>I hope you find it useful and a good demo for react native apps.
</AppText>

      </AppView>
    </ScrollableContainer>
  );
};

export default Privacy;
