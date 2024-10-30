type NO_PARAMS = undefined;

export const RootStackParams = {
  Home: 'Home',
  Cart: 'Cart',
  Events: 'Events',
  Account: 'Account',
  Products: 'Products',
  Broadcast: 'Broadcast',
  Reservation: 'Reservation',
  Success: 'Success',
  EventOne: 'EventOne',
  EventTwo: 'EventTwo',
  EventThree: 'EventThree',
  EventFour: 'EventFour',
} as const;

export type RootStackParamList = {
  [RootStackParams.Home]: NO_PARAMS;
  [RootStackParams.Products]: NO_PARAMS;
  [RootStackParams.Cart]: NO_PARAMS;
  [RootStackParams.Reservation]: NO_PARAMS;
  [RootStackParams.Events]: NO_PARAMS;
  [RootStackParams.Broadcast]: NO_PARAMS;
  [RootStackParams.Account]: NO_PARAMS;
  [RootStackParams.Success]: {isOrder: boolean; qrCode?: string};

  [RootStackParams.EventOne]: NO_PARAMS;
  [RootStackParams.EventTwo]: NO_PARAMS;
  [RootStackParams.EventThree]: NO_PARAMS;
  [RootStackParams.EventFour]: NO_PARAMS;
};
