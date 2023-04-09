import React, { useEffect } from 'react';
import { AppView, AppImage, AppText, TouchableView,AppNavigation } from '../../common';
import { getThemeColor } from '../../common/utils/colors';
import { CustomHeader, ScrollableContainer } from '../../components';
import { programs } from '../../data/dataArrays';
import { GetProgExercisesData } from '../../data/MockDataAPI';
import { FlatList } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const programDetails = (props) => {
  const {
    item
  } = props;

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const HeaderItem = (title, subtitle) => {

    return (<AppView center height={10} width={30}>

      <AppText bold size={7} color={getThemeColor('3')}>{title}</AppText>
      <AppText bold size={7} color={getThemeColor('1')}>{subtitle}</AppText>

    </AppView>)
  }

  const ExerciseItem = (data) => {
    return (
      <TouchableView center onPress={() => AppNavigation.push({
        name: 'exerciseDetails',
        passProps: {
          item: data,
        },
      })}
        height={17} margin={5} width={42}>
        <AppImage resizeMode="stretch" source={{ uri: data.photo_url }} height={15} width={40} />
        <AppText center numberOfLines={1} color={'gray'}>{data.name}</AppText>
      </TouchableView>
    )
  }
  return (
    <ScrollableContainer header={false} flex centerX>
      <CustomHeader centerTitle title='Program detail' />
      <AppImage
        source={{ uri: item.photo_url }}
        resizeMode="stretch"
        center
        width={100}
        height={30}
      >
        <AppView width={100}
          height={30} style={{ position: 'absolute', opacity: 0.4 }} backgroundColor='black' />
        <AppText bold size={8} color={getThemeColor('4')}>{item.name}</AppText>
      </AppImage>
      <AppView spaceBetween width={100} center backgroundColor='#f2f2f2' row height={10}>
        {HeaderItem('Target', 'Weight Loss')}
        {HeaderItem('Exercises', item.exercises.length)}
        {HeaderItem('Duration', item.duration)}
      </AppView>
      <FlatList
        data={GetProgExercisesData(item)}
        renderItem={(data) => ExerciseItem(data.item)}
        keyExtractor={(item) => item.id}
        numColumns={2}
        style={{ alignSelf: 'center', margin: '5%', width: '95%' }}
      />
    </ScrollableContainer>
  );

};

export default programDetails;