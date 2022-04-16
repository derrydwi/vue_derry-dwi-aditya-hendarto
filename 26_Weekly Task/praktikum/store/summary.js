const state = () => ({
  query: '',
})

const getters = {
  getQuery: (state) => {
    return state.query
  },
}

const mutations = {
  SET_QUERY(state, param) {
    state.query = param
  },
}

const actions = {
  saveQuery({ commit }, param) {
    commit('SET_QUERY', param)
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
