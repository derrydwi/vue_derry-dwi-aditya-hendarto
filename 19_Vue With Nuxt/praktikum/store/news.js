const state = () => ({
  news: {},
  newsLength: 0,
  currentNews: {},
  title: '',
  info: {},
  isDark: true,
  isDrawer: true,
})

const getters = {
  getNews: (state) => {
    return state.news
  },
  getNewsLength: (state) => {
    return state.newsLength
  },
  getCurrentNews: (state) => {
    return state.currentNews
  },
  getTitle: (state) => {
    return state.title
  },
  getInfo: (state) => {
    return state.info
  },
  getIsDark: (state) => {
    return state.isDark
  },
  getIsDrawer: (state) => {
    return state.isDrawer
  },
}

const mutations = {
  SET_NEWS(state, param) {
    state.news = param
  },
  SET_NEWS_LENGTH(state, param) {
    state.newsLength = param
  },
  SET_CURRENT_NEWS(state, param) {
    state.currentNews = param
  },
  SET_TITLE(state, param) {
    state.title = param
  },
  SET_INFO(state, param) {
    state.info = param
  },
  SET_IS_DARK(state) {
    state.isDark = !state.isDark
  },
  SET_IS_DRAWER(state) {
    state.isDrawer = !state.isDrawer
  },
}

const actions = {
  saveNews({ commit }, param) {
    commit('SET_NEWS', param)
  },
  saveNewsLength({ commit }, param) {
    commit('SET_NEWS_LENGTH', param)
  },
  saveCurrentNews({ commit, state }, param) {
    commit('SET_CURRENT_NEWS', state.news.news[param])
  },
  saveTitle({ commit }, param) {
    commit('SET_TITLE', param)
  },
  saveInfo({ commit }, param) {
    commit('SET_INFO', param)
  },
  saveIsDark({ commit }) {
    commit('SET_IS_DARK')
  },
  saveIsDrawer({ commit }) {
    commit('SET_IS_DRAWER')
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
