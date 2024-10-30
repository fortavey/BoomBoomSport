import LocalizedStrings from 'react-native-localization';

import english from './locale/en';
import russian from './locale/ru';
import french from './locale/fr';
import spanish from './locale/es';
import german from './locale/de';
import polish from './locale/pl';

type Translations = typeof english;

export const t = new LocalizedStrings<Translations>({
  en: english,
  ru: russian,
  fr: french,
  es: spanish,
  de: german,
  pl: polish,
});

export const changeLanguage = () => {};

export const getAppLanguage = () => {
  return t.getLanguage();
};

// const unicodeString = 'Il tuo tavolo \u00e8 stato prenotato con successo!';
// const decodedString = decodeURIComponent(unicodeString.replace(/\\u/g, '%u'));

// console.log(decodedString);
