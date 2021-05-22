import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from './en/en.json'
import ru from './ru/ru.json';
import uk from './uk/uk.json';

// the translations
// (tip move them in a JSON file and import them)
export const resources = {
  en: {
    en,
  },
  ru: {
    ru
  },
  uk: {
    uk
  }
} as const;

i18n.use(initReactI18next).init({
  lng: 'en',
  ns: ['en', 'ru', 'uk'],
  resources,
});

  export default i18n;