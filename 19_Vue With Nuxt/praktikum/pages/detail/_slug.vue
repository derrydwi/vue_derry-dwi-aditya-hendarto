<template>
  <v-container class="detail" fluid>
    <BaseHeading :text="news.title" class="mx-auto" />
    <v-btn class="mb-4" icon elevation="2" @click="back"
      ><v-icon>mdi-arrow-left</v-icon></v-btn
    >
    <v-img
      class="mx-md-16 mx-auto mb-4"
      max-height="500"
      position="center center"
      :src="news.urlToImage"
      :alt="news.title"
    />
    <p class="mb-4">{{ dateTime }}</p>
    <p class="mb-4">{{ news.content }}</p>
    <v-row justify="center" class="mt-2 mb-4">
      <v-btn :href="news.url" target="_blank" color="primary">
        <v-icon class="mr-2">mdi-eye-outline</v-icon>Read More</v-btn
      >
    </v-row>
  </v-container>
</template>

<script>
import BaseHeading from '@/components/BaseHeading.vue'
import { generateDateTime } from '@/utils/formatter'

export default {
  name: 'DetailPage',
  components: {
    BaseHeading,
  },
  asyncData({ store }) {
    return { news: store.getters['news/getCurrentNews'] }
  },
  head() {
    return {
      title: this.news.title,
    }
  },
  computed: {
    dateTime() {
      return generateDateTime(this.news.publishedAt)
    },
  },
  methods: {
    back() {
      this.$router.back()
    },
  },
}
</script>
