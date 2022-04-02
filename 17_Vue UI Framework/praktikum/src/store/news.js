import axios from 'axios';

const state = () => ({
  news: [],
  sources: [],
  info: '',
  page: 1,
  currentNews: {},
  category: 'general',
  query: '',
  source: '',
  isDrawer: true,
  isDark: true,
  isLoading: false,
});

const getters = {
  getNews: (state) => {
    return state.news;
  },
  getSources: (state) => {
    return state.sources;
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
  getSource: (state) => {
    return state.source;
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
  SET_SOURCES(state, param) {
    state.sources = param;
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
  SET_SOURCE(state, param) {
    state.source = param;
  },
  SET_IS_DRAWER(state) {
    state.isDrawer = !state.isDrawer;
  },
  SET_IS_DARK(state) {
    state.isDark = !state.isDark;
  },
  SET_IS_LOADING(state) {
    state.isLoading = !state.isLoading;
  },
};

const actions = {
  fetchNews({ commit, state }, param) {
    // check value of loadMore param
    param.loadMore ? commit('SET_PAGE', state.page + 1) : commit('SET_PAGE', 1);

    // determine the request & params to be used
    let baseUrl, params;
    if (param.type === 'category') {
      baseUrl = 'https://newsapi.org/v2/top-headlines';
      params = {
        apiKey: process.env.VUE_APP_API_KEY,
        country: 'us',
        category: state.category,
        pageSize: 5,
        page: state.page,
      };
    } else if (param.type === 'search') {
      baseUrl = 'https://newsapi.org/v2/everything';
      params = {
        apiKey: process.env.VUE_APP_API_KEY,
        q: state.query,
        pageSize: 5,
        page: state.page,
      };
    } else {
      baseUrl = 'https://newsapi.org/v2/top-headlines';
      params = {
        apiKey: process.env.VUE_APP_API_KEY,
        sources: state.source,
        pageSize: 5,
        page: state.page,
      };
    }

    // set isLoading to true
    commit('SET_IS_LOADING');
    // fetch data
    axios
      .get(baseUrl, { params })
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
  fetchSources({ commit }) {
    axios
      .get('https://newsapi.org/v2/top-headlines/sources', {
        params: {
          apiKey: process.env.VUE_APP_API_KEY,
        },
      })
      .then((response) => {
        // check if loadMore param have a value
        commit('SET_SOURCES', response.data.sources);
        // reset info
        commit('SET_INFO', '');
      })
      .catch((error) => {
        // add erorr message
        commit('SET_INFO', error.message);
      });
  },
  saveCurrentNews({ commit, state }, param) {
    commit('SET_CURRENT_NEWS', state.news[param]);
  },
  saveCategory({ commit, state }, param) {
    if (state.category !== param) {
      commit('SET_CATEGORY', param);
      commit('SET_QUERY', '');
      commit('SET_SOURCE', '');
      commit('SET_NEWS', []);
    }
  },
  saveQuery({ commit, state }, param) {
    if (state.query !== param) {
      commit('SET_QUERY', param);
      commit('SET_CATEGORY', '');
      commit('SET_SOURCE', '');
      commit('SET_NEWS', []);
    }
  },
  saveSource({ commit, state }, param) {
    if (state.source !== param) {
      commit('SET_SOURCE', param);
      commit('SET_CATEGORY', '');
      commit('SET_QUERY', '');
      commit('SET_NEWS', []);
    }
  },
  saveIsDark({ commit }) {
    commit('SET_IS_DARK');
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
