import React from 'react';

import {Image, Pressable, Text, TouchableOpacity, View} from 'react-native';

import {Product, SupportedLangs} from 'shared/types';

import {styles} from './style';
interface CartCardType {
  item: Product;
  count: number;
  appLang: SupportedLangs;
  onDecrement(): void;
  onIncrement(): void;
  onRemoveItemFromCart(): void;
}

export const CartCard: React.FC<CartCardType> = ({
  item,
  count,
  onDecrement,
  onIncrement,
  onRemoveItemFromCart,
  appLang = 'ru',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title[appLang]}</Text>
      <View style={styles.countContainer}>
        <TouchableOpacity onPress={onDecrement}>
          <Text style={styles.countBtn}>-</Text>
        </TouchableOpacity>
        <Text style={styles.countText}>{count}</Text>
        <TouchableOpacity onPress={onIncrement}>
          <Text style={styles.countBtn}>+</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.priceText}>{item.price} ₽</Text>
      <Pressable
        style={{paddingLeft: 10, paddingRight: 5, paddingBottom: 25}}
        onPress={onRemoveItemFromCart}>
        <Image
          source={require('shared/assets/images/clear.png')}
          style={{width: 12, height: 12}}
        />
      </Pressable>
    </View>
  );
};
