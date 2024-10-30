import React, {useContext, useState} from 'react';

import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CustomButton} from 'common/custom-button';
import {CustomInput} from 'common/custom-input';
import {ProductHeaderMemoized} from 'components/products-header';
import {RootStackParamList} from 'navigation/root/interface';

import {styles} from './style';
import {COLORS} from 'shared';
import {CustomLoading} from 'common/custom-loading';
import {t} from 'shared/localization';
import {AppContext} from 'shared/store';

type ReservationScreenType = NativeStackScreenProps<
  RootStackParamList,
  'Reservation'
>;

export const ReservationScreen: React.FC<ReservationScreenType> = ({
  navigation,
}) => {
  const context = useContext(AppContext);
  const appLang = context?.appLang;

  const [firstName, setFirstName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const resetStates = () => {
    setFirstName('');
    setMobile('');
    setEmail('');
    setTime('');
    setDate('');
  };

  const fetchReservation = async () => {
    setIsLoading(true);
    try {
      let response = await fetch('https://pilkanoznabar.website/booking.php', {
        method: 'POST',
      });

      if (response.ok) {
        let data = await response.json();
        if (!data.res) {
          throw new Error('Error fetching reservation');
        }
        return data.res;
      }
    } catch (error) {
      console.log('Error fetching reservation', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReservation = async () => {
    const reserved = await fetchReservation();
    if (reserved) {
      navigation.navigate('Success', {isOrder: false});
      resetStates();
    }
  };

  return (
    <KeyboardAvoidingView
      {...(Platform.OS === 'ios' ? {behavior: 'padding'} : {})}
      style={styles.container}>
      <SafeAreaView style={styles.container}>
        <ScrollView
          keyboardShouldPersistTaps="always"
          contentContainerStyle={styles.scrollContainer}>
          <ProductHeaderMemoized showLogo={false} />
          <Text style={styles.headerTitle}>{t.Booking}</Text>
          <View style={styles.content}>
            <CustomInput
              inputValue={firstName}
              onChangeInputValue={setFirstName}
              placeholder={t.YourName}
              wrapperStyle={styles.inputSpace}
            />
            <CustomInput
              inputValue={time}
              onChangeInputValue={setTime}
              placeholder={t.Selecttime}
              wrapperStyle={styles.inputSpace}
            />
            <CustomInput
              inputValue={date}
              onChangeInputValue={setDate}
              placeholder={t.Selectdate}
              wrapperStyle={styles.inputSpace}
            />
            <CustomInput
              inputValue={email}
              onChangeInputValue={setEmail}
              placeholder={t.Email}
              wrapperStyle={styles.inputSpace}
            />
            <CustomInput
              inputValue={mobile}
              onChangeInputValue={setMobile}
              placeholder={t.Yourphone}
              wrapperStyle={styles.inputSpace}
            />
            <View style={styles.buttonContainer}>
              <CustomButton
                onPress={handleReservation}
                label={t.Booknow}
                wrapperStyle={{backgroundColor: COLORS.yellow_secondary}}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      {isLoading && <CustomLoading />}
    </KeyboardAvoidingView>
  );
};
