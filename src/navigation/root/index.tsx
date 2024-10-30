import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  EventTwoScreen,
  CartScreen,
  AccountScreen,
  EventThreeScreen,
  EventsScreen,
  HomeScreen,
  EventFourScreen,
  EventOneScreen,
  ProductsScreen,
  ReservationScreen,
  SuccessScreen,
  BroadcastsScreen,
} from 'screens';

import {RootStackParamList, RootStackParams} from './interface';
import {COLORS} from 'shared';

interface RouteType {}

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const Route: React.FC<RouteType> = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Screen
          name={RootStackParams.Home}
          options={{contentStyle: {backgroundColor: COLORS.primary}}}
          component={HomeScreen}
        />
        <RootStack.Screen
          name={RootStackParams.Products}
          component={ProductsScreen}
          options={{contentStyle: {backgroundColor: COLORS.primary}}}
        />
        <RootStack.Screen
          name={RootStackParams.Broadcast}
          component={BroadcastsScreen}
        />
        <RootStack.Screen
          name={RootStackParams.Account}
          component={AccountScreen}
        />
        <RootStack.Screen
          name={RootStackParams.Reservation}
          component={ReservationScreen}
        />
        <RootStack.Screen
          name={RootStackParams.Success}
          component={SuccessScreen}
        />
        <RootStack.Screen name={RootStackParams.Cart} component={CartScreen} />

        {/* EVENTS */}
        <RootStack.Screen
          name={RootStackParams.Events}
          component={EventsScreen}
        />
        <RootStack.Screen
          name={RootStackParams.EventOne}
          component={EventOneScreen}
        />
        <RootStack.Screen
          name={RootStackParams.EventTwo}
          component={EventTwoScreen}
        />
        <RootStack.Screen
          name={RootStackParams.EventThree}
          component={EventThreeScreen}
        />
        <RootStack.Screen
          name={RootStackParams.EventFour}
          component={EventFourScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
