import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

const store = createStore({
  plugins: [createPersistedState()],
  state: {
    currentNews: '',
    category: '',
  },
  getters: {},
  mutations: {
    SAVE_NEWS(state, title) {
      state.currentNews = title;
    },
    SAVE_CATEGORY(state, title) {
      state.category = title;
    },
  },
  actions: {
    saveNews({ commit }, title) {
      commit('SAVE_NEWS', title);
    },
    saveCategory({ commit }, title) {
      commit('SAVE_CATEGORY', title);
    },
  },
  modules: {},
});

export default store;
