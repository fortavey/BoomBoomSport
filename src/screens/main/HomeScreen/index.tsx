import React, {useContext} from 'react';

import {FlatList, ListRenderItem, View} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RouteItem} from 'components';
import {RootStackParamList, RootStackParams} from 'navigation/root/interface';
import {Logo} from 'shared/assets/svg';

import {styles} from './style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AppContext} from 'shared/store';
import {t} from 'shared/localization';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const context = useContext(AppContext);

  const appLang = context?.appLang;

  const routes = [
    {
      id: '2',
      title: t.Menu,
      destination: RootStackParams.Products,
    },
    {
      id: '3',
      title: t.TableReservation,
      destination: RootStackParams.Reservation,
    },
    {
      id: '4',
      title: t.Broadcasts,
      destination: RootStackParams.Broadcast,
    },
    {
      id: '5',
      title: t.Events,
      destination: RootStackParams.Events,
    },
    {
      id: '6',
      title: t.Account,
      destination: RootStackParams.Account,
    },
  ];
  const renderItem: ListRenderItem<any> = ({item}) => {
    return (
      <RouteItem
        route={item}
        onItemPress={() => navigation.navigate(item.destination)}
        wrapperStyle={styles.itemSpace}
      />
    );
  };

  const {top} = useSafeAreaInsets();

  const listHeaderComponent = () => (
    <View style={{backgroundColor: 'black', alignItems: 'center', padding: 24}}>
      <Logo />
    </View>
  );

  return (
    <FlatList
      data={routes}
      renderItem={renderItem}
      ListHeaderComponent={listHeaderComponent}
      ListHeaderComponentStyle={styles.listHeaderStyle}
      keyExtractor={item => item.id}
      contentContainerStyle={[styles.flatListContent, {marginTop: top}]}
    />
  );
};
