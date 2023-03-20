type LocaleType = 'zh' | 'en' | 'ru' | 'ja' | 'ko';


interface LocaleSetting {
  showPicker: boolean;
  // Current language
  locale: LocaleType;
  // default language
  fallback: LocaleType;
  // available Locales
  availableLocales: LocaleType[];
}

type DropMenuItem = { text: string; event: string | number }

type LangRecord = Record<string, Record<string, any>>