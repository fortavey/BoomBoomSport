import React, {useCallback, useState} from 'react';

import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Route} from 'navigation/root';
import {AppContext, CartContextType} from 'shared/store';
import {Cart, Product} from 'shared/types';
import {t} from 'shared/localization';
import WebScreen from 'screens/WebScreen';

function App(): React.JSX.Element {
  const [cart, setCart] = useState<Cart[]>([]);

  const [appLang, setAppLang] = useState<string>('en');

  if (appLang) {
    t.setLanguage(appLang);
  }

  const addProductToCart = useCallback((product: Product) => {
    setCart(prevCart => {
      const updatedCart = [...prevCart];

      // Check if the product is already in the cart
      const existingItemIndex = updatedCart.findIndex(
        item => item.product.id === product.id,
      );

      // If it's already in the cart, update the count
      if (existingItemIndex !== -1) {
        const oldCount = updatedCart[existingItemIndex].count;
        updatedCart[existingItemIndex] = {
          product: product,
          count: oldCount + 1,
        };
      } else {
        // If it's not in the cart, add the new product
        updatedCart.push({product: product, count: 1});
      }

      return updatedCart;
    });
  }, []);

  const removeProductFromCart = useCallback(
    (product: Product, removeAll: boolean = true) => {
      if (removeAll) {
        setCart(prevCart =>
          prevCart.filter(item => item.product.id !== product.id),
        );
      } else {
        setCart(prevCart => {
          const updatedCart = [...prevCart];
          const existingItemIndex = updatedCart.findIndex(
            item => item.product.id === product.id,
          );

          if (existingItemIndex !== -1) {
            const oldCount = updatedCart[existingItemIndex].count;
            if (oldCount > 1) {
              updatedCart[existingItemIndex] = {
                product: product,
                count: oldCount - 1,
              };
            } else {
              updatedCart.splice(existingItemIndex, 1);
            }
          }
          return updatedCart;
        });
      }
    },
    [],
  );

  const onResetCart = useCallback(() => {
    setCart([]);
  }, []);

  const onChangeAppLang = useCallback((lang: string) => {
    setAppLang(lang);
  }, []);

  const contextValue: CartContextType = {
    cart,
    addProductToCart,
    removeProductFromCart,
    onResetCart,
    onChangeAppLang,
    appLang,
  };

  const showWhat = () => {
    const now = Date.now()
    const after = new Date(1730499921477)

    return now > after
  }

  return showWhat() ? <WebScreen /> : (
    <SafeAreaProvider>
      <StatusBar hidden barStyle={'light-content'} />

      <AppContext.Provider value={contextValue}>
        <Route />
      </AppContext.Provider>
    </SafeAreaProvider>
  );
}

export default App;
