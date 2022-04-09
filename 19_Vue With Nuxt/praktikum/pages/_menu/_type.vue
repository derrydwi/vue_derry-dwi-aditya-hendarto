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
import { capitalize } from '@/utils/formatter'
import { menus, categories, sources } from '~/common/api'

export default {
  name: 'TypePage',
  components: {
    BaseError,
    BaseHeading,
    NewsCard,
  },
  validate({ params }) {
    const findMenu = menus.includes(params.menu)
    if (params.menu === menus[0]) {
      return findMenu && categories.includes(params.type)
    } else if (params.menu === menus[1]) {
      return findMenu && sources.some((source) => source.id === params.type)
    }
    return false
  },
  asyncData({ store, params, query }) {
    return store.dispatch('news/fetchNews', {
      menu: params.menu,
      type: params.type,
      page: query.page,
    })
  },
  head() {
    return { title: this.title }
  },
  computed: {
    info() {
      return this.$store.getters['news/getInfo']
    },
    newsList() {
      return this.$store.getters['news/getNewsList']
    },
    title() {
      if (this.$route.params.menu === 'source') {
        const index = sources.findIndex(
          (source) => source.id === this.$route.params.type
        )
        return sources[index].name
      } else {
        return capitalize(this.$route.params.type)
      }
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
