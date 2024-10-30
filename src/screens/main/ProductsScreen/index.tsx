import React, {useCallback, useContext, useMemo, useState} from 'react';

import {FlatList, ListRenderItem, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ProductCard} from 'components';
import {ProductsBannerFiltersMemoized} from 'components/products-filters';
import {ProductHeaderMemoized} from 'components/products-header';
import {RootStackParamList} from 'navigation/root/interface';
import {AppContext} from 'shared/store';
import {Product, PRODUCTS} from 'shared/types';

import {NEW_PRODUCTS} from './data';
import {styles} from './style';

type ProductsScreenType = NativeStackScreenProps<
  RootStackParamList,
  'Products'
>;

export const ProductsScreen: React.FC<ProductsScreenType> = ({}) => {
  const [productsFilter, setProductsFilter] = useState(PRODUCTS.SALADS);

  const cartContext = useContext(AppContext);

  const onAddToCart = (product: Product) => {
    if (cartContext) {
      cartContext.addProductToCart(product);
    }
  };

  const onRemoveFromCart = (product: Product) => {
    if (cartContext) {
      cartContext.removeProductFromCart(product, false);
    }
  };

  const renderItem: ListRenderItem<Product> = ({item}) => {
    return (
      <ProductCard
        product={item}
        onIncrement={() => onAddToCart(item)}
        onDecrement={() => onRemoveFromCart(item)}
      />
    );
  };

  const filteredData = useMemo(
    () =>
      productsFilter
        ? NEW_PRODUCTS.filter(item => item.type === productsFilter)
        : NEW_PRODUCTS,
    [productsFilter],
  );

  const onChangeFilter = useCallback((val: PRODUCTS) => {
    setProductsFilter(val);
  }, []);

  const listHeaderComponent = useCallback(() => {
    return (
      <ProductsBannerContentMemoized
        filter={productsFilter}
        onChangeFilter={onChangeFilter}
      />
    );
  }, [onChangeFilter, productsFilter]);

  const {top} = useSafeAreaInsets();
  return (
    <View style={[styles.container, {marginTop: top}]}>
      <FlatList
        nestedScrollEnabled
        ListHeaderComponent={listHeaderComponent}
        contentContainerStyle={styles.flatListContent}
        data={filteredData}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  );
};

interface ProductsBannerContentProps {
  filter: string;
  onChangeFilter(val: string): void;
}

const ProductsBannerContent: React.FC<ProductsBannerContentProps> = ({
  onChangeFilter,
  filter,
}) => {
  return (
    <React.Fragment>
      <ProductHeaderMemoized wrapperStyle={styles.headerWrapper} />
      <ProductsBannerFiltersMemoized
        filter={filter}
        onChangeFilter={onChangeFilter}
      />
    </React.Fragment>
  );
};

export const ProductsBannerContentMemoized = React.memo(ProductsBannerContent);
