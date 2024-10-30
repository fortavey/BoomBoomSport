import React, {useContext} from 'react';

import {FlatList, ListRenderItem} from 'react-native';

import {CustomShip} from 'common/custom-ship';
import {PRODUCTS} from 'shared/types';

import {styles} from './style';
import {t} from 'shared/localization';
import {AppContext} from 'shared/store';

type Product = {
  id: number;
  key: PRODUCTS;
  title: string;
};

interface ProductsBannerFiltersProps {
  filter: string;
  onChangeFilter(val: string | null): void;
}
const ProductsBannerFilters: React.FC<ProductsBannerFiltersProps> = ({
  filter,
  onChangeFilter,
}) => {
  const context = useContext(AppContext);
  const appLang = context?.appLang;

  const Products_filters: Product[] = [
    {
      id: 0,
      key: PRODUCTS.SALADS,
      title: t.salads,
    },
    {id: 1, key: PRODUCTS.SNACKS, title: t.starters},
    {
      id: 2,
      key: PRODUCTS.DESERTS,
      title: t.desserts,
    },
    {id: 3, key: PRODUCTS.DRINKS, title: t.drinks},
  ];
  const renderItem: ListRenderItem<Product> = ({item}) => {
    const isSelected = item.key === filter;
    const onPress = () => onChangeFilter(isSelected ? null : item.key);

    return (
      <CustomShip
        key={item.id}
        isSelected={isSelected}
        onPress={onPress}
        title={item.title}
        wrapperStyle={styles.space}
      />
    );
  };

  return (
    <FlatList
      data={Products_filters}
      renderItem={renderItem}
      style={styles.container}
      keyExtractor={item => String(item.id)}
      numColumns={2}
    />
  );
};

export const ProductsBannerFiltersMemoized = React.memo(ProductsBannerFilters);
