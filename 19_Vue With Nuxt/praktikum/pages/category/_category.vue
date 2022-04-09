<template>
  <v-container v-if="!info">
    <BaseHeading :text="title" />
    <NewsCard
      :news-list="newsList"
      :page="page"
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
  name: 'CategoryPage',
  components: {
    BaseError,
    BaseHeading,
    NewsCard,
  },
  asyncData({ store, params, query }) {
    return store.dispatch('news/fetchNews', {
      mode: Object.keys(params)[0],
      type: params.category,
      page: query.page,
    })
  },
  head() {
    return {
      title: capitalize(this.$route.params.category),
    }
  },
  computed: {
    title() {
      return `${this.$route.params.category} news`
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
        params: this.$route.params.category,
        query: {
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
