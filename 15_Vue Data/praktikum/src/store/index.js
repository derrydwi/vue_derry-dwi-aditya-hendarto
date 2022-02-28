import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

const store = createStore({
  plugins: [createPersistedState()],
  state: {
    currentNews: '',
    category: '',
    query: '',
    isDark: '',
  },
  getters: {},
  mutations: {
    SAVE_NEWS(state, title) {
      state.currentNews = title;
    },
    SAVE_CATEGORY(state, title) {
      state.category = title;
    },
    SAVE_QUERY(state, title) {
      state.query = title;
    },
    DELETE_QUERY(state) {
      state.query = '';
    },
    SAVE_ISDARK(state, title) {
      state.isDark = title;
    },
  },
  actions: {
    saveNews({ commit }, title) {
      commit('SAVE_NEWS', title);
    },
    saveCategory({ commit }, title) {
      commit('SAVE_CATEGORY', title);
    },
    saveQuery({ commit }, title) {
      commit('SAVE_QUERY', title);
    },
    deleteQuery({ commit }, title) {
      commit('DELETE_QUERY', title);
    },
    saveIsDark({ commit }, title) {
      commit('SAVE_ISDARK', title);
    },
  },
  modules: {},
});

export default store;
