import React, {useContext, useEffect, useState} from 'react';

import {Image, Pressable, Text, TouchableOpacity, View} from 'react-native';

import {Product, SupportedLangs} from 'shared/types';

import {styles} from './style';
import {AppContext} from 'shared/store';
import {t} from 'shared/localization';

interface ProductCardType {
  product: Product;
  onIncrement(): void;
  onDecrement(): void;
}

export const ProductCard: React.FC<ProductCardType> = ({
  product,
  onIncrement,
  onDecrement,
}) => {
  const cartContext = useContext(AppContext);
  const appLang = (cartContext?.appLang || 'en') as SupportedLangs;

  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    if (cartContext && cartContext.cart) {
      setProductCount(
        cartContext.cart.filter(item => item.product.id === product.id)[0]
          ?.count || 0,
      );
    }
  }, [cartContext, cartContext?.cart, product.id]);

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Image source={{uri: product.image}} style={styles.imgContainer} />
      </View>
      <View style={{flex: 2}}>
        <View style={styles.productHeader}>
          <Text style={styles.productTitle}>{product.title[appLang]}</Text>
          <Text style={styles.productDesc}>{product.desc[appLang]}</Text>
        </View>
        <View style={styles.productFooter}>
          <Text style={styles.productPrice}>{product.price} ₽</Text>
          {!!productCount && (
            <View style={styles.countContainer}>
              <TouchableOpacity onPress={onDecrement}>
                <Text style={styles.countBtn}>-</Text>
              </TouchableOpacity>
              <Text style={styles.countText}>{productCount}</Text>
              <TouchableOpacity onPress={onIncrement}>
                <Text style={styles.countBtn}>+</Text>
              </TouchableOpacity>
            </View>
          )}
          <Pressable onPress={onIncrement} style={styles.addBtn}>
            <Text style={styles.addBtnText}>{t.Add}</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
