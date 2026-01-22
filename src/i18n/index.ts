import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import zhCN from './locales/zh-CN';
import enUS from './locales/en-US';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      'zh-CN': {
        translation: zhCN,
      },
      'en-US': {
        translation: enUS,
      },
    },
    lng: localStorage.getItem('language') || 'zh-CN', // 默认语言
    fallbackLng: 'zh-CN',
    interpolation: {
      escapeValue: false, // React已经转义了
    },
  });

export default i18n;
