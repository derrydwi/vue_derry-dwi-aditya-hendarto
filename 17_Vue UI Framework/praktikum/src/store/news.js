import axios from 'axios';

const state = () => ({
  news: [],
  info: '',
  page: 1,
  currentNews: {},
  category: 'general',
  query: '',
  isDrawer: true,
  isLoading: false,
});

const getters = {
  getNews: (state) => {
    return state.news;
  },
  getInfo: (state) => {
    return state.info;
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
  getIsDrawer: (state) => {
    return state.isDrawer;
  },
  getIsLoading: (state) => {
    return state.isLoading;
  },
};

const mutations = {
  SET_NEWS(state, param) {
    state.news = param;
  },
  SET_INFO(state, param) {
    state.info = param;
  },
  SET_PAGE(state, param) {
    state.page = param;
  },
  SET_CURRENT_NEWS(state, param) {
    state.currentNews = param;
  },
  SET_CATEGORY(state, param) {
    state.category = param;
  },
  SET_QUERY(state, param) {
    state.query = param;
  },
  SET_IS_DRAWER(state) {
    state.isDrawer = !state.isDrawer;
  },
  SET_IS_LOADING(state) {
    state.isLoading = !state.isLoading;
  },
};

const actions = {
  fetchNews({ commit, state }, param) {
    // check value of loadMore param
    param.loadMore ? commit('SET_PAGE', state.page + 1) : commit('SET_PAGE', 1);

    // define and determine the request to be used
    const requestByCategory = `https://newsapi.org/v2/top-headlines?country=us&category=${state.category}&pageSize=5&page=${state.page}&apiKey=${process.env.VUE_APP_API_KEY}`;
    const requestBySearch = `https://newsapi.org/v2/everything?q=${state.query}&pageSize=5&page=${state.page}&apiKey=${process.env.VUE_APP_API_KEY}`;
    let request;
    param.type === 'category'
      ? (request = requestByCategory)
      : (request = requestBySearch);

    // set isLoading to true
    commit('SET_IS_LOADING');

    axios
      .get(request)
      .then((response) => {
        // check if loadMore param have a value
        param.loadMore
          ? commit('SET_NEWS', [...state.news, ...response.data.articles])
          : commit('SET_NEWS', response.data.articles);

        // reset info
        commit('SET_INFO', '');
      })
      .catch((error) => {
        // add erorr message
        commit('SET_INFO', error.message);
      })
      .finally(() => {
        // set isLoading to false
        commit('SET_IS_LOADING');
      });
  },
  saveCurrentNews({ commit, state }, param) {
    commit('SET_CURRENT_NEWS', state.news[param]);
  },
  saveCategory({ commit, state }, param) {
    if (state.category !== param) {
      commit('SET_CATEGORY', param);
      commit('SET_QUERY', '');
      commit('SET_NEWS', []);
    }
  },
  saveQuery({ commit, state }, param) {
    if (state.query !== param) {
      commit('SET_QUERY', param);
      commit('SET_CATEGORY', '');
      commit('SET_NEWS', []);
    }
  },
  saveIsDrawer({ commit }) {
    commit('SET_IS_DRAWER');
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
