import React, {useContext, useLayoutEffect, useState} from 'react';
import {ImageBackground, ScrollView} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from 'navigation/root/interface';
import {ProductHeaderMemoized} from 'components/products-header';
import {AppContext} from 'shared/store';

type EventFourScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'EventFour'
>;

const EVENT_IMG = require('shared/assets/images/event/ru/event_4.png');

export const EventFourScreen: React.FC<EventFourScreenProps> = ({}) => {
  const context = useContext(AppContext);

  const appLang = context?.appLang ?? 'en';

  const imageMap: {[key: string]: any} = {
    en: require('shared/assets/images/event/en/event_4_en.png'),
    ru: require('shared/assets/images/event/ru/event_4.png'),
    fr: require('shared/assets/images/event/fr/event_4_fr.png'),
    it: require('shared/assets/images/event/it/event_4_it.png'),
    es: require('shared/assets/images/event/es/event_4_es.png'),
    pl: require('shared/assets/images/event/pl/event_4_pl.png'),
    de: require('shared/assets/images/event/de/event_4_de.png'),
  };

  const [image, setImage] = useState(imageMap[appLang] || EVENT_IMG);

  useLayoutEffect(() => {
    setImage(imageMap[appLang] || EVENT_IMG);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appLang]);

  return (
    <ScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1}}>
      <ImageBackground source={image} resizeMode="cover" style={{flex: 1}}>
        <ProductHeaderMemoized
          wrapperStyle={{
            opacity: 0,
            marginTop: -7,
            paddingHorizontal: 16,
          }}
        />
      </ImageBackground>
    </ScrollView>
  );
};
