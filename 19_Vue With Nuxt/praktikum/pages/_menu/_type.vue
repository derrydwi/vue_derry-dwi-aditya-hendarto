<template>
  <v-container>
    <div v-if="!info">
      <BaseHeading :text="title" />
      <div v-if="newsList.length">
        <NewsCard :news-list="newsList" @save-detail="saveDetail" />
        <BasePagination
          :page="page"
          :pagination-length="paginationLength"
          @change-page="changePage"
        />
      </div>
      <BaseError
        v-else
        type="warning"
        :outlined="true"
        info="News not found!"
      />
    </div>
    <BaseError v-else type="error" :info="info" />
  </v-container>
</template>

<script>
import BaseError from '@/components/BaseError.vue'
import BaseHeading from '@/components/BaseHeading.vue'
import BasePagination from '@/components/BasePagination.vue'
import NewsCard from '@/components/NewsCard.vue'
import { capitalize, generatePaginationLength } from '@/utils/formatter'
import { menus, categories, sources } from '~/common/api'

export default {
  name: 'TypePage',
  components: {
    BaseError,
    BaseHeading,
    BasePagination,
    NewsCard,
  },
  validate({ params }) {
    const findMenu = menus.includes(params.menu)
    if (params.menu === menus[0]) {
      return findMenu && categories.includes(params.type)
    } else if (params.menu === menus[1]) {
      return findMenu && sources.some((source) => source.id === params.type)
    } else if (params.menu === menus[2]) {
      return findMenu && params.type
    }
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
      if (this.$route.params.menu === menus[1]) {
        return sources.find((source) => source.id === this.$route.params.type)
          .name
      } else if (this.$route.params.menu === menus[2]) {
        return `Result of "${this.$route.params.type}"`
      } else {
        return capitalize(this.$route.params.type)
      }
    },
    page() {
      return parseInt(this.$route.query.page) || 1
    },
    paginationLength() {
      return generatePaginationLength(this.$store.getters['news/getNewsLength'])
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
        name: 'menu-type',
        params: {
          menu: this.$route.params.menu,
          type: this.$route.params.type,
        },
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
