// import type { DropMenu } from '../components/Dropdown';
// import type { LocaleSetting, LocaleType } from '/#/config';


export const LOCALE: { [key: string]: LocaleType } = {
  ZH_CN: 'zh',
  EN_US: 'en',
  RU_RU: 'ru',
};

export const localeSetting: LocaleSetting = {
  showPicker: true,
  // Locale
  locale: LOCALE.ZH_CN,
  // Default locale
  fallback: LOCALE.ZH_CN,
  // available Locales
  availableLocales: [LOCALE.ZH_CN, LOCALE.EN_US],
  // availableLocales: [LOCALE.ZH_CN, LOCALE.RU_RU],
};

// locale list
export const localeList: { text: string; event: string | number }[] = [
  {
    text: '简体中文',
    event: LOCALE.ZH_CN,
  },
  {
    text: 'English',
    event: LOCALE.EN_US,
  },
  {
    text: 'Русский',
    event: LOCALE.RU_RU,
  },
];
