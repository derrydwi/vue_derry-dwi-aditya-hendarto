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
import { sources } from '~/common/api'

export default {
  name: 'SourcePage',
  components: {
    BaseError,
    BaseHeading,
    NewsCard,
  },
  asyncData({ store, params, query }) {
    return store.dispatch('news/fetchNews', {
      mode: Object.keys(params)[0],
      type: params.source,
      page: query.page,
    })
  },
  head() {
    return {
      title: sources[this.sourceIndex].name,
    }
  },
  computed: {
    title() {
      return `${sources[this.sourceIndex].name} news`
    },
    info() {
      return this.$store.getters['news/getInfo']
    },
    newsList() {
      return this.$store.getters['news/getNewsList']
    },
    sourceIndex() {
      return sources.findIndex(
        (source) => source.id === this.$route.params.source
      )
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
        params: this.$route.params.source,
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
