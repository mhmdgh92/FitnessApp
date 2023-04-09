import React, { useEffect } from 'react';
import { AppView, AppImage, ExerciseItem } from '../../common';
import { CustomHeader } from '../../components';
import SplashScreen from 'react-native-splash-screen';
import { exercises } from '../../data/dataArrays';
import {FlatList} from 'react-native';

const Trainings = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);


  return (
    <AppView flex centerX>
      {false && <AppImage width={100} height={100} style={{ position: 'absolute' }}
        source={require('../../assets/imgs/samples/0.jpg')} />}

      <CustomHeader title='Trainings Videos Guides' />

      <FlatList
        data={exercises}
        renderItem={(data) => <ExerciseItem key={data.item.id} item={data.item} />}
        keyExtractor={(item) => item.id}
        numColumns={1}
        style={{ width: '110%' }}
        contentContainerStyle={{ alignItems: 'center' }}
      />

    </AppView>
  );
};

export default Trainings;