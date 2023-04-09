import React from 'react';
import {TouchableView, AppView, AppIcon, AppText} from '../../common';
import { getThemeColor } from '../../common/utils/colors';

const Item = ({name, type, title, onPress}) => {
  return (
    <TouchableView
      marginVertical={2}
      {...{onPress}}
      stretch
      padding={5}
      height={6}
      row
      spaceBetween>
      <AppView row>
        <AppIcon color={getThemeColor('2')} marginHorizontal={5} size={9} {...{name}} {...{type}} />
        <AppText size={7} color={getThemeColor('2')}>
          {title}
        </AppText>
      </AppView>
    </TouchableView>
  );
};

export default Item;
