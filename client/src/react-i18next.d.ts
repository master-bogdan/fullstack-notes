// react-i18next.d.ts
import { resources } from './translations/i18n';

declare module 'react-i18next' {
  type DefaultResources = typeof resources['en'];
  interface Resources extends DefaultResources {}
}