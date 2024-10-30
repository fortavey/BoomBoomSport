import React from 'react';

import {Cart, Product} from 'shared/types';

export type CartContextType = {
  cart: Cart[];
  addProductToCart: (product: Product) => void;
  removeProductFromCart: (product: Product, removeAll?: boolean) => void;
  onResetCart(): void;
  onChangeAppLang(lang: string): void;
  appLang: string;
};

export const AppContext = React.createContext<CartContextType | null>(null);
