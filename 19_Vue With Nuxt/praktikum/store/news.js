const state = () => ({
  news: {},
  currentNews: {},
  info: '',
  isDark: false,
  isDrawer: false,
})

const getters = {
  getNewsList: (state) => {
    return state.news.newsList
  },
  getNewsLength: (state) => {
    return state.news.total
  },
  getCurrentNews: (state) => {
    return state.currentNews
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
  SET_CURRENT_NEWS(state, param) {
    state.currentNews = param
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
  fetchNews({ commit, state }, { menu, type, page }) {
    // when user wanna fetch the same data
    if (state.news.type === type && state.news.page === page) return

    // determine the request & params to be used
    let url, params
    if (menu === 'category') {
      url = 'https://api-newsapps.ga/v2/top-headlines'
      params = {
        country: 'us',
        category: type,
        pageSize: 5,
        page,
      }
    } else if (menu === 'search') {
      url = 'https://api-newsapps.ga/v2/everything'
      params = {
        q: type,
        pageSize: 5,
        page,
      }
    } else if (menu === 'source') {
      url = 'https://api-newsapps.ga/v2/top-headlines'
      params = {
        sources: type,
        pageSize: 5,
        page,
      }
    }

    // fetch data
    return this.$axios
      .$get(url, { params })
      .then((response) => {
        commit('SET_NEWS', {
          type,
          page,
          total: response.totalResults,
          newsList: response.articles,
        })
        commit('SET_INFO', '')
      })
      .catch((error) => {
        commit('SET_INFO', error.message)
      })
  },
  saveNews({ commit }, param) {
    commit('SET_NEWS', param)
  },
  saveCurrentNews({ commit, state }, param) {
    commit('SET_CURRENT_NEWS', state.news.newsList[param])
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
