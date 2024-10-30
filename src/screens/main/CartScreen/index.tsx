import React, {useContext, useState} from 'react';

import {
  FlatList,
  Image,
  ListRenderItem,
  Platform,
  SafeAreaView,
  Text,
  View,
} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CustomButton} from 'common/custom-button';
import {CartCard} from 'components/cart-card';
import {ProductHeaderMemoized} from 'components/products-header';
import {RootStackParamList} from 'navigation/root/interface';
import {COLORS} from 'shared';
import {AppContext} from 'shared/store';
import {Cart, Product, SupportedLangs} from 'shared/types';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from './style';
import {CustomLoading} from 'common/custom-loading';
import {t} from 'shared/localization';

const spacerHeight = 1000;

type CartScreenType = NativeStackScreenProps<RootStackParamList, 'Cart'>;
export const CartScreen: React.FC<CartScreenType> = ({navigation}) => {
  const cartContext = useContext(AppContext);
  const appLang = (cartContext?.appLang || 'en') as SupportedLangs;
  const [isLoading, setIsLoading] = useState(false);

  const {top} = useSafeAreaInsets();

  if (!cartContext) {
    return null;
  }

  const fetchQrCode = async () => {
    setIsLoading(true);
    try {
      let response = await fetch('https://boomboomsport.website/order.php', {
        method: 'POST',
      });

      if (response.ok) {
        let data = await response.json();
        return data.res;
      }
    } catch (error) {
      console.log('Error fetching qr code', error);
    } finally {
      setIsLoading(false);
    }
  };

  const onGoToSuccessScreen = async () => {
    const qrCodeUrl = await fetchQrCode();
    if (qrCodeUrl) {
      navigation.navigate('Success', {isOrder: true, qrCode: qrCodeUrl});
      cartContext.onResetCart();
    }
  };

  const onIncrement = (item: Cart) => {
    cartContext.addProductToCart(item.product);
  };

  const onDecrement = (item: Cart) => {
    cartContext.removeProductFromCart(item.product, false);
  };

  const onRemoveItemFromCart = (item: Product) => {
    cartContext.removeProductFromCart(item);
  };

  const renderItem: ListRenderItem<Cart> = ({item}) => {
    const onRemoveItem = () => onRemoveItemFromCart(item.product);

    return (
      <CartCard
        appLang={appLang}
        item={item.product}
        count={item.count}
        onDecrement={() => onDecrement(item)}
        onIncrement={() => onIncrement(item)}
        onRemoveItemFromCart={onRemoveItem}
      />
    );
  };

  const totalSum = cartContext.cart
    .map(item => Number(item.product.price) * item.count)
    .reduce((acc, curr) => acc + curr, 0);

  const renderListHeader = () => {
    return (
      <>
        {Platform.OS === 'ios' && (
          <View
            style={{
              backgroundColor: COLORS.primary,
              height: spacerHeight,
              position: 'absolute',
              top: -spacerHeight,
              left: 0,
              right: 0,
            }}
          />
        )}
        <ProductHeaderMemoized logo={t.Cart} />
      </>
    );
  };

  const renderListEmptyComponent = () => {
    return (
      <View style={styles.emptyListContainer}>
        <View style={styles.emptyListCircle}>
          <Text style={styles.headerStyle}>Ваша корзина пуста!</Text>
          <Image
            source={require('shared/assets/images/cart.png')}
            style={{width: 120, height: 120, alignSelf: 'center'}}
          />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{backgroundColor: COLORS.dark_000, flex: 1}}>
        <View style={styles.listHeaderStyle}>{renderListHeader()}</View>
        {cartContext.cart.length ? (
          <View style={styles.listContainer}>
            <FlatList
              data={cartContext.cart}
              renderItem={renderItem}
              contentContainerStyle={[styles.flatListContent, {marginTop: top}]}
            />
            <View style={styles.footerContainer}>
              <View style={styles.footerContent}>
                <Text style={styles.sumText}>Итого:</Text>
                <Text style={styles.sumText}>{totalSum} ₽</Text>
              </View>
              <CustomButton
                disabled={cartContext.cart.length === 0}
                label={t.Order}
                onPress={onGoToSuccessScreen}
                wrapperStyle={{position: 'absolute', bottom: -40}}
              />
            </View>
          </View>
        ) : (
          renderListEmptyComponent()
        )}
        {isLoading && <CustomLoading />}
      </View>
    </SafeAreaView>
  );
};
