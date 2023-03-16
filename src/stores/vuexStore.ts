import { createApp } from 'vue'
import { createStore } from 'vuex'



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

const store = createStore({
  state() {
    return {
      count: 0,
      username: '',
    }
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
})

export default store
