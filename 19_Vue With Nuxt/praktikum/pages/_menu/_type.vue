<template>
  <v-container>
    <div v-if="!info">
      <BaseHeading :text="title" />
      <div v-if="$fetchState.pending">
        <v-skeleton-loader
          v-for="index in 5"
          :key="index"
          class="mx-auto my-3"
          max-width="800"
          max-height="600"
          type="image@2, list-item, list-item-three-line"
        ></v-skeleton-loader>
      </div>
      <div v-else-if="newsList && newsList.length">
        <NewsCard
          v-for="(news, index) in newsList"
          :key="index"
          :index="index"
          :news="news"
          :date="dateTime(news.publishedAt)"
          @save-detail="saveDetail"
        />
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
import {
  capitalize,
  generateSlug,
  generatePaginationLength,
  generateDateTime,
} from '@/utils/formatter'
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
  async fetch() {
    await this.$store.dispatch('news/fetchNews', {
      menu: this.$route.params.menu,
      type: this.$route.params.type,
      page: this.$route.query.page,
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
    '$route.query': '$fetch',
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
    dateTime(date) {
      return generateDateTime(date)
    },
    saveDetail(index, title) {
      this.$store.dispatch('news/saveCurrentNews', index)
      this.$router.push({
        name: 'detail-slug',
        params: {
          slug: generateSlug(title),
        },
      })
    },
  },
}
</script>
