import React, { useCallback } from 'react';
import { AppIcon, AppButton, AppNavigation, AppView } from '../../common';
import { Header } from '..';
import { getThemeColor } from '../../common/utils/colors';
const CustomHeader = ({
  title,
  showMenu,
  SearchFun,
  showRight
}) => {

  return (
    <Header
      color={getThemeColor('4')}
      backgroundColor={getThemeColor('1')}
      title={title}
      showMenu={showMenu}
      rightItems={showRight &&
        <AppIcon onPress={() => SearchFun()} size={9} marginTop={7} name="search1" type="ant" />
      }
    />
  );
};

export default CustomHeader;
