<template>
  <v-container>
    <div v-if="!info">
      <BaseHeading :text="title" />
      <NewsCard
        :news-list="newsList"
        :page="page"
        @save-detail="saveDetail"
        @change-page="changePage"
      />
    </div>
    <BaseError v-else :info="info" />
  </v-container>
</template>

<script>
import BaseError from '@/components/BaseError.vue'
import BaseHeading from '@/components/BaseHeading.vue'
import NewsCard from '@/components/NewsCard.vue'
import { capitalize } from '@/utils/formatter'

export default {
  name: 'TypePage',
  components: {
    BaseError,
    BaseHeading,
    NewsCard,
  },
  asyncData({ store, params, query }) {
    return store.dispatch('news/fetchNews', {
      menu: params.menu,
      type: params.type,
      page: query.page,
    })
  },
  head() {
    return {
      title: capitalize(this.$route.params.type),
    }
  },
  computed: {
    title() {
      return `${this.$route.params.type} news`
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
        params: this.$route.params.type,
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
