import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from '../locales/default';
import am from '../locales/default.arm';
import ru from '../locales/default.ru';

const options = {
  interpolation: { escapeValue: false },
  lng: (localStorage.getItem('LANGUAGE')
      || navigator.language),
  debug: false,

  resources: {
    am: {
      locales: am,
    },
    en: {
      locales: en,
    },
    ru: {
      locales: ru,
    },
  },
  fallbackLng: 'en',

  ns: ['common'],

  defaultNS: 'locales',

  react: {
    wait: false,
    bindI18n: 'languageChanged loaded',
    bindStore: 'added removed',
    nsMode: 'default'
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(options);

export default i18n;
