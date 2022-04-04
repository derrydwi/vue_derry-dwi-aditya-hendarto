import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    key: 'vuex',
    paths: ['news.currentNews', 'news.sources', 'news.isDark'],
  })(store)
}
