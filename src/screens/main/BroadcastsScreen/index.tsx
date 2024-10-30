import React, {useContext, useEffect, useState} from 'react';

import {
  FlatList,
  ImageBackground,
  ListRenderItem,
  Platform,
  Text,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {ProductHeaderMemoized} from 'components/products-header';
import {COLORS} from 'shared';

import {styles} from './style';
import {CustomLoading} from 'common/custom-loading';
import {t} from 'shared/localization';
import {AppContext} from 'shared/store';

type SportEvent = {
  id: number;
  liga: string;
  date: string;
  time: string;
  team1: string;
  team2: string;
};

interface BroadcastsScreenProps {}

export const BroadcastsScreen: React.FC<BroadcastsScreenProps> = () => {
  const context = useContext(AppContext);
  const appLang = context?.appLang;
  const [isLoading, setIsLoading] = useState(true);
  const [broadcasts, setBroadcasts] = useState<SportEvent[]>([]);

  const fetchBroadCasts = async () => {
    setIsLoading(true);
    try {
      let response = await fetch(
        'https://boomboomsport.website/broadcasts.php',
      );

      if (response.ok) {
        let data = await response.json();
        return data;
      }
    } catch (error) {
      console.log('Error fetching reservation', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBroadCasts().then(data => {
      setBroadcasts(data);
    });
  }, []);

  const renderItem: ListRenderItem<SportEvent> = ({item}) => {
    return (
      <View style={styles.cardContainer}>
        {!!item.liga && <Text style={styles.cardHeader}>{item.liga}</Text>}
        <ImageBackground
          style={styles.cardContent}
          source={require('@Shared/assets/images/broadcast_event.png')}>
          <View style={styles.teams}>
            <Text style={styles.teamText}>{item.team1}</Text>
            <Text style={styles.teamText}>-</Text>
            <Text style={styles.teamText}>{item.team2}</Text>
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.timeText}>{item.date}</Text>
            <Text style={styles.timeText}>{item.time}</Text>
          </View>
        </ImageBackground>
      </View>
    );
  };

  const renderListHeader = () => {
    return (
      <View style={styles.headerContainer}>
        {Platform.OS === 'ios' && (
          <View
            style={{
              backgroundColor: COLORS.primary,
              height: 1000,
              position: 'absolute',
              top: -1000,
              left: 0,
              right: 0,
            }}
          />
        )}
        <ProductHeaderMemoized
          wrapperStyle={{marginBottom: 32}}
          logo={t.Broadcasts}
        />
      </View>
    );
  };

  const {top} = useSafeAreaInsets();
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={broadcasts}
        renderItem={renderItem}
        ListHeaderComponent={renderListHeader}
        keyExtractor={(item, idx) => idx.toString()}
        contentContainerStyle={[
          styles.flatListContent,
          {marginTop: Platform.OS === 'ios' ? top : 0},
        ]}
      />
      {isLoading && <CustomLoading />}
    </View>
  );
};
