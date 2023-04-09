import React, { useEffect } from 'react';
import { AppView, AppImage, AppText, ProgItem, TouchableView } from '../../common';
import { getThemeColor } from '../../common/utils/colors';
import { CustomHeader, ScrollableContainer } from '../../components';
import { programs } from '../../data/dataArrays';
import { GetWorkoutsProgData } from '../../data/MockDataAPI';
import { FlatList } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const Program = (props) => {
  const {
    item
  } = props;

  useEffect(() => {
    SplashScreen.hide();
  }, []);


  return (
    <AppView flex centerX>
      <CustomHeader centerTitle title={item.name} />
      <FlatList
        data={GetWorkoutsProgData(item)}
        renderItem={(data) => <ProgItem key={data.item.id}
          item={data.item} />}
        keyExtractor={(item) => item.id}
        numColumns={1}
        style={{ width: '110%' }}
        contentContainerStyle={{ alignItems: 'center' }}
      />
    </AppView>
  );
};

export default Program;