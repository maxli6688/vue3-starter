
import { createI18n } from "vue-i18n";
import type { I18nOptions } from "vue-i18n";
import messages from "./messages";

// const language = (
//   (navigator.language ? navigator.language : navigator.userLanguage) || "en"
// ).toLowerCase();
// 如果本地有语言标识就采用本地，没有就根据浏览器语言默认标识显示语言
// locale: localStorage.getItem('locale') || navigator.language.slice(0, 2),

const language = localStorage.getItem("lang") || "zh_CN";
console.log("current language = ", language);

const i18n = createI18n({
  locale: language,
  fallbackLocale: "zh_CN", //没有英文的时候默认语言
  // Refer a global scope Composer instance of i18n
  globalInjection: true,
  // Must be set to 'false', to use Composition API
  legacy: false,
  // sync: false,
  messages: messages as unknown as I18nOptions['messages'],
});

// const seleLanguage = (lang: string) => {
//   // localStorage.setItem("lang", lang);
//   i18n.global.locale = lang;
// }
// i18n.global.t(errorMessageKey),
// https://github.com/vuejs/pinia/discussions/1219
export default i18n;