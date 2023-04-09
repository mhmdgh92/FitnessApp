import { Navigation } from 'react-native-navigation';
import regterScreens from './screens';
import { AppNavigation } from './common';
import appLaunchConfig from './utils/AppLaunchConfig';
import SplashScreen from 'react-native-splash-screen';

export default () => {
  Navigation.events().registerAppLaunchedListener(async () => {
    AppNavigation.setNavigationDefaultOptions();
    SplashScreen.hide();
    regterScreens();
    await appLaunchConfig();
    AppNavigation.navigateToAuth();
  });
};
