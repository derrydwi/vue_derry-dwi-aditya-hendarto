<template>
  <v-container v-if="!info.news">
    <BaseError v-if="info.sources" :info="info" />
    <BaseHeading :text="title" />
    <NewsCard
      :current-page="page"
      :news-list="newsList"
      @save-detail="saveDetail"
      @change-page="changePage"
    />
  </v-container>
  <v-container v-else>
    <BaseError :info="info" />
  </v-container>
</template>

<script>
import BaseError from '@/components/BaseError.vue'
import BaseHeading from '@/components/BaseHeading.vue'
import NewsCard from '@/components/NewsCard.vue'
import { capitalize } from '@/utils/formatter'

export default {
  name: 'CategoryView',
  components: {
    BaseError,
    BaseHeading,
    NewsCard,
  },
  asyncData({ $axios, store, route }) {
    const pageNumber = Number(route.query.page) || 1
    if (
      store.state.news.news.type === route.params.category &&
      store.state.news.news.page === pageNumber
    )
      return
    return $axios
      .get('https://api-newsapps.ga/v2/top-headlines', {
        params: {
          country: 'us',
          category: route.params.category,
          pageSize: 5,
          page: pageNumber,
        },
      })
      .then((response) => {
        store.dispatch('news/saveInfo', {
          ...store.state.news.info,
          news: '',
        })
        store.dispatch('news/saveNews', {
          type: route.params.category,
          page: pageNumber,
          news: response.data.articles,
        })
        store.dispatch('news/saveNewsLength', response.data.totalResults)
      })
      .catch((error) => {
        store.dispatch('news/saveInfo', {
          ...store.state.news.info,
          news: error.message,
        })
      })
  },
  head() {
    return {
      title: capitalize(this.$route.params.category),
    }
  },
  computed: {
    title() {
      return `${this.$route.params.category} News`
    },
    info() {
      return this.$store.getters['news/getInfo']
    },
    newsList() {
      return this.$store.getters['news/getNews'].news
    },
    route() {
      return this.$route.query
    },
    page: {
      get() {
        return Number(this.$route.query.page) || 1
      },
      set() {},
    },
  },
  watch: {
    route() {
      this.$nuxt.refresh()
    },
  },
  methods: {
    saveDetail(index) {
      this.$store.dispatch('news/saveCurrentNews', index)
    },
    changePage(page) {
      this.$router.push({
        path: this.$route.path,
        params: this.$route.params.category,
        query: {
          page,
        },
      })
    },
  },
}
</script>
