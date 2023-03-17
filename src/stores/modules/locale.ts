// import { createApp } from 'vue'
import { createStore } from 'vuex'
import { localeSetting } from '@/config/localeSetting';

export interface LocaleState {
  localInfo: LocaleSetting;
  // getLocale: () => LocaleType; // getter
  // getShowPicker: () => boolean; // getter
}

const LOCALE_KEY = 'LOCALE__'
// const ls = createLocalStorage();
const ls = window.localStorage;

const lsItem = ls.getItem(LOCALE_KEY) ? JSON.parse(ls.getItem(LOCALE_KEY)!) : null
const lsLocaleSetting = (lsItem || localeSetting) as LocaleSetting;


const locale = createStore<LocaleState>({
  state() {
    return {
      localInfo: lsLocaleSetting,
    } as LocaleState
  },
  getters: {
    // getShowPicker(state): boolean {
    //   return state.localInfo?.showPicker;
    // },
    // getLocale(state): LocaleType {
    //   return state.localInfo?.locale ?? 'zh_CN';
    // },
  },
  mutations: {
    /**
     * Set up multilingual information and cache
     * @param info multilingual info
     */
    setLocaleInfo(state, info: Partial<LocaleSetting>) {
      state.localInfo = { ...state.localInfo, ...info };
      ls.setItem(LOCALE_KEY, JSON.stringify(state.localInfo));
    },
    /**
     * Initialize multilingual information and load the existing configuration from the local cache
     */
    initLocale(state) {
      state.localInfo = { ...localeSetting, ...state.localInfo };
      ls.setItem(LOCALE_KEY, JSON.stringify(state.localInfo));
      // this.setLocaleInfo({
      //   ...localeSetting,
      //   ...state.localInfo,
      // });
    },
  },
  actions: {
  }
})

export default locale
