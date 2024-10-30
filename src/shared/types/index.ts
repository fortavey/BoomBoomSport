export type Product = {
  id: number;
  title: Record<SupportedLangs, string>; // title object with keys of SupportedLangs
  desc: Record<SupportedLangs, string>; // title object with keys of SupportedLangs
  price: number;
  image: string;
  type: PRODUCTS;
};

export type SupportedLangs =
  | 'ru'
  | 'en'
  | 'es'
  | 'pl'
  | 'de'
  | 'fr'
  | 'sw'
  | 'it';

export enum PRODUCTS {
  SALADS = 'Салаты',
  SNACKS = 'Закуски',
  DESERTS = 'Десерты',
  DRINKS = 'Напитки',
}

export type Cart = {
  product: Product;
  count: number;
};
