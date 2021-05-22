import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from 'translations/en.json';
import ru from 'translations/ru.json';
import uk from 'translations/uk.json';

// the translations
// (tip move them in a JSON file and import them)
export const resources = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
  uk: {
    translation: uk,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: 'en',
  resources,
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
