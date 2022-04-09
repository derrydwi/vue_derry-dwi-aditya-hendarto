<template>
  <v-container>
    <div v-if="!info">
      <BaseHeading :text="title" />
      <NewsCard
        v-if="newsList.length"
        :news-list="newsList"
        :page="page"
        @save-detail="saveDetail"
        @change-page="changePage"
      />
      <BaseError v-else type="warning" outlined="true" info="News not found!" />
    </div>
    <BaseError v-else type="error" :info="info" />
  </v-container>
</template>

<script>
import BaseError from '@/components/BaseError.vue'
import BaseHeading from '@/components/BaseHeading.vue'
import NewsCard from '@/components/NewsCard.vue'
import { menus } from '~/common/api'

export default {
  name: 'SearchPage',
  components: {
    BaseError,
    BaseHeading,
    NewsCard,
  },
  validate({ params, query }) {
    return params.menu === menus[2] && query.query
  },
  asyncData({ store, params, query }) {
    return store.dispatch('news/fetchNews', {
      menu: params.menu,
      type: query.query,
      page: query.page,
    })
  },
  head() {
    return {
      title: this.title,
    }
  },
  computed: {
    title() {
      if (this.newsList.length) {
        return `Result of "${this.$route.query.query}"`
      } else {
        return `No results for "${this.$route.query.query}"`
      }
    },
    info() {
      return this.$store.getters['news/getInfo']
    },
    newsList() {
      return this.$store.getters['news/getNewsList']
    },
    page() {
      return parseInt(this.$route.query.page) || 1
    },
  },
  watch: {
    '$route.query'() {
      this.$nuxt.refresh()
    },
  },
  methods: {
    changePage(page) {
      this.$router.push({
        path: this.$route.path,
        query: {
          query: this.$route.query.query,
          page,
        },
      })
    },
    saveDetail(index) {
      this.$store.dispatch('news/saveCurrentNews', index)
    },
  },
}
</script>
