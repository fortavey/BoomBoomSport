import React, {useContext, useMemo} from 'react';

import {StyleProp, Text, TouchableOpacity, View, ViewStyle} from 'react-native';

import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from 'navigation/root/interface';
import {Menu, ShoppingCartIcon} from 'shared/assets/svg';

import {styles} from './style';
import {AppContext} from 'shared/store';

interface ProductHeaderProps {
  showCart?: boolean;
  showLogo?: boolean;
  wrapperStyle?: StyleProp<ViewStyle>;
  logo?: string;
}

const ProductHeader: React.FC<ProductHeaderProps> = ({
  showCart = true,
  showLogo = true,
  logo = 'МЕНЮ',
  wrapperStyle,
}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={[styles.container, wrapperStyle]}>
      <TouchableOpacity onPressIn={navigation.goBack}>
        <Menu />
      </TouchableOpacity>
      {showLogo && <Text style={styles.headerText}>{logo}</Text>}
      <TouchableOpacity onPressIn={() => navigation.navigate('Cart')}>
        {showCart && <Cart />}
      </TouchableOpacity>
    </View>
  );
};

const Cart = () => {
  const CartContext = useContext(AppContext);

  const cartCount = useMemo(
    () =>
      CartContext?.cart
        .map(item => item.count)
        .reduce((acc, count) => acc + count, 0),
    [CartContext?.cart],
  );

  return (
    <View>
      <Text style={styles.cartCount}>{cartCount}</Text>
      <ShoppingCartIcon size={25} />
    </View>
  );
};

export const ProductHeaderMemoized = React.memo(ProductHeader);
