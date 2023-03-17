// import { createApp } from 'vue'
import { createStore, Store } from 'vuex'

import locale from './modules/locale'
import type { LocaleState } from './modules/locale'

const getUserInfo = async ({ commit }: any, options: any) => {
  // const res = await getUserInfos();
  // const res = await getUserInfos();
  console.log('options', options);
  commit("setUser", options.data);
};

const setUser = (state: any, data: any) => {
  console.log('set user', data);
  state.username = data.username;
  // state.access = data.access || '';
};
export interface StoreState {
  count: number,
  username: string,
  // plum: boolean
  locale: LocaleState
}
const store = createStore<StoreState>({
  state() {
    return {
      count: 0,
      username: '',
    } as StoreState
  },
  mutations: {
    increment(state) {
      state.count++
    },
    setUser
  },
  actions: {
    getUserInfo
  },
  modules: {
    // locale
    locale
  }
})

export default store
