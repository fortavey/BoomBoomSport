import React, {useContext} from 'react';

import {
  Text,
  FlatList,
  Pressable,
  ImageBackground,
  SafeAreaView,
} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList, RootStackParams} from 'navigation/root/interface';

import {styles} from './style';
import {ProductHeaderMemoized} from 'components/products-header';
import {t} from 'shared/localization';
import {AppContext} from 'shared/store';

type EventsScreenType = NativeStackScreenProps<RootStackParamList, 'Events'>;

interface EventItem {
  label: string;
  date: string;
  time: string;
  route: any;
}

export const EventsScreen: React.FC<EventsScreenType> = ({navigation}) => {
  const context = useContext(AppContext);

  const appLang = context?.appLang;
  const events = [
    {
      label: t.event_1,
      date: '27.10.24',
      time: '19.00',
      route: RootStackParams.EventOne,
    },
    {
      label: t.event_2,
      date: '28.10.24',
      time: '16.00',
      route: RootStackParams.EventTwo,
    },
    {
      label: t.event_3,
      date: '29.10.24',
      time: '19.00',
      route: RootStackParams.EventThree,
    },
    {
      label: t.event_4,
      date: '29.10.24',
      time: '21.00',
      route: RootStackParams.EventFour,
    },
  ];

  const renderItem = ({item}: {item: EventItem}) => (
    <Pressable
      onPress={() => navigation.navigate(item.route)}
      style={styles.eventCardContainer}>
      <Text style={styles.labelText}>{item.label}</Text>
      <ImageBackground
        style={styles.eventCardContent}
        source={require('shared/assets/images/event_card_bg.png')}
        resizeMode="stretch">
        <Text style={styles.eventTimeText}>{item.date}</Text>
        <Text style={styles.eventTimeText}>{item.time}</Text>
      </ImageBackground>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <FlatList
        data={events}
        renderItem={renderItem}
        ListHeaderComponent={
          <ProductHeaderMemoized
            logo={t.Events}
            wrapperStyle={{marginBottom: 64, paddingHorizontal: 16}}
          />
        }
      />
    </SafeAreaView>
  );
};
