import React, {useContext} from 'react';

import {Image, Platform, ScrollView, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ProductHeaderMemoized} from 'components/products-header';
import {RootStackParamList} from 'navigation/root/interface';
import {COLORS} from 'shared';

import {styles} from './style';
import {t} from 'shared/localization';
import {AppContext} from 'shared/store';

type SuccessScreenType = NativeStackScreenProps<RootStackParamList, 'Success'>;

export const SuccessScreen: React.FC<SuccessScreenType> = ({route}) => {
  const context = useContext(AppContext);
  const appLang = context?.appLang;

  const {isOrder} = route.params;
  const {qrCode} = route.params;

  const {top} = useSafeAreaInsets();
  return (
    <ScrollView
      contentContainerStyle={[styles.scrollContent, {marginTop: top}]}>
      {Platform.OS === 'ios' && (
        <View
          style={{
            backgroundColor: COLORS.dark_000,
            height: 1000,
            position: 'absolute',
            top: -1000,
            left: 0,
            right: 0,
          }}
        />
      )}
      <ProductHeaderMemoized showLogo={false} />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={styles.center}>
          {isOrder ? (
            <View style={styles.qrContainer}>
              <Image
                source={{uri: qrCode}}
                style={{width: 160, height: 200}}
                resizeMode="contain"
              />
            </View>
          ) : (
            <Image
              source={require('@Shared/assets/images/reservation_success.png')}
              style={{width: 200, height: 200}}
            />
          )}
        </View>
        <Text style={[styles.descText]}>
          {isOrder ? t.Showthiscodetothewaiter : t.tableRevered}
        </Text>
      </View>
    </ScrollView>
  );
};
