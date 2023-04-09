import React, { useEffect, useState } from 'react';
import { AppView, AppImage, AppText, TouchableView } from '../../common';
import { getThemeColor } from '../../common/utils/colors';
import { CustomHeader, ScrollableContainer } from '../../components';
import { exercises } from '../../data/dataArrays';
import { GetProgExercisesData, GetExerciseBodyPartsData, GetExerciseEquipsData } from '../../data/MockDataAPI';
import { FlatList } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { WebView } from 'react-native-webview';

const ExerciseDetails = (props) => {
  const {
    item
  } = props;

  useEffect(() => {
    SplashScreen.hide();
  }, []);


  const HeaderItem = (title, subtitle) => {

    return (
      <AppView center height={10} width={30}>
        <AppText bold size={7} color={getThemeColor('1')}>{title}</AppText>
        <AppText bold size={7} color={getThemeColor('3')}>{subtitle}</AppText>
      </AppView>
    )
  }

  const BodyPartsDataComp = () => {
    let Data = GetExerciseBodyPartsData(item);
    let DataArr = [];
    Data.map(data =>
      DataArr.push(<AppText key={data.index} bold size={7} color={getThemeColor('3')}>{data.name}</AppText>))
    return DataArr;
  }

  const EquipmentsDataComp = () => {
    let Data = GetExerciseEquipsData(item);
    let DataArr = [];
    Data.map(data =>
      DataArr.push(<AppText key={data.index} bold size={7} color={getThemeColor('3')}>{data.name}</AppText>))
    return DataArr;
  }

  return (

    <AppView flex>
      <CustomHeader centerTitle title='Excercise details' />
      <AppView width={100} height={30}>
        <WebView style={{ height: '100%', width: '100%' }}
          source={{ uri: item.video }} />
      </AppView>
      <AppView spaceBetween width={100} center backgroundColor='#f2f2f2' row height={10}>
        {HeaderItem('Repeats', item.reps)}
        {HeaderItem('Groups', item.sets)}
        {HeaderItem('Rest', item.rest)}
      </AppView>

      <AppView margin={5} spaceBetween width={90}>
        <AppText bold size={8} color={getThemeColor('1')}>Equipments</AppText>
        {EquipmentsDataComp()}
      </AppView>

      <AppView margin={5} spaceBetween width={90}>
        <AppText bold size={8} color={getThemeColor('1')}>Body Parts</AppText>
        {BodyPartsDataComp()}
      </AppView>


    </AppView>
  );

};

export default ExerciseDetails;