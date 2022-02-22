import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

const store = createStore({
  plugins: [createPersistedState()],
  state: {
    currentNews: '',
  },
  getters: {},
  mutations: {
    SAVE_NEWS(state, title) {
      state.currentNews = title;
    },
  },
  actions: {
    saveNews({ commit }, title) {
      commit('SAVE_NEWS', title);
    },
  },
  modules: {},
});

export default store;
