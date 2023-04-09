import React, { useEffect } from 'react';
import { AppView, CatItem } from '../../common';
import { getThemeColor } from '../../common/utils/colors';
import { CustomHeader } from '../../components';
import { workouts } from '../../data/dataArrays';
import { FlatList } from 'react-native';

const Workouts = (passProps) => {

const {
    WorkoutsType
  } = passProps;

  useEffect(() => {
    console.log('WorkoutsType:'+WorkoutsType);
  }, []);

  return (
    <AppView flex centerX>
      <CustomHeader centerTitle title={WorkoutsType===0?'Quick':'Advanced'} />
      <FlatList
        data={workouts[WorkoutsType]}
        renderItem={(data) => <CatItem key={data.item.id}
          item={data.item} />}
        keyExtractor={(item) => item.id}
        numColumns={1}
        style={{ width: '110%' }}
        contentContainerStyle={{ alignItems: 'center' }}
      />
    </AppView>
  );
};

export default Workouts;