import axios from 'axios';

const state = () => ({
  news: [],
  page: 1,
  currentNews: {},
  category: 'General',
  query: '',
  isDark: false,
  isLoading: false,
});

const getters = {
  getNews: (state) => {
    return state.news;
  },
  getCurrentNews: (state) => {
    return state.currentNews;
  },
  getCategory: (state) => {
    return state.category;
  },
  getQuery: (state) => {
    return state.query;
  },
  getIsDark: (state) => {
    return state.isDark;
  },
  getIsLoading: (state) => {
    return state.isLoading;
  },
};

const mutations = {
  FETCH_NEWS(state, param) {
    state.news = param;
  },
  RESET_PAGE(state) {
    state.page = 1;
  },
  INCREMENT_PAGE(state) {
    state.page++;
  },
  SAVE_CURRENT_NEWS(state, param) {
    state.currentNews = param;
  },
  SAVE_CATEGORY(state, param) {
    state.category = param;
  },
  SAVE_QUERY(state, param) {
    state.query = param;
  },
  DELETE_CATEGORY(state) {
    state.category = '';
  },
  DELETE_QUERY(state) {
    state.query = '';
  },
  SAVE_IS_DARK(state, param) {
    state.isDark = param;
  },
  SAVE_IS_LOADING(state) {
    state.isLoading = !state.isLoading;
  },
};

const actions = {
  fetchNews({ commit, state }) {
    commit('RESET_PAGE');
    state.query && commit('DELETE_QUERY');
    commit('SAVE_IS_LOADING');
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${state.category}&pageSize=5&page=${state.page}&apiKey=${process.env.VUE_APP_API_KEY}`
      )
      .then((response) => {
        commit('FETCH_NEWS', response.data.articles);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        commit('SAVE_IS_LOADING');
      });
  },
  fetchMoreNews({ commit, state }) {
    commit('INCREMENT_PAGE');
    state.query && commit('DELETE_QUERY');
    commit('SAVE_IS_LOADING');
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${state.category}&pageSize=5&page=${state.page}&apiKey=${process.env.VUE_APP_API_KEY}`
      )
      .then((response) => {
        commit('FETCH_NEWS', [...state.news, ...response.data.articles]);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        commit('SAVE_IS_LOADING');
      });
  },
  fetchSearchNews({ commit, state }) {
    commit('RESET_PAGE');
    state.category && commit('DELETE_CATEGORY');
    commit('SAVE_IS_LOADING');
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${state.query}&pageSize=5&page=${state.page}&apiKey=${process.env.VUE_APP_API_KEY}`
      )
      .then((response) => {
        commit('FETCH_NEWS', response.data.articles);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        commit('SAVE_IS_LOADING');
      });
  },
  fetchSearchMoreNews({ commit, state }) {
    commit('INCREMENT_PAGE');
    state.category && commit('DELETE_CATEGORY');
    commit('SAVE_IS_LOADING');
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${state.query}&pageSize=5&page=${state.page}&apiKey=${process.env.VUE_APP_API_KEY}`
      )
      .then((response) => {
        commit('FETCH_NEWS', [...state.news, ...response.data.articles]);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        commit('SAVE_IS_LOADING');
      });
  },
  saveCurrentNews({ commit, state }, param) {
    commit('SAVE_CURRENT_NEWS', state.news[param]);
  },
  saveCategory({ commit }, param) {
    commit('SAVE_CATEGORY', param);
  },
  saveQuery({ commit }, param) {
    commit('SAVE_QUERY', param);
  },
  deleteCategory({ commit }) {
    commit('DELETE_CATEGORY');
  },
  deleteQuery({ commit }) {
    commit('DELETE_QUERY');
  },
  saveIsDark({ commit }, param) {
    commit('SAVE_IS_DARK', param);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
